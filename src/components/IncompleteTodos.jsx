import React from "react";

const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  
  return (
    <div className="incomplete-area">
      <p className="title">未完了のToDo</p>
      <ul>
        {incompleteTodos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncompleteTodos;
