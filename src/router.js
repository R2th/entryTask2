import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ToDoApp from "./ToDoApp.js";
import User from "./User.js";
export default class RouterTask extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/to-do-list" />
            </Route>
            <Route path="/to-do-list" component={ToDoApp} />
            <Route path="/user/:id" component={User} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
