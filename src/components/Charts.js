import React, { useEffect, useState } from "react";
import Statistics from "./Statistics";
import axios from 'axios';
import styles from '../css/Charts.module.css';

function Charts(){
    const [countDevices,setCountDevices] = useState({
      totalDevices: 0,
      activeDevices: 0
    });

    const [categoryDevices,setCategoryDevices] = useState({});

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('https://telemetry.coraltele.com/app/v2/asset/list');

            const data = response.data.data;
            
            setCountDevices({
              totalDevices: data.length,
              activeDevices: data.reduce((prev,curr) => prev + curr.status, 0)
                                  .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            });
  
            setCategoryDevices(() => {
              const newCategoryAllDevices = {};
  
              for(let i = 0; i < data.length; i++){
                const category = data[i].category;
  
                if(newCategoryAllDevices[category]){
                  newCategoryAllDevices[category].totalDevices++;
                  if(data[i].status) newCategoryAllDevices[category].activeDevices++;
                }
                else{
                  newCategoryAllDevices[category] = {};
  
                  newCategoryAllDevices[category].totalDevices = 1;
                  if(data[i].status) newCategoryAllDevices[category].activeDevices = 1;
  
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
            <Statistics type='total' 
                    countDevices={countDevices.totalDevices} 
                    categoryDevices={categoryDevices} 
            />
            <Statistics type='active'
                        countDevices={countDevices.activeDevices}  
                        categoryDevices={categoryDevices} 
            />
        </section>
    )
}

export default Charts;