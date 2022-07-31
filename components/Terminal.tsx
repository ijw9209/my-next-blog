import styles from './Terminal.module.css';
import TypeAnimation from 'react-type-animation';
import typingdata from '../data/typingdata';


const TypeComponent = () => {
    const typeData = {  
        text : typingdata.text,
        time : typingdata.time,
        repeat: typingdata.repeat
    }

    return (
        <TypeAnimation
            cursor={false}
            sequence={[`${typeData.text}`, typeData.time, 'FrontEnd-Developer']}
            wrapper="div"
            repeat={typeData.repeat}
        />
    )
}


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
            <div className={styles.title}>woongbash -- 70x32</div>
        </div>
        <pre className={styles.body}>
            <TypeComponent/>
        </pre> 
    </div>
    );
  };
  
  export default Terminal;