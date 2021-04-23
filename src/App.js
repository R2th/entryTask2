import "./App.css";
import React, { Component } from "react";
import ToDoItem from "./toDoItems.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import history from "./history.js";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { title: "task 1", isCompleted: true },
        { title: "task 2", isCompleted: false },
      ],
    };
  }
  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("data"));
    this.setState({ data: data });
  }
  
  ItemsCheck = (item, index) => {
    return (e) => {
      const isCompleted = item.isCompleted;
      const title = item.title;
      let data = this.state.data;
      data[index] = { ...data[index], title: title, isCompleted: !isCompleted };
      this.setState({ data });
      localStorage.setItem("data", JSON.stringify(data));
    };
  };
  addItem = (e) => {
    if (e.keyCode === 13 && e.target.value != "") {
      let newItem = e.target.value;
      let data = this.state.data;
      data = [{ title: newItem, isCompleted: false }, ...data];
      this.setState({ data: data });
      e.target.value = "";
    }
  };
  render() {
    const toDoItems = this.state.data;
    return (
      <div>
        <Router history={history}>
          <Switch>
            <div id="to-do-app">
              <Route path="/to-do-app" />
              <input onKeyUp={this.addItem} placeholder="add new item" />
              {toDoItems.map((item, index) => (
                <ToDoItem
                  index={index}
                  item={item}
                  onClickCheck={this.ItemsCheck(item, index)}
                />
              ))}
            </div>
            <div></div>
          </Switch>
        </Router>
      </div>
    );
  }
}
