import "./style.css";
import { useState } from "react";

const Form = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleAddTodo = () => {
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        autoFocus={true}
        placeholder="Nova tarefa"
      />

      <button onClick={handleAddTodo}>Enviar</button>
    </form>
  );
};

export default Form;
