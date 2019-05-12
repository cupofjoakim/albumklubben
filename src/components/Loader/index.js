import React, { useContext } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import AlbumContext from "../../providers/AlbumContext";
import "./style.css";

const Loader = () => {
  const { loadingProgress } = useContext(AlbumContext);

  const items = [];
  if (loadingProgress !== 1) {
    items.push(
      <div key="loadingcover" className="loading-cover">
        <Progress percent={loadingProgress * 100} />
        <div className="loading-message">Loading album data...</div>
      </div>
    );
  }

  return (
    <CSSTransitionGroup
      transitionName="loading-anim"
      transitionEnterTimeout={100}
      transitionLeaveTimeout={300}
    >
      {items}
    </CSSTransitionGroup>
  );
};

const Progress = ({ percent }) => (
  <div className="progress">
    <div className="progress--bar" style={{ width: `${percent}%` }} />
  </div>
);

export default Loader;
