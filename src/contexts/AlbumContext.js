import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Preload from 'image-preload';
import AlbumService from '../services/AlbumService';

const AlbumContext = React.createContext();

export class AlbumProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      albumData: null,
      loadAlbumData: async weekInfo => {
        const { loaded } = this.state;
        if (loaded) {
          this.setState({ loaded: false });
        }
        const albumData = await AlbumService.getAlbumByNameAndArtist(
          weekInfo.album,
          weekInfo.artist,
        );

        albumData.urls.push({ type: 'spotify', url: weekInfo.spotifyUrl });
        albumData.forWeek = weekInfo.week;
        this.setState(
          {
            albumData,
          },
          () => {
            Preload([albumData.image], {
              onSingleImageComplete: () => {
                this.updateLoadingProgress();
              },
            });
          },
        );
      },
    };
  }

  updateLoadingProgress() {
    this.setState({
      loaded: true,
    });
  }

  render() {
    const { children } = this.props;
    const { albumData, loadAlbumData, loaded } = this.state;

    return (
      <AlbumContext.Provider
        value={{
          albumData,
          loaded,
          loadAlbumData,
        }}
      >
        {children}
      </AlbumContext.Provider>
    );
  }
}

AlbumProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AlbumContext;
