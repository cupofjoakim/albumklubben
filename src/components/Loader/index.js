import React, { useContext } from "react";
import AlbumContext from "../../providers/AlbumContext";
import "./style.css";

const Loader = () => {
  const { loadingProgress } = useContext(AlbumContext);
  if (loadingProgress === 1) return null;

  return (
    <div className="loading-cover">
      <Progress percent={loadingProgress} />
    </div>
  );
};

const Progress = ({ percent }) => (
  <div className="progress">
    <div className="progress--bar" style={{ width: `${percent * 100}%` }} />
  </div>
);

export default Loader;
