import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { getWeekLink } from '../../util';

const PrevNextWeek = ({ displayedWeek, weeks }) => {
  const weekIndex = weeks.indexOf(displayedWeek);
  const isLastWeek = weeks[weeks.length - 1] === displayedWeek;
  const hasPreviousWeeks = weekIndex > 0;

  return (
    <Fragment>
      {hasPreviousWeeks && (
        <a
          className="week-number--navigation"
          href={getWeekLink(weeks[weekIndex - 1])}
          title="Previous week"
        >
          ←
        </a>
      )}
      {!isLastWeek && (
        <a
          className="week-number--navigation"
          href={getWeekLink(weeks[weekIndex + 1])}
          title="Next week"
        >
          →
        </a>
      )}
    </Fragment>
  );
};

PrevNextWeek.propTypes = {
  displayedWeek: PropTypes.number.isRequired,
  weeks: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default PrevNextWeek;
