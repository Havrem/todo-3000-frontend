import { Image } from 'react-bootstrap';
import LogoutButton from '../auth/LogoutButton';
import { Link } from 'react-router-dom';
import Picture from '../../assets/profile.png'
import styles from '../../css/Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.mainContainer}>
        <Image src={Picture} className={styles.profilePicture}></Image>
        <div className={styles.navCustom}>
            <Link as={Link} to="/todos" className={styles.navLink}>Todos</Link>
            <Link as={Link} to="/settings" className={styles.navLink}>Settings</Link>
        </div>
        <LogoutButton></LogoutButton>
    </div>
  );
}

export default Sidebar;