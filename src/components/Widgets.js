import React, { useEffect, useState } from "react";
import axios from 'axios';
import styles from '../css/Widgets.module.css';
import Counter from "./Counter";
import Pictograph from "./Pictograph";

function Widgets(){
    const [totalDevices,setTotalDevices] = useState(0);
    const [activeDevices,setActiveDevices] = useState(0);
    const [allDevicesData, setAllDevicesData] = useState([]);
    const [categoryDevices,setCategoryDevices] = useState({});

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('https://telemetry.coraltele.com/app/v2/asset/list');

            const allDevicesData = response.data.data
            setAllDevicesData(response.data.data);

            setTotalDevices(allDevicesData.length);
            setActiveDevices(allDevicesData.reduce((prev,curr) => prev + curr.status, 0)
                             .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))

            setCategoryDevices(() => {
              const newCategoryAllDevices = {};
  
              for(let i = 0; i < allDevicesData.length; i++){
                const category = allDevicesData[i].category;
  
                if(newCategoryAllDevices[category]){
                  newCategoryAllDevices[category].totalDevices++;
                  if(allDevicesData[i].status) newCategoryAllDevices[category].activeDevices++;
                }
                else{
                  newCategoryAllDevices[category] = {};
  
                  newCategoryAllDevices[category].totalDevices = 1;
                  if(allDevicesData[i].status) newCategoryAllDevices[category].activeDevices = 1;
  
                  const red = Math.floor(Math.random() * 256);
                  const green = Math.floor(Math.random() * 256);
                  const blue = Math.floor(Math.random() * 256);
  
                  newCategoryAllDevices[category].color = `rgba(${red},${green},${blue},1)`;
                }
              }
  
              return newCategoryAllDevices;
            });
        }
  
        fetchData();
    },[]);

    return (
        <section className={styles.container}>
            <div className={styles.containerFlex}>
              <Counter type='total'
                        countDevices={totalDevices} />
              <Counter type='active'
                        countDevices={activeDevices} />
            </div>
            <div className={styles.containerFlex}>
              {/* <div> */}
              <Pictograph type='total' 
                            categoryDevices={categoryDevices} allDevicesData={allDevicesData} />
              {/* </div> */}
              {/* <div> */}
              <Pictograph type='active'
                            categoryDevices={categoryDevices} allDevicesData={allDevicesData} />
              {/* </div> */}
              
            </div>
        </section>
    )
}

export default Widgets;