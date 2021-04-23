import React from "react";
import "./toDoItem.css";
export default function ToDoItem({ index, item, onClickCheck, removeItem }) {
  return (
    <div id="toDoItems">
      <input type="checkbox" onClick={onClickCheck} />
      <h3 style={{ margin: "0" }}>{index + 1}</h3>
      <h3 className="title">
        {item.title} ({item.isCompleted ? "Completed" : "Not Completed"})
      </h3>
      <button
        className="deleteIcons"
        onClick={removeItem}
        visible="false"
      ></button>
    </div>
  );
}
