import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Doughnutchart({ labels, data, backgroundColor }){

    
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

export default Doughnutchart;