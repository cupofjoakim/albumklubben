import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import { useParams } from 'react-router-dom';

import AlbumContext from '../../contexts/AlbumContext';
import WeekContext from '../../contexts/WeekContext';
import AlbumArt from './AlbumArt';
import AlbumMeta from './AlbumMeta';
import './style.css';

const AlbumView = () => {
  const { weekRows } = useContext(WeekContext);
  const { albumData, loadAlbumData } = useContext(AlbumContext);
  const [shownItems, setShownItems] = useState([]);
  const { id } = useParams();

  if (!weekRows) return null;

  const weekInfo = weekRows.filter(row => row.week === parseInt(id, 10)).pop();

  if (!albumData || albumData.forWeek !== weekInfo.week) {
    loadAlbumData(weekInfo);
    return null;
  }

  if (!shownItems.map(i => i.forWeek).includes(albumData.forWeek)) {
    setShownItems([albumData]);
  }

  return (
    <main className="album-info">
      <CSSTransitionGroup
        transitionName="album-info--anim"
        transitionEnterTimeout={shownItems.length * 200 + 300}
        transitionLeaveTimeout={300}
      >
        {shownItems.map(data => (
          <AlbumInfo albumData={data} key={JSON.stringify(data)} />
        ))}
      </CSSTransitionGroup>
    </main>
  );
};

const AlbumInfo = ({ albumData }) => (
  <>
    <AlbumArt imageUrl={albumData.image} />
    <AlbumMeta albumData={albumData} />
  </>
);

AlbumInfo.propTypes = {
  albumData: PropTypes.shape({
    image: PropTypes.string,
  }).isRequired,
};

export default AlbumView;
