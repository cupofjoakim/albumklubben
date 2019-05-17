import React from 'react';
import PropTypes from 'prop-types';
import LinkIcon from './LinkIcon';
import ExternalLink from './ExternalLink';

const getLinkText = type => {
  switch (type) {
    case 'spotify':
      return 'Listen on Spotify';
    case 'lastfm':
      return 'LastFm';
    default:
      return null;
  }
};

const ButtonLink = ({ type, url }) => (
  <ExternalLink className="external-action" url={url}>
    <LinkIcon type={type} />
    {getLinkText(type)}
  </ExternalLink>
);

ButtonLink.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ButtonLink;
