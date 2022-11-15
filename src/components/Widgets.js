import React, { useEffect, useState } from "react";
import styles from '../css/Widgets.module.css';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from "./Column";
import DUMMY_USERS from "../Config";

function Widgets(props){
    const { totalDevices, activeDevices, categoryDevices, allDevicesData } = props.widgetsData
    const [user,setUser] = useState('Anurag');
    const [allUsers, setAllUsers] = useState(JSON.parse(sessionStorage.getItem('dummy')) || DUMMY_USERS);

    const [widgetsData,setWidgetsData] = useState({
      widgets: {
        'widget-1': {
          id: 'widget-1',
          type: 'counter',
          counterType: 'total',
          count: totalDevices,
          pictographType: '',
          categoryDevices: {},
          allDevicesData: [],
        },
        'widget-2': {
          id: 'widget-2',
          type: 'pictograph',
          counterType: '',
          count: 0,
          pictographType: 'total',
          categoryDevices: categoryDevices,
          allDevicesData: allDevicesData
        },
        'widget-3': {
          id: 'widget-3',
          type: 'counter',
          counterType: 'active',
          count: activeDevices,
          pictographType: '',
          categoryDevices: {},
          allDevicesData: []
        },
        'widget-4': {
          id: 'widget-4',
          type: 'pictograph',
          counterType: '',
          count: 0,
          pictographType: 'active',
          categoryDevices: categoryDevices,
          allDevicesData: allDevicesData
        }
      },
      columns: allUsers[user].columns,
      columnOrder: allUsers[user].columnOrder
    });

    const [selectedChart, setSelectedChart] = useState({
      'widget-2': {
        id: 'widget-2',
        chart: 'Pie'
      },
      'widget-4': {
        id: 'widget-4',
        chart: 'Pie'
      }
    });
    
    useEffect(() => {
        sessionStorage.setItem('dummy',JSON.stringify({
          ...allUsers,
          [user]: {
            name: user,
            widgets: allUsers[user].widgets,
            columns: widgetsData.columns,
            columnOrder: widgetsData.columnOrder
          }
        }));
    },[widgetsData])


    function handleOnDragEnd(result){
      const { destination, source, draggableId } = result;

      if(!destination) return;
      else if(destination.droppableId === source.droppableId 
        && destination.index === source.index) return;
      else{
        const startColumn = widgetsData.columns[source.droppableId];
        const finishColumn = widgetsData.columns[destination.droppableId];
  
        const newStartColumnWidgetIds = [...startColumn.widgetIds];
        newStartColumnWidgetIds.splice(source.index,1);
  
        
        if(source.droppableId === destination.droppableId){
          newStartColumnWidgetIds.splice(destination.index,0,draggableId);
          
          const newStartColumn = {
            ...startColumn,
            widgetIds: newStartColumnWidgetIds
          }
  
          setWidgetsData(prevWidgetsData => {
            return {
              ...prevWidgetsData,
              columns: {
                ...prevWidgetsData.columns,
                [newStartColumn.id]: newStartColumn
              }
            }
          });
        }else{
          const newFinishColumnWidgetIds = [...finishColumn.widgetIds];
  
          newFinishColumnWidgetIds.splice(destination.index,0,draggableId);
          
          const newStartColumn = {
            ...startColumn,
            widgetIds: newStartColumnWidgetIds
          }
  
          const newFinishColumn = {
            ...finishColumn,
            widgetIds: newFinishColumnWidgetIds
          }
    
          setWidgetsData(prevWidgetsData => {
            return {
              ...prevWidgetsData,
              columns: {
                ...prevWidgetsData.columns,
                [newStartColumn.id]: newStartColumn,
                [newFinishColumn.id]: newFinishColumn
              }
            }
          });
  
        }
      }    
      

    }

    const allColumns = widgetsData.columnOrder.map(columnId => {
                        const column = widgetsData.columns[columnId];
                        const columnWidgets = column.widgetIds.map(widgetId => widgetsData.widgets[widgetId]);

                        return <Column key={columnId}
                                      columnId={columnId}
                                      columnWidgets={columnWidgets} 
                                      selectedChart={selectedChart}
                                      setSelectedChart={setSelectedChart}
                                />
                      });

    function handleChange(e){
      setUser(e.target.value)
      setWidgetsData(prevWidgetsData => {
        return {
          ...prevWidgetsData,
          columns: allUsers[e.target.value].columns,
          columnOrder: allUsers[e.target.value].columnOrder
        }
      });
      setAllUsers(prevAllUsers => {
        return {
          ...prevAllUsers,
          [user]: {
            name: user,
            widgets: prevAllUsers[user].widgets,
            columns: widgetsData.columns,
            columnOrder: widgetsData.columnOrder
          }
        }
      });
    }


    return (
      <>
        <div>
          <div>
            <input onChange={handleChange} 
                    type="radio" 
                    id="anurag" 
                    name="user" 
                    value="Anurag"
            />
            <label htmlFor="anurag">Anurag</label>
          </div>
          <div>
            <input onChange={handleChange} 
                    type="radio" 
                    id="rohit" 
                    name="user" 
                    value="Rohit"
            />
            <label htmlFor="rohit">Rohit</label>
          </div>
          <div>
            <input onChange={handleChange} 
                    type="radio" 
                    id="faiz" 
                    name="user" 
                    value="Faiz"
            />
            <label htmlFor="faiz">Faiz</label>
          </div>
        </div>
        <section className={styles.container}>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            {allColumns}
          </DragDropContext>
        </section>
      </>
    )
}

export default Widgets;