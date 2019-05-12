import React, { useContext } from "react";
import AlbumContext from "../../providers/AlbumContext";

const WeekNumber = () => {
  const { weekNumber } = useContext(AlbumContext);
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "3rem",
        height: "3rem",
        backgroundColor: "yellow",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center"
      }}
    >
      {weekNumber}
    </div>
  );
};

export default WeekNumber;
