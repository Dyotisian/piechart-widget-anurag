import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styles from '../css/Counter.module.css';

function Counter(props){
    return (
        <Draggable draggableId={props.widget.id} index={props.index}>
            {(provided) => (
                <div className={styles.devices} 
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}>
                    <h3 className={styles.status}>{props.widget.counterType.toUpperCase()} DEVICES</h3>
                    <h2 className={styles.count}>{props.widget.count}</h2>
                </div>
            )}
        </Draggable>
    )
}

export default Counter;