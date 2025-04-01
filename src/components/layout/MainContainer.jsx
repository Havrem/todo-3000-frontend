import styles from '../../css/MainContainer.module.css'

const MainContainer = ({ children }) => {
    return (
      <div className={styles.outmostContainer}>
        <div className={styles.scrollClip}>
          {children}
        </div>
      </div>
    );
  };
export default MainContainer;