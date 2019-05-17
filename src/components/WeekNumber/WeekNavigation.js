import React, { useState, useContext, Fragment } from 'react';
import PrevNextWeek from './PrevNextWeek';
import { getWeekLink, getWeek } from '../../util';
import AlbumContext from '../../providers/AlbumContext';

const WeekNavigation = () => {
  const { weekNumber, availableWeeks } = useContext(AlbumContext);
  const [filter, setFilter] = useState('');
  if (!availableWeeks) return null;

  const weeksToShow = availableWeeks.filter(({ week, artist, album }) => {
    if (!filter) return true;
    const baseFilter = filter.toLowerCase();
    const searchables = [week.toString(), album, artist];
    return searchables.some(searchable =>
      searchable.toLowerCase().includes(baseFilter),
    );
  });
  const currentWeek = getWeek();

  return (
    <Fragment>
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
            <a
              key={`listnav-${week}`}
              className="week-number--list-item"
              href={getWeekLink(week)}
            >
              <div className="week-number--list-item--week">
                <span>{week}</span>
              </div>
              {album} - {artist}
              {week === currentWeek && (
                <span className="secondary-label">(Current week)</span>
              )}
            </a>
          ))}
        </div>
      </div>
      <PrevNextWeek
        displayedWeek={weekNumber}
        weeks={availableWeeks.map(({ week }) => week)}
      />
    </Fragment>
  );
};

export default WeekNavigation;
