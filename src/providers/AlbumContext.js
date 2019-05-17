import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Preload from 'image-preload';
import AlbumService from '../services/AlbumService';
import { getWeek, getWeekFromUrl, updateWeekParam } from '../util';
import GoogleDriveService from '../services/GoogleDriveService';

const AlbumContext = React.createContext();

export class AlbumProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourcesToLoad: 3,
      resourcesLoaded: 0,
      weekNumber: getWeekFromUrl() || getWeek(),
      weekRows: null,
      albumData: null,
    };
  }

  async componentDidMount() {
    const weekInfo = await this.getWeekInfo();
    const albumData = await AlbumService.getAlbumByNameAndArtist(
      weekInfo.album,
      weekInfo.artist,
    );

    albumData.urls.push({ type: 'spotify', url: weekInfo.spotifyUrl });
    this.setState(
      ({ resourcesLoaded }) => ({
        albumData,
        resourcesLoaded: resourcesLoaded + 1,
      }),
      () => {
        Preload([albumData.image], {
          onSingleImageComplete: () => {
            this.updateLoadingProgress();
          },
        });
      },
    );
  }

  async getWeekInfo() {
    const weekRows = await GoogleDriveService.getWeekRows();
    this.setState({
      weekRows,
    });
    this.updateLoadingProgress();

    const { weekNumber } = this.state;
    let weekInfo = weekRows.find(row => row.week === weekNumber);
    // If week isn't available, just show latest week
    if (!weekInfo) {
      weekInfo = weekRows[weekRows.length - 1];
      updateWeekParam(weekInfo.week);
      this.setState({ weekNumber: weekInfo.week });
    }
    return weekInfo;
  }

  updateLoadingProgress() {
    this.setState(({ resourcesLoaded }) => ({
      resourcesLoaded: resourcesLoaded + 1,
    }));
  }

  render() {
    const { children } = this.props;
    const {
      weekNumber,
      weekRows,
      albumData,
      resourcesLoaded,
      resourcesToLoad,
    } = this.state;

    return (
      <AlbumContext.Provider
        value={{
          weekNumber,
          albumData,
          loadingProgress: resourcesLoaded / resourcesToLoad,
          availableWeeks: weekRows ? weekRows.map(row => row.week) : [],
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
