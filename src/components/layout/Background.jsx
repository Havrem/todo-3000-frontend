import mountains from '../../assets/mountains.jpg'
import styles from '../../css/Background.module.css'

const Background = ({ children }) => (
    <div className={styles.mainContainer}>
      <div className={styles.backgroundImage} style={{ backgroundImage: `url(${mountains})` }}/>
      <div className={styles.childrenContainer}>
        {children}
      </div>
    </div>
  );
  
  export default Background;
  