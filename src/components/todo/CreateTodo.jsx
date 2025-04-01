import { Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { Form } from "react-bootstrap"
import useCreateTodo from "../../hooks/useCreateTodo";

const CreateTodo = () => {
    const [title, setTitle] = useState('');
    const {mutate: createTodo} = useCreateTodo();

    const handleSubmit = (e) => {
        e.preventDefault();

        createTodo({title})
    }

    return (
        <Form onSubmit={handleSubmit} className="bg-white mb-2">
            <Row>
                <Col>
                    <Form.Group className="mb-1">
                        <Form.Control placeholder="create new todo ..." value={title} onChange={(e) => setTitle(e.target.value)}></Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Button type='submit'>Submit</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default CreateTodo;