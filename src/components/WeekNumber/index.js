import React, { useContext } from 'react';
import AlbumContext from '../../providers/AlbumContext';
import WeekNavigation from './WeekNavigation';
import './style.css';

const WeekNumber = () => {
  const { weekNumber } = useContext(AlbumContext);

  return (
    <div className="week-number">
      <div
        className="week-number--current"
        title={`Now showing week ${weekNumber}`}
      >
        {weekNumber}
      </div>
      <WeekNavigation />
    </div>
  );
};

export default WeekNumber;
