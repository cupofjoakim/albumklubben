import React, { useContext, useState } from "react";
import { CSSTransitionGroup } from "react-transition-group";

import AlbumContext from "../../providers/AlbumContext";
import LinkIcon from "../LinkIcon";
import "./style.css";

const AlbumInfo = () => {
  const { albumData, loadingProgress } = useContext(AlbumContext);
  const [shouldAnimateIn, setShouldAnimateIn] = useState(false);
  if (!albumData) return null;

  // Use local state to stagger animation since css effects are a bit heavy
  if (loadingProgress === 1 && !shouldAnimateIn) {
    setTimeout(() => setShouldAnimateIn(true), 200);
  }

  const items = [];
  if (loadingProgress === 1 && shouldAnimateIn) {
    items.push(
      <div key="art" className="album-info--cover">
        <img alt="album cover" src={albumData.image} />
      </div>
    );
    items.push(
      <div key="information" className="album-info--meta">
        <h1 className="heading">{albumData.name}</h1>
        <p className="subheading">
          {albumData.artist} <span className="year">{albumData.year}</span>
        </p>
        {albumData.urls.map(({ type, url }) => (
          <ExternalLink key={type} type={type} url={url} />
        ))}
      </div>
    );
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

const ExternalLink = ({ type, url }) => (
  <a className="external-action" href={url}>
    <LinkIcon type={type} />
    {getLinkText(type)}
  </a>
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
