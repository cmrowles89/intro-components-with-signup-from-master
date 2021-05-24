/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Form from './Components/Form';
import './Styles/Login.css';
import Grid from './Components/Grid';
import './Styles/Grid.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Form} />

        <Route exact path="/grid" component={Grid} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
