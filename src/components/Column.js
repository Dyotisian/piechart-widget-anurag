import { nanoid } from 'nanoid';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Counter from './Counter';
import Pictograph from './Pictograph';
import styles from '../css/Column.module.css';

function Column(props){
    const allColumnWidgets = props.columnWidgets.map((widget,index) => {
        if(widget.type === 'counter'){
            return <Counter key={nanoid()} 
                            widget={widget} 
                            index={index}
                    />
        }else if(widget.type === 'pictograph'){
            return <Pictograph  key={nanoid()} 
                                widget={widget} 
                                index={index}
                                selectedChart={props.selectedChart}
                                setSelectedChart={props.setSelectedChart}
                    />
        }
    })

    return (
        <Droppable droppableId={props.columnId}>
            {(provided) => (
                <div className={styles.containerFlex} 
                    ref={provided.innerRef} 
                    {...provided.droppableProps}>
                    {allColumnWidgets}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

export default Column;