import React, { useState } from "react";
import "./TodoItem.css";
import { Button, Checkbox, IconButton } from "@mui/material";

const TodoItem = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="todo-item">
      <div className="dot">·</div>
      <Checkbox onClick={() => setIsClicked(!isClicked)}></Checkbox>
      <span className="text">{props.text}</span>
    </div>
  );
};

export default TodoItem;
