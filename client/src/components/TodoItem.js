import React, { useState } from "react";
import "./TodoItem.css";
import { Checkbox } from "@mui/material";

/**
 *
 * deleteFunc 一个删除该item的函数
 * todoItemContent 该item显示的文字
 */
const TodoItem = ({ deleteFunc, todoItemContent }) => {
  const [isClicked, setIsClicked] = useState(false);

  // defensive
  if (deleteFunc === undefined) {
    console.error("Delete function doesn't exist!");
  }
  if (todoItemContent === undefined) {
    console.error("Text doesn't exist!");
  }

  const handleChckboxClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={"todo-item"}>
      <div className="dot">·</div>
      <Checkbox checked={isClicked} onClick={handleChckboxClick}></Checkbox>
      <span className={"text " + (isClicked ? "finished-text" : "")}>
        {todoItemContent}
      </span>
      <button onClick={deleteFunc} className="button">
        X
      </button>
    </div>
  );
};

export default TodoItem;
