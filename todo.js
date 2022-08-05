import React, { useState } from "react";
// import "./App.css";
let globalId = 0;
function Sahil() {
  const [task, setTask] = useState(" ");
  const [todos, setTodos] = useState([]);

  const createTodo = () => {
    globalId++;
    setTodos((oldTodos) => [...oldTodos, { todo: task, id: globalId }]);
    setTask("");
  };

  function deleteItem(itemID) {
    alert("You want to delete task. ");
    setTodos((oldTodos) => oldTodos.filter((item) => item.id !== itemID));
  }

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          padding: 5,
          background: "black",
          color: "white",
          fontWeight: "bold",
          textTransform: "uppercase",
          fontSize: 20
        }}
      >
        <h1>To Do App</h1>
      </div>

      <input
        style={{
          boxSizing: 50,
          alignItems: "center",

          marginTop: 30,
          marginLeft: 500
        }}
        type="text"
        value={task}
        onChange={(event) => {
          setTask(event.target.value);
        }}
      />
      <button
        style={{
          marginTop: 40,
          marginLeft: 10,
          color: "black",
          background: "green",
          width: 80,
          cursor: "pointer",
          borderRadius: 10,
          border: "white"
        }}
        // className="custom-btn add-btn"
        onClick={() => createTodo()}
      >
        Create Task
      </button>

      <ul>
        {todos.map((item, index) => {
          return (
            <div
              style={{
                alignItems: "center",
                display: "",
                marginTop: 30,
                marginLeft: 500
              }}
              key={item.id}
            >
              <li>
                ({item.id}) {item.todo}
                {/* {globalId} */}
              </li>

              <button
                style={{
                  marginTop: 15,
                  marginLeft: 0,
                  borderColor: "white",
                  color: "black",
                  background: "red",
                  width: 80,
                  cursor: "pointer",
                  borderRadius: 10
                }}
                // className="custom-btn delete-btn"
                onClick={() => deleteItem(item.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Sahil;
