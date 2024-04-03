import React from "react";
import TodoItem from "./TodoItem";

/**
 *
 * @todoItemContents 每个元素应当有txt和isFinished两个属性
 * @onDelete  onDelete(i)删除下标为i的item
 */
const TodoItemList = ({ todoItemContents, onDelete }) => {
  // higher-order function, 返回删除在idx处的item的函数
  const deleteItemAt = (idx) => {
    return () => onDelete(idx);
  };

  return (
    <div>
      {todoItemContents.map((content, idx) => (
        <TodoItem
          deleteFunc={deleteItemAt(idx)}
          todoItemText={content.txt}
          isFinished={content.isFinished}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItemList;
