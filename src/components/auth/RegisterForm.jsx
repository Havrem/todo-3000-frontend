import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from '../../css/Register.module.css'
import { useAuth } from "../../hooks/useAuth";

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const success = await register(email, password)
        
        if (success) {
            navigate('/login')
        }
    }

    return (
        <Container className={styles.mainContainer}>
            <Form onSubmit={handleLogin} className={styles.registerForm}>
                <Form.Group>
                    <Form.Control type ="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.field}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Control type="password" placeholder="Choose a password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.field}/>
                </Form.Group>

                <Button type="submit">
                    Register
                </Button>
            </Form>
        </Container>
    );
}

export default RegisterForm;