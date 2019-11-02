import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Preload from 'image-preload';
import AlbumService from '../services/AlbumService';

const AlbumContext = React.createContext();

export const AlbumProvider = ({ children }) => {
  const [albumData, setAlbumData] = useState({});

  const loadAlbumData = async weekInfo => {
    const data = await AlbumService.getAlbumByNameAndArtist(
      weekInfo.album,
      weekInfo.artist,
    );

    data.urls.push({ type: 'spotify', url: weekInfo.spotifyUrl });
    data.forWeek = weekInfo.week;

    Preload([data.image], {
      onSingleImageComplete: () => {
        setAlbumData(data);
      },
    });
  };

  return (
    <AlbumContext.Provider
      value={{
        albumData,
        loadAlbumData,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
};

AlbumProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AlbumContext;
