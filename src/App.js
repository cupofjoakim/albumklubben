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
      <div className="wrapper">
        <WeekNumber />
        <Backdrop />
        <AlbumInfo />
        <Loader />
      </div>
    </AlbumProvider>
  );
}

export default App;
