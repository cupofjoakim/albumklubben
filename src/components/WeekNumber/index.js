import React, { useContext } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import WeekContext from '../../contexts/WeekContext';
import WeekNavigation from './WeekNavigation';
import './style.css';

const WeekNumber = () => {
  const { weekRows } = useContext(WeekContext);
  const { id } = useParams();

  if (!weekRows || !id) {
    return null;
  }
  const weekNumberFromParam = parseInt(id, 10);
  const weekRow = weekRows.filter(row => row.week === weekNumberFromParam)[0];

  if (!weekRow) {
    const latestEntryWeek = weekRows
      .map(row => row.week)
      .sort((a, b) => a - b)
      .pop();

    return <Redirect to={`/week/${latestEntryWeek}`} />;
  }

  return (
    <div className="week-number">
      <div className="week-number--current" title={`Now showing week ${id}`}>
        {id}
      </div>
      <WeekNavigation />
    </div>
  );
};

export default WeekNumber;
