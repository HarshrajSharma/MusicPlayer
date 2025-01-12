import React from "react";
import Grid1 from "./grids/Grid1";
import "./HomeLayout.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Navbar from "./Navbar/Navbar";
import Favourties from "./Favourites/Favourties";
import MusicPlayer from "./MusicPlayer/MusicPlayer";
export default function HomeLayout() {
  return (
    <Router>
    <div className="HomeLayout">
      <Navbar />
      <div className="mainContent">
        <Switch>
          <Route exact path='/'>
        <Grid1 />
        </Route>
        <Route path='/favourites'>
        <Favourties/>
        </Route>
        </Switch>
      </div>
      <div className="musicPlayer">
       <MusicPlayer />
      </div>
    </div>
    </Router>
  );
}
