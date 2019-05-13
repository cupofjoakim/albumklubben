import React, { useContext, useState } from "react";
import { CSSTransitionGroup } from "react-transition-group";

import AlbumContext from "../../providers/AlbumContext";
import LinkIcon from "../LinkIcon";
import "./style.css";

const AlbumInfo = () => {
  const { albumData, loadingProgress } = useContext(AlbumContext);
  const [shouldAnimateIn, setShouldAnimateIn] = useState(false);
  if (!albumData) return null;

  // Use local state to stagger animation.
  // Without this, the loader cover and the animation would happen at the same
  // time, resulting in kind of a heavy load.
  if (loadingProgress === 1 && !shouldAnimateIn) {
    setTimeout(() => setShouldAnimateIn(true), 200);
  }

  const items = [];
  if (loadingProgress === 1 && shouldAnimateIn) {
    items.push(<AlbumArt key={albumData.image} imageUrl={albumData.image} />);
    items.push(<AlbumMeta key={albumData} albumData={albumData} />);
  }

  return (
    <main className="album-info">
      <CSSTransitionGroup
        transitionName="album-info--anim"
        transitionEnterTimeout={items.length * 200 + 300}
        transitionLeaveTimeout={300}
      >
        {items}
      </CSSTransitionGroup>
    </main>
  );
};

const AlbumArt = ({ imageUrl }) => (
  <div key="art" className="album-info--cover">
    <img alt="album cover" src={imageUrl} />
  </div>
);

const AlbumMeta = ({ albumData: { name, year, artist, urls, tags } }) => {
  const lastFMUrl = urls.find(url => url.type === "lastfm").url;
  const artistUrl = lastFMUrl.substr(0, lastFMUrl.lastIndexOf("/"));

  return (
    <div key="information" className="album-info--meta">
      <h1 className="heading">
        <ExternalLink url={lastFMUrl}>{name}</ExternalLink>
      </h1>
      <p className="subheading">
        <ExternalLink url={artistUrl}>{artist}</ExternalLink>{" "}
        <span className="year">{year}</span>
      </p>
      <Tags tags={tags} />
      {urls.map(({ type, url }) => (
        <ButtonLink key={type} type={type} url={url} />
      ))}
    </div>
  );
};

const ExternalLink = ({ url, children, ...props }) => (
  <a target="_blank" rel="noopener noreferrer" href={url} {...props}>
    {children}
  </a>
);

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

const ButtonLink = ({ type, url }) => (
  <ExternalLink className="external-action" url={url}>
    <LinkIcon type={type} />
    {getLinkText(type)}
  </ExternalLink>
);

const getLinkText = type => {
  switch (type) {
    case "spotify":
      return "Listen on Spotify";
    case "lastfm":
      return "LastFm";
    default:
      return null;
  }
};

export default AlbumInfo;
