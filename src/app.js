import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import UserList from "./components/user-list";

class App extends Component {
  render() {
    return (
      <main className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={UserList} />
            <Route exact path="/u/:username/:list" component={UserList} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </main>
    );
  }
}

export default App;
