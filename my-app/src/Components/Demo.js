import React, { useState } from "react";

function Demo(props) {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ id: -1, text: "", status: false });

  const addTodo = (e) => {
    setTodo({
      id: Math.random(),
      text: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (todos.length > 0 || todo) {
      setTodos([...todos, todo]);
      setTodo({ id: -1, text: "" });
    }
  };

  const statusHandler = (key) => {
    let updatedTodoList = todos.map((todo) => {
      if (todo.id === key) {
        todo.status = !todo.status;
      }
      return todo;
    });
    setTodos(updatedTodoList);
  };

  const deleteTodo = (key) => {
    let filteredTodos = todos.filter((item) => item.id !== key);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <div>
        <h2>Add Todo</h2>
        <form onSubmit={(e) => submitHandler(e)}>
          <input
            id="add-todo-input"
            value={todo.text}
            onChange={(e) => addTodo(e)}
            type="text"
            placeholder="Add Todo..."
          />
          <button type="submit"> Submit</button>
        </form>
      </div>
      {todos.length ? (
        <div>
          <ul>
            {todos.map((todo, index) => (
              <span key={index}>
                <li>
                  {todo.text}
                  <input type="checkbox" 
                    onChange={() => statusHandler(todo.id)}
                    checked={todo.status} />
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
              </span>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Demo;
