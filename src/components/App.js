import React, { useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Nav from './navigation/Nav';
import Settings from './pages/Settings';
import QuickStart from './pages/QuickStart';
import Timer from './timer/Timer';
import { changeSound } from '../actions';
import { LOCALSTORAGE } from '../configs';

import './App.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const sound = localStorage.getItem(LOCALSTORAGE.sound);
    if (sound) {
      dispatch(changeSound(sound));
    }
  }, [dispatch]);

  return (
    <HashRouter basename="/">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Timer />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/quick-start">
          <QuickStart />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
