/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Form from './Components/Form';
import './Styles/Login.css';
import Grid from './Components/Grid';
import './Styles/Grid.css';
import { SignUpContextProvider } from './Helper/Context';

function App() {
  return (
    <SignUpContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>

          <Route exact path="/grid" component={Grid} />
        </Switch>
      </BrowserRouter>
    </SignUpContextProvider>

  );
}

export default App;
