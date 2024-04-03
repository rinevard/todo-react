import React, { useState } from "react";
import "./TodoItem.css";
import { Checkbox } from "@mui/material";

/**
 *
 * deleteFunc 一个删除该item的函数, 通过deleteFunc()来调用
 * todoItemText 该item显示的文字
 * isFinished 该item是否完成
 */
const TodoItem = ({ deleteFunc, todoItemText, isFinished }) => {
  // fail fast
  if (deleteFunc === undefined) {
    console.error("'deleteFunc' is undefined!");
  }
  if (todoItemText === undefined) {
    console.error("'todoItemText' is undefined!");
  }
  if (isFinished === undefined) {
    console.error("'isFinished' is undefined!");
  }

  const [itemIsFinished, setItemIsFinished] = useState(isFinished);
  const handleChckboxClick = () => {
    setItemIsFinished(!itemIsFinished);
  };

  return (
    <div className={"todo-item"}>
      <div className="dot">·</div>
      <Checkbox
        checked={itemIsFinished}
        onClick={handleChckboxClick}
      ></Checkbox>
      <span className={"text " + (itemIsFinished ? "finished-text" : "")}>
        {todoItemText}
      </span>
      <button onClick={deleteFunc} className="button">
        X
      </button>
    </div>
  );
};

export default TodoItem;
