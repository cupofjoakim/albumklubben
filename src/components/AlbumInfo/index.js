import React, { useContext, useState } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import AlbumContext from '../../providers/AlbumContext';
import AlbumArt from './AlbumArt';
import AlbumMeta from './AlbumMeta';
import './style.css';

const AlbumInfo = () => {
  const { albumData, loadingProgress } = useContext(AlbumContext);
  const [shouldAnimateIn, setShouldAnimateIn] = useState(false);
  if (!albumData) return null;

  // Use local state to stagger animation.
  // Without this, the loader cover and the animation would happen at the same
  // time, resulting in kind of a heavy load.
  if (loadingProgress === 1 && !shouldAnimateIn) {
    setTimeout(() => setShouldAnimateIn(true), 200);
  }

  const items = [];
  if (loadingProgress === 1 && shouldAnimateIn) {
    items.push(<AlbumArt key={albumData.image} imageUrl={albumData.image} />);
    items.push(<AlbumMeta key={albumData} albumData={albumData} />);
  }

  return (
    <main className="album-info">
      <CSSTransitionGroup
        transitionName="album-info--anim"
        transitionEnterTimeout={items.length * 200 + 300}
        transitionLeaveTimeout={300}
      >
        {items}
      </CSSTransitionGroup>
    </main>
  );
};

export default AlbumInfo;
