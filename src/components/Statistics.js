import React, { useState } from "react";
import Piechart from "./Piechart";
import styles from '../css/Statistics.module.css';
import { nanoid } from 'nanoid';
import dropdownIcon from '../imgs/dropdown.png';
import Barchart from "./Barchart";

function Statistics(props){
    const [dropdownClicked,setDropdownClicked] = useState(false);
    const [optionSelected,setOptionSelected] = useState('Select chart type');

    function dropdownHandle(){
        setDropdownClicked(prevClick => !prevClick);
    }

    function optionHandle(option){
        setOptionSelected(option);
        setDropdownClicked(prevClick => !prevClick);
    }

    const chartTypes = ['Select chart type', 'Bar', 'Pie', 'Report'];
    const chartOptions = chartTypes.map(type => {
        return (
            <p key={nanoid()} onClick={() => optionHandle(type)}
                className={styles.option}>
                    {type}
            </p>
        )
    });

    let widget = null;
    if(optionSelected === 'Pie'){
        widget = <Piechart type={props.type}
                            categoryDevices={props.categoryDevices} 
                    />
    }
    // else if(optionSelected === 'Bar'){
    //     widget = <Barchart type={props.type}
    //                         categoryDevices={props.categoryDevices} />
    // }


    return(
        <div className={styles.statistics}>
            <div className={styles.devices}>
                <h3 className={styles.status}>{props.type.toUpperCase()} DEVICES</h3>
                <h2 className={styles.count}>{props.countDevices}</h2>
            </div>
            <div className={styles.piechart}>
                <div className={styles.chart}>
                    <p className={styles.chartName}>Chart type</p>
                    <div className={styles.dropdownContainer}>
                        <p className={styles.optionSelected}>
                            {optionSelected}
                        </p>
                        <div className={styles.dropdown}>
                            <button onClick={dropdownHandle} 
                                    className={dropdownClicked ? `${styles.dropdownBtn} ${styles.dropdownBtnClicked}` : styles.dropdownBtn}>
                                <img className={styles.dropdownIcon} src={dropdownIcon} alt="dropdownIcon"/>
                            </button>
                            <div className={dropdownClicked ? 
                                `${styles.dropdown} ${styles.visible}`:
                                `${styles.dropdown} ${styles.hidden}`}>
                                {chartOptions}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {widget}
                </div>
            </div>
   
        </div>
    )
}

export default Statistics;