import React from "react";
import Piechart from "./Piechart";
import styles from '../css/Statistics.module.css';

function Statistics(props){
    return(
        <div className={styles.statistics}>
            <div className={styles.devices}>
                <h3 className={styles.status}>{props.type.toUpperCase()} DEVICES</h3>
                <h2 className={styles.count}>{props.countDevices}</h2>
            </div>
            <div className={styles.piechart}>
                <Piechart type={props.type}
                          categoryDevices={props.categoryDevices} 
                />
            </div>
        </div>
    )
}

export default Statistics;