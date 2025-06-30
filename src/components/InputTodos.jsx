import React from "react";

const style = {
  backgroundColor: "#c6e5d9",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

const InputTodos = (props) => {
  const { todoText, onChangeTodoText, onClickAdd } = props;

  return (
    <div style={style}>
      <input
        placeholder="ToDoを入力"
        value={todoText}
        onChange={onChangeTodoText}
      />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};

export default InputTodos;
