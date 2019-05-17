import React, { useContext } from 'react';
import AlbumContext from '../../providers/AlbumContext';
import './style.css';

const Backdrop = () => {
  const { albumData } = useContext(AlbumContext);
  if (!albumData) return null;

  return (
    <div
      className="backdrop"
      style={{
        backgroundImage: `url("${albumData.image}")`,
      }}
    />
  );
};

export default Backdrop;
