import useUpdateTodo from "../../../hooks/useUpdateTodo";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import styles from "../../../css/Todo.module.css"

const CompleteTodo = ({todo}) => {
    const { mutate: updateTodo } = useUpdateTodo();
    const [filled, setFilled] = useState(false);

    const handleToggle = () => {
        updateTodo({id: todo.id, data: {completed: !todo.completed}});
        setFilled(!filled)
    }

    return (
        <button onClick={handleToggle} className={styles.completeTodo}>
            <i className={`bi ${filled ? "bi-circle-fill" : "bi-circle"}`}></i>
        </button>
    );
}

export default CompleteTodo;