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
      <PageContent />
      <Loader />
    </AlbumProvider>
  );
}

const PageContent = () => (
  <div className="wrapper">
    <WeekNumber />
    <AlbumInfo />
    <div className="byline">
      A weekend hack by{" "}
      <a
        href="https://github.com/cupofjoakim"
        title="cupofjoakims github profile"
      >
        @cupofjoakim <span role="img">👋</span>
      </a>
    </div>
  </div>
);

export default App;
