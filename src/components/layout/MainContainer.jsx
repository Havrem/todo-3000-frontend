import styles from '../../css/MainContainer.module.css'
import DrawerTrigger from './DrawerTrigger';

const MainContainer = ({ children }) => {
    return (
      <div className={styles.outmostContainer}>
        <div className={styles.header}>
          <DrawerTrigger></DrawerTrigger>
          <h1 className={styles.mainTitle}>todos</h1>
        </div>
        <div className={styles.scrollClip}>
          {children}
        </div>
      </div>
    );
  };
export default MainContainer;