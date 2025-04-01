import { Button } from "react-bootstrap";
import { useState } from "react";
import { Form } from "react-bootstrap"
import useCreateTodo from "../../hooks/useCreateTodo";
import styles from '../../css/Todo.module.css'

const CreateTodo = () => {
    const [title, setTitle] = useState('');
    const {mutate: createTodo} = useCreateTodo();

    const handleSubmit = (e) => {
        e.preventDefault();

        createTodo({title})
    }

    return (
        <Form onSubmit={handleSubmit} className={styles.createTodo}>
            <Form.Group className="mb-1">
                <Form.Control placeholder="create new todo ..." value={title} onChange={(e) => setTitle(e.target.value)}></Form.Control>
            </Form.Group>
            <Button type='submit'>Submit</Button>
        </Form>
    );
}

export default CreateTodo;