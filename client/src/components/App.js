import React, { useState } from "react";
import TodoItemList from "./TodoItemList";
import AddItemForm from "./AddItemForm";

const App = (props) => {
  const [todoItemtexts, setTodoItemtexts] = useState([]);

  // add a new todoItem with text 'txt'
  const handleAddTodoItem = (txt) => {
    setTodoItemtexts([...todoItemtexts, txt]);
  };

  // delete the todoItem at index 'idxToRemove'
  const handleDeleteTodoItem = (idxToRemove) => {
    setTodoItemtexts(todoItemtexts.filter((_, idx) => idx !== idxToRemove));
  };

  return (
    <div>
      <TodoItemList
        todoTexts={todoItemtexts}
        onDelete={handleDeleteTodoItem}
      ></TodoItemList>
      <AddItemForm onAdd={handleAddTodoItem}></AddItemForm>
    </div>
  );
};

export default App;
