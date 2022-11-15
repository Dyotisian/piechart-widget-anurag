import React, {useState, useEffect} from 'react';
import Widgets from './Widgets';
import axios from 'axios';

function WidgetsContainer(){
    const [isLoading,setIsLoading] = useState(true);

    const [widgetsData, setWidgetsData] = useState({});

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('https://telemetry.coraltele.com/app/v2/asset/list');
            
            setIsLoading(false);
            const allDevicesData = response.data.data;
            
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

            setWidgetsData({
                totalDevices: allDevicesData.length,
                activeDevices: allDevicesData.reduce((prev,curr) => prev + curr.status, 0)
                                .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                allDevicesData: allDevicesData,
                categoryDevices: newCategoryAllDevices
            })       
        }
        
        fetchData();
    },[]);

    return (
        isLoading ? <p>Loading...</p> : <Widgets widgetsData={widgetsData} />
    )
}

export default WidgetsContainer;