import React, { Component } from "react";
import Preload from "image-preload";
import { getAlbumByNameAndArtist } from "../services/AlbumService";
import { getWeek, getWeekFromUrl, updateWeekParam } from "../util";
import { getWeekRows } from "../services/GoogleDriveService";

const AlbumContext = React.createContext();

export class AlbumProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourcesToLoad: 3,
      resourcesLoaded: 0,
      weekNumber: getWeekFromUrl() || getWeek(),
      weekRows: null,
      albumData: null
    };
  }

  async getWeekInfo() {
    const weekRows = await getWeekRows();
    this.setState({
      weekRows: weekRows
    });
    this.updateLoadingProgress();

    let weekInfo = weekRows.find(row => row.week === this.state.weekNumber);
    // If week isn't available, just show latest week
    if (!weekInfo) {
      weekInfo = weekRows[weekRows.length - 1];
      updateWeekParam(weekInfo.week);
      this.setState({ weekNumber: weekInfo.week });
    }
    return weekInfo;
  }

  async componentDidMount() {
    const weekInfo = await this.getWeekInfo();
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
    const {
      weekNumber,
      weekRows,
      albumData,
      resourcesLoaded,
      resourcesToLoad
    } = this.state;

    return (
      <AlbumContext.Provider
        value={{
          weekNumber: weekNumber,
          albumData: albumData,
          loadingProgress: resourcesLoaded / resourcesToLoad,
          availableWeeks: weekRows ? weekRows.map(row => row.week) : []
        }}
      >
        {children}
      </AlbumContext.Provider>
    );
  }
}

export default AlbumContext;
