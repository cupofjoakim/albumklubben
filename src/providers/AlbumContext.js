import React, { Component } from "react";
import Preload from "image-preload";
import { getAlbumByNameAndArtist } from "../services/AlbumService";
import { getWeek } from "../util";
import { getInfoForWeek } from "../services/GoogleDriveService";

const AlbumContext = React.createContext();

export class AlbumProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resourcesToLoad: 3,
      resourcesLoaded: 0,
      weekNumber: getWeek(),
      albumData: null
    };
  }

  async componentDidMount() {
    const weekInfo = await getInfoForWeek(this.state.weekNumber);
    this.updateLoadingProgress();
    console.log(weekInfo);

    const albumData = await getAlbumByNameAndArtist(
      weekInfo.album,
      weekInfo.artist
    );

    albumData.urls.push({ type: "spotify", url: weekInfo.spotifyUrl });
    this.setState(
      {
        albumData,
        resourcesLoaded: this.state.resourcesLoaded + 1
      },
      () => {
        Preload([albumData.image], {
          onSingleImageComplete: () => {
            this.updateLoadingProgress();
          }
        });
      }
    );
  }

  updateLoadingProgress() {
    this.setState({
      resourcesLoaded: this.state.resourcesLoaded + 1
    });
  }

  render() {
    const { children } = this.props;

    return (
      <AlbumContext.Provider
        value={{
          weekNumber: this.state.weekNumber,
          albumData: this.state.albumData,
          loadingProgress:
            this.state.resourcesLoaded / this.state.resourcesToLoad
        }}
      >
        {children}
      </AlbumContext.Provider>
    );
  }
}

export default AlbumContext;
