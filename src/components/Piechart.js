import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Piechart({ labels, data, backgroundColor }){

    
    return(
          <Pie 
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
              }
            }}
            width={300}
            height={300}
        />
    )   
}

export default Piechart;