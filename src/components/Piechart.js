import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Piechart({ type, categoryDevices }){
    const labels = [];
    const data = [];
    const backgroundColor = [];

    for(let category in categoryDevices){
        labels.push(category);
        if(type === 'total') data.push(categoryDevices[category].totalDevices);
        else if(type === 'active') data.push(categoryDevices[category].activeDevices)
        backgroundColor.push(categoryDevices[category].color);
    }
    
    return(
          <Doughnut 
            data={{
                labels: labels,
                datasets: [
                  {
                    data: data,
                    backgroundColor: backgroundColor
                  },
                ],
              }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "bottom",
                },
              },
              cutout: 60
            }}
            width={350}
            height={350}
        />
    )   
}

export default Piechart;