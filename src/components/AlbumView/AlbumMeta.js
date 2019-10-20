import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from './ExternalLink';
import Tags from './Tags';
import ButtonLink from './ButtonLink';

const AlbumMeta = ({ albumData: { name, year, artist, urls, tags } }) => {
  const lastFMUrl = urls.find(url => url.type === 'lastfm').url;
  const artistUrl = lastFMUrl.substr(0, lastFMUrl.lastIndexOf('/'));

  return (
    <div key="information" className="album-info--meta">
      <h1 className="heading">
        <ExternalLink url={lastFMUrl}>{name}</ExternalLink>
      </h1>
      <p className="subheading">
        <ExternalLink url={artistUrl}>{artist}</ExternalLink>{' '}
        <span className="year">{year}</span>
      </p>
      <Tags tags={tags} />
      {urls.map(({ type, url }) => (
        <ButtonLink key={type} type={type} url={url} />
      ))}
    </div>
  );
};

AlbumMeta.propTypes = {
  albumData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.string,
    artist: PropTypes.string.isRequired,
    urls: PropTypes.array.isRequired,
    tags: PropTypes.array.isRequired,
  }).isRequired,
};

export default AlbumMeta;
