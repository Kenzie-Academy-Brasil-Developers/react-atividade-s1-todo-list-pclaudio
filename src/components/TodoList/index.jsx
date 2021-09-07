import "./style.css";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoList = ({ todos, handleTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <div className="item">
            <span>{todo}</span>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              onClick={() => handleTodo(todo)}
            >
              <DeleteIcon />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
