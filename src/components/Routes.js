import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Pizza from './Pizza';

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        path='/'
        render={(props) => <Home {...props} />}
      />
      <Route
        exact
        path='/pizza'
        render={(props) => <Pizza {...props} />}
      />
    </Switch>
  )
}