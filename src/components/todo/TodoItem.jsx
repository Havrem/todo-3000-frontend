import { ListGroup, Stack } from "react-bootstrap";
import CompleteTodo from "./buttons/CompleteTodo";
import RemoveTodo from "./buttons/RemoveTodo";

const TodoItem = ({todo}) => {
    return (
        <ListGroup.Item as="li">
            <Stack direction="horizontal" gap={3}>
                <CompleteTodo todo={todo}></CompleteTodo>
                <div>{todo.title}</div>
                <RemoveTodo todo={todo}></RemoveTodo>
            </Stack>
        </ListGroup.Item>
    );
}

export default TodoItem;