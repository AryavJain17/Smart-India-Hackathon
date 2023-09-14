// import React, { useState, useEffect } from "react";
// import { Doughnut } from "react-chartjs-2";
// import { ArcElement, Tooltip, Legend } from "chart.js"; // Import from 'chart.js'

// export default function DoughnutChart() {
//   const [data, setData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [],
//         backgroundColor: [],
//         borderColor: [],
//         borderWidth: 1,
//       },
//     ],
//   });

//   useEffect(() => {
//     // Your fetch logic here (dummy or API)
//   }, []);

//   const options = {
//     // Your options configuration here
//   };

//   return (
//     <div className="flex justify-center items-center w-fit h-[300px] p-2 pb-[2rem]">
//       <Doughnut options={options} data={data} />
//     </div>
//   );
// }

import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);
const data = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
};
function DoughnutChart() {
  return (
    <div className="flex justify-center items-center w-[800px] h-[300px] p-2 pb-[2rem]">
        
        <Doughnut data={data} />
    </div>
  );
}
export default DoughnutChart;
