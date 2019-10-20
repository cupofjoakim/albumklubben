import React from 'react';
import PropTypes from 'prop-types';

const AlbumArt = ({ imageUrl }) => (
  <div key="art" className="album-info--cover">
    <img alt="album cover" src={imageUrl} />
  </div>
);

AlbumArt.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default AlbumArt;
