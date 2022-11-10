import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
  
function Barchart({ labels, data, backgroundColor }){

    return (
        <Bar 
            options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                  title: {
                    display: true,
                    text: 'Chart.js Bar Chart',
                  },
                }
            }} 
            data={{
                labels,
                datasets: [
                  {
                    label: labels,
                    data,
                    backgroundColor
                  },
                ],
            }} 
        />
    )
}

export default Barchart;