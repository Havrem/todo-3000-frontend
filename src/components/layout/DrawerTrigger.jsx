import { useDrawer } from './DrawerContext';
import styles from '../../css/Drawer.module.css';

const DrawerTrigger = () => {
  const { setOpen } = useDrawer();

  return (
    <button className={styles.hamburger} onClick={() => setOpen(true)}>
        <i className="bi bi-list" />
    </button>
  );
};

export default DrawerTrigger;
