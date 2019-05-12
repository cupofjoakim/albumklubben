import React, { useContext, Fragment } from "react";
import AlbumContext from "../../providers/AlbumContext";
import "./style.css";

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

const WeekNavigation = ({ currentWeek, weeks }) => {
  if (!weeks) return null;
  const weekIndex = weeks.indexOf(currentWeek);
  const isLastWeek = weeks[weeks.length - 1] === currentWeek;
  const hasPreviousWeeks = weekIndex > 0;
  return (
    <Fragment>
      {hasPreviousWeeks && (
        <a
          className="week-number--navigation"
          href={`/?week=${weeks[weekIndex - 1]}`}
          title="Previous week"
        >
          ←
        </a>
      )}
      {!isLastWeek && (
        <a
          className="week-number--navigation"
          href={`/?week=${weeks[weekIndex + 1]}`}
          title="Next week"
        >
          →
        </a>
      )}
    </Fragment>
  );
};

export default WeekNumber;
