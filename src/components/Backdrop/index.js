import React, { useContext } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import AlbumContext from '../../contexts/AlbumContext';
import './style.css';

const Backdrop = () => {
  const { loaded, albumData } = useContext(AlbumContext);

  const items = [];
  if (loaded && albumData.image) {
    items.push(
      <div
        className="backdrop"
        style={{
          backgroundImage: `url("${albumData.image}")`,
        }}
      />,
    );
  }

  return (
    <CSSTransitionGroup
      transitionName="opacity-anim"
      transitionEnterTimeout={100}
      transitionLeaveTimeout={300}
    >
      {items}
    </CSSTransitionGroup>
  );
};

export default Backdrop;
