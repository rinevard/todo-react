import React from "react";
import TodoItem from "./TodoItem";

const App = (props) => {
  return (
    <div>
      <TodoItem text="TODO1"></TodoItem>
      <TodoItem text="hello, world!"></TodoItem>
    </div>
  );
};

export default App;
