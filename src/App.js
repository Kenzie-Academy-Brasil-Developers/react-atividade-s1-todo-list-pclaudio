import "./App.css";
import "@fontsource/roboto";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
    }
  };

  const handleTodo = (todoCompleted) => {
    setTodos(todos.filter((todo) => todo !== todoCompleted));
  };

  return (
    <>
      <header>
        <h1>My to-do list</h1>
      </header>
      <main>
        <Form addTodo={addTodo} />
        <TodoList todos={todos} handleTodo={handleTodo} />
      </main>
    </>
  );
};

export default App;
