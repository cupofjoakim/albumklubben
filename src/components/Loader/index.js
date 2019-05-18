import React, { useContext } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import AlbumContext from '../../contexts/AlbumContext';
import ProgressBar from './ProgressBar';
import './style.css';

const Loader = () => {
  const { loadingProgress } = useContext(AlbumContext);

  const items = [];
  if (loadingProgress !== 1) {
    items.push(
      <div key="loadingcover" className="loading-cover">
        <ProgressBar percent={loadingProgress * 100} />
        <div className="loading-message">Loading album data...</div>
      </div>,
    );
  }

  return (
    <CSSTransitionGroup
      transitionName="loading-anim"
      transitionEnterTimeout={100}
      transitionLeaveTimeout={300}
    >
      {items}
    </CSSTransitionGroup>
  );
};

export default Loader;
