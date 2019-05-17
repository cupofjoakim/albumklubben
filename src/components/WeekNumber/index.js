import React, { useContext } from 'react';
import AlbumContext from '../../providers/AlbumContext';
import WeekNavigation from './WeekNavigation';
import './style.css';

const WeekNumber = () => {
  const { weekNumber, availableWeeks } = useContext(AlbumContext);

  return (
    <div className="week-number">
      <div
        className="week-number--current"
        title={`Now showing week ${weekNumber}`}
      >
        {weekNumber}
      </div>
      <WeekNavigation weeks={availableWeeks} currentWeek={weekNumber} />
    </div>
  );
};

export default WeekNumber;
