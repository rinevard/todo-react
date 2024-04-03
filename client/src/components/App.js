import React, { useState } from "react";
import TodoItemList from "./TodoItemList";
import AddItemForm from "./AddItemForm";

const App = (props) => {
  const [todoItems, setTodoItems] = useState([]);

  // add a new todoItem with text 'itemText'
  const handleAddTodoItem = (itemText) => {
    setTodoItems([...todoItems, { txt: itemText, isFinished: false }]);
  };

  // delete the todoItem at index 'idxToRemove'
  const handleDeleteTodoItem = (idxToRemove) => {
    setTodoItems(todoItems.filter((_, idx) => idx !== idxToRemove));
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
