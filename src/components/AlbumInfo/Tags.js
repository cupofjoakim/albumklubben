import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from './ExternalLink';

const Tags = ({ tags }) => {
  if (tags.length === 0) return null;

  return (
    <div className="tags">
      {tags.map(({ name, url }) => (
        <ExternalLink key={name + url} className="tag" url={url}>
          #{name}
        </ExternalLink>
      ))}
    </div>
  );
};

Tags.defaultProps = {
  tags: [],
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.any),
};

export default Tags;
