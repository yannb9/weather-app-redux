import React from 'react';
import Forecast from './Containers/Forecast'
import Favorites from './Containers/Favorites'
import {Switch, Route, useLocation} from "react-router-dom";
import './App.css';

function App() {
  const location = useLocation();
  console.log(location)
  return (
      <Switch location={location} key={location.key}>
      <Route exact path="/">
          <Forecast />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
      </Switch>
  );
}

export default App;
