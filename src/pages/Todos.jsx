import TodoList from "../components/todo/TodoList";
import { useTodos } from "../hooks/useTodos";
import CreateTodo from "../components/todo/CreateTodo";
import MainContent from "../components/layout/MainContent";
import styles from "../css/Todo.module.css";

const Todos = () => {
    const {data: todos, isLoading, isError} = useTodos();

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong!</p>;

    return (
        <MainContent>
          <h1 className={styles.mainTitle}>todos</h1>
          <CreateTodo />
          <div className={styles.todosContainer}>
            <TodoList todos={todos} />
          </div>
        </MainContent>
      );
    };

export default Todos;