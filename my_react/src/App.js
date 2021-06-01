import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import axios from "axios";
import Header from './Component/Header';
import Home from './Component/Home';
import Favorite from './Component/Favorite';


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/favorite'>
            <Favorite />
          </Route>
        </Switch>

      </BrowserRouter>

    )
  }
}

export default App

