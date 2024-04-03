import React from "react";
import TodoItem from "./TodoItem";

/**
 *
 * @todoItemContents 每个元素应当有txt和isFinished两个属性
 * @onDelete  onDelete(idToDelete)删除id为'idToDelete'的item
 */
const TodoItemList = ({ todoItemContents, onDelete }) => {
  // higher-order function, 返回删除在idx处的item的函数
  const deleteItemWithId = (idToDelete) => {
    return () => onDelete(idToDelete);
  };

  return (
    <div>
      {todoItemContents.map((content) => (
        <TodoItem
          key={content.id} // 使用唯一ID作为key
          deleteFunc={deleteItemWithId(content.id)}
          todoItemText={content.txt}
          isFinished={content.isFinished}
        />
      ))}
    </div>
  );
};

export default TodoItemList;
