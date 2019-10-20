import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PrevNextWeek = ({ displayedWeek, weeks }) => {
  const weekIndex = weeks.indexOf(displayedWeek);
  const isLastWeek = weeks[weeks.length - 1] === displayedWeek;
  const hasPreviousWeeks = weekIndex > 0;

  return (
    <>
      {hasPreviousWeeks && (
        <Link
          className="week-number--navigation right"
          to={`/week/${weeks[weekIndex - 1]}`}
          title="Previous week"
        >
          <span>←</span>
        </Link>
      )}
      {!isLastWeek && (
        <Link
          className="week-number--navigation left"
          to={`/week/${weeks[weekIndex + 1]}`}
          title="Next week"
        >
          <span>→</span>
        </Link>
      )}
    </>
  );
};

PrevNextWeek.propTypes = {
  displayedWeek: PropTypes.number.isRequired,
  weeks: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default PrevNextWeek;
