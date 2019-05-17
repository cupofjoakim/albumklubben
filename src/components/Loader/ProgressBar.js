import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ percent }) => (
  <div className="progress">
    <div className="progress--bar" style={{ width: `${percent}%` }} />
  </div>
);

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default ProgressBar;
