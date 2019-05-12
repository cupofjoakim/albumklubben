import React, { useContext } from "react";
import AlbumContext from "../../providers/AlbumContext";
import "./style.css";

const AlbumInfo = () => {
  const { albumData } = useContext(AlbumContext);
  if (!albumData) return null;

  return (
    <main className="album-info">
      <div className="album-info--cover">
        <img alt="album cover" src={albumData.image} />
      </div>
      <div className="album-info--meta">
        <h1 className="heading">{albumData.name}</h1>
        <p className="subheading">
          {albumData.artist} <span className="year">{albumData.year}</span>
        </p>
        {albumData.urls.map(({ type, url }) => (
          <ExternalLink key={type} type={type} url={url} />
        ))}
      </div>
    </main>
  );
};

const ExternalLink = ({ type, url }) => (
  <a className="external-action" href={url}>
    <LinkIcon type={type} />
    {getLinkText(type)}
  </a>
);

const LinkIcon = ({ type }) => {
  switch (type) {
    case "spotify":
      return <SpotifyIcon />;
    case "lastfm":
      return <LastFMIcon />;
    default:
      return null;
  }
};

const SpotifyIcon = () => (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
  >
    <path
      fill="#1DB954"
      d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"
    />
  </svg>
);

const LastFMIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="#D41E08"
      d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.664 15.889c-2.773 0-3.736-1.25-4.248-2.806l-.515-1.604c-.385-1.17-.834-2.084-2.244-2.084-.979 0-1.974.706-1.974 2.678 0 1.539.786 2.502 1.894 2.502 1.249 0 2.083-.931 2.083-.931l.515 1.396s-.866.85-2.679.85c-2.245-.001-3.496-1.316-3.496-3.754 0-2.534 1.251-4.025 3.607-4.025 2.133 0 3.208.77 3.881 2.854l.53 1.604c.385 1.171 1.058 2.021 2.678 2.021 1.091 0 1.668-.24 1.668-.834 0-.465-.273-.802-1.09-.994l-1.091-.256c-1.331-.321-1.861-1.01-1.861-2.101 0-1.748 1.412-2.293 2.854-2.293 1.638 0 2.63.593 2.759 2.037l-1.604.192c-.063-.69-.48-.979-1.251-.979-.706 0-1.138.321-1.138.866 0 .481.208.77.914.93l1.025.225c1.381.321 2.119.994 2.119 2.293 0 1.603-1.347 2.213-3.336 2.213z"
    />
  </svg>
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
