import "./App.css";
import React, { Component } from "react";
import ToDoItem from "./toDoItems.js";
import "./toDoApp.css";
export default class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { title: "task 1", isCompleted: true },
        { title: "task 2", isCompleted: false },
      ],
    };
    this.removeItem = this.removeItem.bind(this);
  }
  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("data"));
    this.setState({ data: data });
  }
  componentDidUpdate() {
    let data = this.state.data;
    localStorage.setItem("data", JSON.stringify(data));
  }
  ItemsCheck = (item, index) => {
    return (e) => {
      const isCompleted = item.isCompleted;
      const title = item.title;
      let data = this.state.data;
      data[index] = { ...data[index], title: title, isCompleted: !isCompleted };
      this.setState({ data });
    };
  };
  addItem = (e) => {
    if (e.keyCode === 13 && e.target.value !== "") {
      let newItem = e.target.value;
      let data = this.state.data;
      data = [{ title: newItem, isCompleted: false }, ...data];
      this.setState({ data: data });
      e.target.value = "";
    }
  };
  removeItem = (item, index) => {
    let data = this.state.data;
    data = [...data.slice(0, index), ...data.slice(index + 1)];
    this.setState({ data: data });
  };
  render() {
    const toDoItems = this.state.data;
    return (
      <div id="to-do-app">
        <div class="e-flex">
          <div class="e-flex-item">
            <div class="e-flex-image"></div>
            <input
              id="addItem"
              onKeyUp={this.addItem}
              placeholder="add new item"
            />
            <div class="e-flex-content">
              <div class="e-flex-title">
                <span>
                  {toDoItems.map((item, index) => (
                    <ToDoItem
                      index={index}
                      item={item}
                      removeItem={() => this.removeItem(item, index)}
                      onClickCheck={this.ItemsCheck(item, index)}
                    />
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
