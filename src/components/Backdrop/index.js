import React, { useContext, useState } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import AlbumContext from '../../contexts/AlbumContext';
import './style.css';

const Backdrop = () => {
  const { albumData } = useContext(AlbumContext);
  const [items, setItems] = useState([]);

  if (albumData && albumData.image && !items.includes(albumData.image)) {
    setItems([albumData.image]);
  }

  return (
    <CSSTransitionGroup
      transitionName="opacity-anim"
      transitionEnterTimeout={100}
      transitionLeaveTimeout={100}
    >
      {items.map(imageUrl => (
        <div
          className="backdrop"
          key={imageUrl}
          style={{
            backgroundImage: `url("${imageUrl}")`,
          }}
        />
      ))}
    </CSSTransitionGroup>
  );
};

export default Backdrop;
