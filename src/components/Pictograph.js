import React, { useState } from "react";
import { nanoid } from 'nanoid';
import Piechart from "./Piechart";
import Barchart from "./Barchart";
import Doughnutchart from "./Doughnutchart";
import Report from "./Report";
import dropdownIcon from '../imgs/dropdown.png';
import styles from '../css/Pictograph.module.css';

function Pictograph(props){
    const [dropdownClicked,setDropdownClicked] = useState(false);
    const [optionSelected,setOptionSelected] = useState('Pie');

    function dropdownHandle(){
        setDropdownClicked(prevClick => !prevClick);
    }

    function optionHandle(option){
        setOptionSelected(option);
        setDropdownClicked(prevClick => !prevClick);
    }

    const chartTypes = ['Bar', 'Pie', 'Doughnut', 'Report'];
    const chartOptions = chartTypes.map(type => {
        return (
            <p key={nanoid()} onClick={() => optionHandle(type)}
                className={styles.option}>
                    {type}
            </p>
        )
    });

    const labels = [];
    const data = [];
    const backgroundColor = [];

    for(let category in props.categoryDevices){
        labels.push(category);
        if(props.type === 'total') data.push(props.categoryDevices[category].totalDevices);
        else if(props.type === 'active') data.push(props.categoryDevices[category].activeDevices)
        backgroundColor.push(props.categoryDevices[category].color);
    }

    let widget = null;
    if(optionSelected === 'Pie'){
        widget = <Piechart labels={labels}
                            data={data}
                            backgroundColor={backgroundColor} 
                    />
    }
    else if(optionSelected === 'Bar'){
        widget = <Barchart labels={labels}
                            data={data}
                            backgroundColor={backgroundColor}
                    />
    }
    else if(optionSelected === 'Doughnut'){
        widget = <Doughnutchart labels={labels}
                            data={data}
                            backgroundColor={backgroundColor} 
                    />
    }
    else if(optionSelected === 'Report'){
        widget = <Report allDevicesData={props.allDevicesData}
                            sortHandle={props.sortHandle}
                    />
    }
    return (
        <div className={styles.widget}>
            <div className={styles.pictograph}>
                <p className={styles.pictographName}>Chart type</p>
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
    )
}

export default Pictograph;