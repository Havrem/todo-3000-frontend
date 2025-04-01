import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styles from "../../css/Drawer.module.css"

function LogoutButton() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        const success = await logout();
        if (success) {
            navigate('/');
        }
    }

    return(
        <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
        </button>
    );
}

export default LogoutButton;