import React from "react";
import styles from '../css/Sidebar.module.css';

function Sidebar(props){
    return (
        <aside className={styles.sidebar}>
            <h4 className={styles.title}>Coral Telecom</h4>
            <div className={styles.rule}></div>
            <p onClick={() => props.setIsClicked(true)} 
                className={props.isClicked ? `${styles.subtitle} ${styles.subtitleClicked}` : styles.subtitle}>
                    Dashboard
            </p>
        </aside>
    )
}

export default Sidebar;