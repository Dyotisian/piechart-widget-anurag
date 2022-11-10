// import React from "react";
// import { faker } from 'faker';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//   } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// function Barchart(){

//     return (
//         <Bar 
//             options={{
//                 responsive: true,
//                 plugins: {
//                   legend: {
//                     position: 'top',
//                   },
//                   title: {
//                     display: true,
//                     text: 'Chart.js Bar Chart',
//                   },
//                 },
//             }} 
//             data={{
//                 labels,
//                 datasets: [
//                   {
//                     label: 'Dataset 1',
//                     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//                     backgroundColor: 'rgba(255, 99, 132, 0.5)',
//                   },
//                 ],
//             }} 
//         />
//     )
// }

// export default Barchart;