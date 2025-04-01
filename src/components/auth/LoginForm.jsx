import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from '../../css/Login.module.css'
import { useAuth } from "../../hooks/useAuth";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const success = await login(email, password)

        if (success) {
            navigate('/todos')
        }
    }

    return (
        <Container className={styles.mainContainer}>
            <Form onSubmit={handleLogin} className={styles.loginForm}>
                <Form.Group>
                    <Form.Control type ="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.field}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Control type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.field}/>
                </Form.Group>

                <Button type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
}

export default LoginForm;