import React, { useContext, useState } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { useParams } from 'react-router-dom';

import AlbumContext from '../../contexts/AlbumContext';
import WeekContext from '../../contexts/WeekContext';
import AlbumArt from './AlbumArt';
import AlbumMeta from './AlbumMeta';
import './style.css';

const AlbumView = () => {
  const { weekRows } = useContext(WeekContext);
  const { albumData, loaded, loadAlbumData } = useContext(AlbumContext);

  const [shouldAnimateIn, setShouldAnimateIn] = useState(false);
  const { id } = useParams();
  if (!weekRows) return null;

  const weekInfo = weekRows.filter(row => row.week === parseInt(id, 10)).pop();

  if (!albumData || albumData.forWeek !== weekInfo.week) {
    loadAlbumData(weekInfo);
    return null;
  }

  // Use local state to stagger animation.
  // Without this, the loader cover and the animation would happen at the same
  // time, resulting in kind of a heavy load.
  if (loaded && !shouldAnimateIn) {
    setTimeout(() => setShouldAnimateIn(true), 200);
  }

  const items = [];
  if (loaded && shouldAnimateIn) {
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

export default AlbumView;
