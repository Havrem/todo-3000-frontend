import styles from '../../css/MainContent.module.css'

const MainContent = ({ children }) => {
    return (
      <div className={styles.mainContainer}>
        {children}
      </div>
    );
  };
export default MainContent;