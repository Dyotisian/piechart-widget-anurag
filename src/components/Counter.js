import React from "react";
import styles from '../css/Counter.module.css';

function Counter(props){
    return (
        <div className={styles.devices}>
            <h3 className={styles.status}>{props.type.toUpperCase()} DEVICES</h3>
            <h2 className={styles.count}>{props.countDevices}</h2>
        </div>
    )
}

export default Counter;