import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const WeekNavigation = ({ currentWeek, weeks }) => {
  if (!weeks) return null;
  const weekIndex = weeks.indexOf(currentWeek);
  const isLastWeek = weeks[weeks.length - 1] === currentWeek;
  const hasPreviousWeeks = weekIndex > 0;
  const pathName = window.location.pathname;

  return (
    <Fragment>
      {hasPreviousWeeks && (
        <a
          className="week-number--navigation"
          href={`${pathName}?week=${weeks[weekIndex - 1]}`}
          title="Previous week"
        >
          ←
        </a>
      )}
      {!isLastWeek && (
        <a
          className="week-number--navigation"
          href={`${pathName}?week=${weeks[weekIndex + 1]}`}
          title="Next week"
        >
          →
        </a>
      )}
    </Fragment>
  );
};

WeekNavigation.propTypes = {
  currentWeek: PropTypes.number.isRequired,
  weeks: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default WeekNavigation;
