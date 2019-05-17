const getWeek = (date = new Date()) => {
  // Reset hours to prevent funky behaviour
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  // January 4 is always in week 1.
  const week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return (
    1 +
    Math.round(
      ((date.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7,
    )
  );
};

const getWeekFromUrl = () => {
  const weekParam = new URL(window.location.href).searchParams.get('week');
  if (!weekParam) return null;
  return +weekParam;
};

const getWeekLink = week => `${window.location.pathname}?week=${week}`;

const updateWeekParam = weekNum => {
  window.history.replaceState(
    '',
    '',
    `${window.location.pathname}?week=${weekNum}`,
  );
};

export { getWeek, getWeekFromUrl, getWeekLink, updateWeekParam };
