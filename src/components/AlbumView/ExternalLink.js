import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ url, children, ...props }) => (
  <a target="_blank" rel="noopener noreferrer" href={url} {...props}>
    {children}
  </a>
);

ExternalLink.defaultProps = {
  children: [],
};

ExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default ExternalLink;
