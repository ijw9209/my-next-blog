import styles from './Terminal.module.css';


const Terminal = () => {
    return (
        // <div className={"terminal space shadow"}>
        <div className={`${styles.terminal} ${styles.space} ${styles.shadow}`}>
            <div className={styles.top}>
            <div className={styles.btns}>
                <span className={`${styles.circle} ${styles.red}`}></span>
                <span className={`${styles.circle} ${styles.yellow}`}></span>
                <span className={`${styles.circle} ${styles.green}`}></span>
            </div>
            <div className={styles.title}>bash -- 70x32</div>
        </div>
        <pre className={styles.body}>
            commands
        </pre> 
    </div>
    );
  };
  
  export default Terminal;