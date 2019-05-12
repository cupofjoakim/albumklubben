import React from "react";
import { AlbumProvider } from "./providers/AlbumContext";
import WeekNumber from "./components/WeekNumber";
import Backdrop from "./components/Backdrop";
import AlbumInfo from "./components/AlbumInfo";
import Loader from "./components/Loader";

import "./App.css";

function App() {
  return (
    <AlbumProvider>
      <Backdrop />
      <div className="wrapper">
        <WeekNumber />
        <AlbumInfo />
        <Loader />
      </div>
    </AlbumProvider>
  );
}

export default App;
