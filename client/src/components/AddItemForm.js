import React, { useState } from "react";

/**
 *
 * @param {onAdd(txt: String)} 创建一个以'txt'为内容的todoItem
 * @returns
 */
const AddItemForm = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === "") {
      alert("输入不能为空!");
      return;
    }
    onAdd(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo..."
        value={inputValue}
        onInput={handleInputChange}
      ></input>
      <button type="submit">Add!</button>
    </form>
  );
};

export default AddItemForm;
