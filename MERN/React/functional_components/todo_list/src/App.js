import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]); /* [] to not let it break when its trying to call from an empty array vs null */

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    // setTodos and pass in a brand new array and containing all current todos plus 1 more
    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

  const handleTodoDelete = (delIndex) => {
    const filteredTodos = todos.filter((_todo, index) => {
      return index !== delIndex;
    })
    setTodos(filteredTodos);
  }

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (index === i) {
        todo.complete = !todo.complete;
        // To avoid mutating the todo directly, do this:
        // const updatedTodo = {...todo, complete: !todo.complete};
        // return updatedTodo;
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <form
        onSubmit={(event) => {
          handleNewTodoSubmit(event);
        }}
      >
        <input
          onChange={(event) => {
            setNewTodo(event.target.value);
          }}
          type="text"
          value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>

      <hr />

      {todos.map((todo, index) => {
        const todoClasses = ["bold", "italic"];

        if (todo.complete) {
          todoClasses.push("line-through");
        }

        return (
          <div key={index}>
            <input
              onChange={(event) => {
                handleToggleComplete(index);
              }}
              checked={todo.complete}
              type="checkbox"
            />
            <span className={todoClasses.join(" ")}>{todo.text}</span>
            <button
              onClick={(event) => {
                handleTodoDelete(index);
              }}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
