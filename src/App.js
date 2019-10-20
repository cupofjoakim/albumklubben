import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { AlbumProvider } from './contexts/AlbumContext';
import WeekNumber from './components/WeekNumber';
import Backdrop from './components/Backdrop';
import AlbumView from './components/AlbumView';
import ListView from './components/ListView';
import Footer from './components/Footer';

import './App.css';
import { getWeek } from './util';
import { WeekProvider } from './contexts/WeekContext';

function App() {
  return (
    <WeekProvider>
      <AlbumProvider>
        <Backdrop />
        <div className="wrapper">
          <BrowserRouter>
            <Switch>
              <Route path="/week/:id">
                <WeekNumber />
                <AlbumView />
              </Route>
              {/* <Route path="/week">
                <ListView />
              </Route> */}
              <Route path="/">
                <Redirect to={`/week/${getWeek()}`} />
              </Route>
            </Switch>
          </BrowserRouter>
          <Footer />
        </div>
      </AlbumProvider>
    </WeekProvider>
  );
}

export default App;
