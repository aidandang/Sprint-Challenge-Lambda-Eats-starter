import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Pizza from './Pizza';

export default function Routes() {
  const BASE_API_URL =  'http://localhost:8000/api/v1';

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
      {/* <Route
        exact
        path='/customers/add'
        render={(props) => <AddCustomers {...props} apiurl={BASE_API_URL} />}
      />
      <Route
        exact
        path='/orders/add'
        render={(props) => <AddOrders {...props} apiurl={BASE_API_URL} />}
      /> */}
    </Switch>
  )
}