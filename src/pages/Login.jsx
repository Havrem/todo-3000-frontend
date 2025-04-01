import { Container } from "react-bootstrap";
import LoginForm from "../components/auth/LoginForm";
import { Link } from "react-router-dom";
import styles from '../css/Login.module.css'

function Login() {
    return (
        <Container className={styles.outmostContainer}>
            <Container className={styles.headerContainer}>
                <div className={styles.header}>
                    <h1 className={styles.mainTitle}>Todo</h1>
                    <div className={styles.topDivider}></div>
                    <p className={styles.subtext}>Whenever, wherever.</p>
                </div>
            </Container>
            <LoginForm></LoginForm>
            <Link to="/register" className={styles.customLink}>
                Don't have an account yet? Signup!
            </Link>
            <div className={styles.bottomDivider}></div>
        </Container>
    );
}

export default Login;