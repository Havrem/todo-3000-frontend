import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterForm from "../components/auth/RegisterForm";
import styles from '../css/Register.module.css'

function Register() {
    return (
        <Container className={styles.outmostContainer} >
            <Container className={styles.headerContainer}>
                <div className={styles.header}>
                    <h1 className={styles.mainTitle}>Todo</h1>
                    <div className={styles.headerDivider}></div>
                    <p className={styles.subtext}>Whenever, wherever.</p>
                </div>
            </Container>
            <RegisterForm></RegisterForm>
            <Link to="/" className={styles.customLink}>
                Go back
            </Link>
            <div className={styles.bottomDivider}></div>
        </Container>
    );
}

export default Register;