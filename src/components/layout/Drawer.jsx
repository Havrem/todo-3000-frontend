import { useDrawer } from './DrawerContext';
import styles from '../../css/Drawer.module.css';
import { Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { Image } from 'react-bootstrap';
import Picture from '../../assets/profile.png'
import useMediaQuery from '../../hooks/useMediaQuery';
import { useEffect } from 'react';


const Drawer = () => {
  const { open, setOpen } = useDrawer();
  const isMobile = useMediaQuery('(max-width: 599px)');

  useEffect(() => {
    if (!isMobile && open) {
      setOpen(false);
    }
  }, [isMobile, open, setOpen]);

  return (
    <div className={`${styles.drawer} ${open ? styles.open : ''}`}>
      <button className={styles.closeBtn} onClick={() => setOpen(false)}>✕</button>
      <Image src={Picture} className={styles.profilePicture}></Image>
        <div className={styles.navContainer}>
            <Link as={Link} to="/todos" className={styles.navLink}>Todos</Link>
            <Link as={Link} to="/settings" className={styles.navLink}>Settings</Link>
        </div>
        <LogoutButton></LogoutButton>
    </div>
  );
};

export default Drawer;
