import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoTexts, onDelete }) => {
  // higher-order function, 返回删除在idx处的item的函数
  const deleteItemAt = (idx) => {
    return () => onDelete(idx);
  };

  return (
    <div>
      {todoTexts.map((txt, idx) => (
        <TodoItem
          deleteFunc={deleteItemAt(idx)}
          todoItemContent={txt}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
