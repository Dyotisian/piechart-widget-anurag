import React, { useState } from "react";
import { nanoid } from 'nanoid';
import Piechart from "./Piechart";
import Barchart from "./Barchart";
import Doughnutchart from "./Doughnutchart";
import Report from "./Report";
import dropdownIcon from '../imgs/dropdown.png';
import styles from '../css/Pictograph.module.css';
import { Draggable } from "react-beautiful-dnd";

function Pictograph(props){
    const [dropdownClicked,setDropdownClicked] = useState(false);

    function dropdownHandle(){
        setDropdownClicked(prevClick => !prevClick);
    }

    function chartTypeHandle(option){
        props.setSelectedChart(prevSelectedChart => {
            return {
                ...prevSelectedChart,
                [props.widget.id]: {
                    id: props.widget.id,
                    chart: option
                }
            }
        });
        setDropdownClicked(prevClick => !prevClick);
    }

    const chartTypes = ['Bar', 'Pie', 'Doughnut', 'Report'];
    const chartOptions = chartTypes.map(type => {
        return (
            <p key={nanoid()} onClick={() => chartTypeHandle(type)}
                className={styles.option}>
                    {type}
            </p>
        )
    });

    const labels = [];
    const data = [];
    const backgroundColor = [];

    for(let category in props.widget.categoryDevices){
        labels.push(category);
        if(props.widget.pictographType === 'total'){
            data.push(props.widget.categoryDevices[category].totalDevices);
        }else if(props.widget.pictographType === 'active'){
            data.push(props.widget.categoryDevices[category].activeDevices);
        }
        backgroundColor.push(props.widget.categoryDevices[category].color);
    }

    let widget = null;
    if(props.selectedChart[props.widget.id].chart === 'Pie'){
        widget = <Piechart labels={labels}
                            data={data}
                            backgroundColor={backgroundColor} 
                    />
    }
    else if(props.selectedChart[props.widget.id].chart === 'Bar'){
        widget = <Barchart labels={labels}
                            data={data}
                            backgroundColor={backgroundColor}
                    />
    }
    else if(props.selectedChart[props.widget.id].chart === 'Doughnut'){
        widget = <Doughnutchart labels={labels}
                            data={data}
                            backgroundColor={backgroundColor} 
                    />
    }
    else if(props.selectedChart[props.widget.id].chart === 'Report'){
        widget = <Report allDevicesData={props.widget.allDevicesData}/>
    }
    return (
        <Draggable draggableId={props.widget.id} index={props.index}>
            {(provided) => (
                <div className={styles.widget} 
                {...provided.draggableProps}
                
                ref={provided.innerRef}>
                    <div className={styles.badge} {...provided.dragHandleProps}></div>
                    <div>
                        <p className={styles.dropdownName}>Chart type</p>
                        <div className={styles.dropdownContainer}>
                            <p className={styles.optionSelected}>
                                {props.selectedChart[props.widget.id].chart}
                            </p>
                            <div className={styles.dropdown}>
                                <div className={dropdownClicked ? 
                                    `${styles.dropdown} ${styles.visible}`:
                                    `${styles.dropdown} ${styles.hidden}`}>
                                    {chartOptions}
                                </div>
                                <button onClick={dropdownHandle} 
                                        className={dropdownClicked ? `${styles.dropdownBtn} ${styles.dropdownBtnClicked}` : styles.dropdownBtn}>
                                    <img className={styles.dropdownIcon} src={dropdownIcon} alt="dropdownIcon"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        {widget}
                    </div>
                </div>
            )}
            
        </Draggable>
    )
}

export default Pictograph;