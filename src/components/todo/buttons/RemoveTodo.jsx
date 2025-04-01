import useDeleteTodo from "../../../hooks/useDeleteTodo";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "../../../css/Todo.module.css"

const RemoveTodo = ({todo}) => {
    const {mutate: deleteTodo} = useDeleteTodo();

    const handleRemove = () => {
        deleteTodo(todo.id)
    }

    return (
        <button className={styles.removeTodo} onClick={handleRemove}>
            <i class="bi bi-x"></i>
        </button>
    );
}

export default RemoveTodo;