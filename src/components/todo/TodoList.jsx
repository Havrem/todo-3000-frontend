import { ListGroup} from "react-bootstrap";
import TodoItem from "./TodoItem";
import styles from "../../css/Todo.module.css"

const TodoList = ({ todos }) => {
    return (
      <ListGroup as="ul" className={styles.customList}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ListGroup>
    );
  };

export default TodoList;