import React, { useState } from "react";
import TodoItemList from "./TodoItemList";
import AddItemForm from "./AddItemForm";

const App = (props) => {
  const [todoItems, setTodoItems] = useState([]);

  // add a new todoItem with text 'itemText'
  const handleAddTodoItem = (itemText) => {
    // 假设使用当前时间戳作为每个待办项的唯一ID
    const newItem = { id: Date.now(), txt: itemText, isFinished: false };
    setTodoItems([...todoItems, newItem]);
  };

  // delete the todoItem at index 'idToRemove'
  const handleDeleteTodoItem = (idToRemove) => {
    setTodoItems(todoItems.filter((item) => item.id !== idToRemove));
  };

  return (
    <div>
      <TodoItemList
        todoItemContents={todoItems}
        onDelete={handleDeleteTodoItem}
      ></TodoItemList>
      <AddItemForm onAdd={handleAddTodoItem}></AddItemForm>
    </div>
  );
};

export default App;
