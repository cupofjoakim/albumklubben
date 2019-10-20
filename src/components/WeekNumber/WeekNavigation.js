import React, { useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import PrevNextWeek from './PrevNextWeek';
import WeekContext from '../../contexts/WeekContext';

const WeekNavigation = () => {
  const { weekRows } = useContext(WeekContext);
  const { id } = useParams();
  const [filter, setFilter] = useState('');
  if (!weekRows) return null;

  const weeksToShow = weekRows.filter(({ week, artist, album }) => {
    if (!filter) return true;
    const baseFilter = filter.toLowerCase();
    const searchables = [week.toString(), album, artist];
    return searchables.some(searchable =>
      searchable.toLowerCase().includes(baseFilter),
    );
  });
  const currentWeek = parseInt(id, 10);

  return (
    <>
      <div className="week-number--nav-container">
        <div className="week-number--list-header">
          <input
            className="filter-input"
            onChange={({ target: { value } }) => setFilter(value)}
            placeholder="Filter albums"
          />
        </div>
        <div className="week-number--list">
          {weeksToShow.map(({ week, album, artist }) => (
            <Link
              key={`listnav-${week}`}
              className="week-number--list-item"
              to={`/week/${week}`}
            >
              <div className="week-number--list-item--week">
                <span>{week}</span>
              </div>
              {album} - {artist}
              {week === currentWeek && (
                <span className="secondary-label">(Current week)</span>
              )}
            </Link>
          ))}
        </div>
      </div>
      <PrevNextWeek
        displayedWeek={currentWeek}
        weeks={weekRows.map(({ week }) => week)}
      />
    </>
  );
};

export default WeekNavigation;
