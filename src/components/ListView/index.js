import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import WeekContext from '../../contexts/WeekContext';
import './style.css';

const ListView = () => {
  const { weekRows } = useContext(WeekContext);
  if (!weekRows) return null;

  return (
    <div className="scrollable">
      <h1>All Weeks</h1>
      <div className="grid">
        {weekRows
          .sort((rowA, rowB) => rowB.week - rowA.week)
          .map(row => (
            <Link
              className="grid-entry"
              key={JSON.stringify(row)}
              to={`/week/${row.week}`}
            >
              <div className="grid-entry--weeknum">{row.week}</div>
              <div className="grid-entry--info">
                <div className="grid-entry--info--album">{row.album}</div>
                <div className="grid-entry--info--artist">{row.artist}</div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ListView;
