/*
 * Author: Harsh Lohana
 */

'use client';

import React, { useEffect, useState } from 'react';

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

export default function BarChart() {

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            x: {
                display: false,
                grid: {
                    display: false, // Hide x-axis grid lines
                },
            },
            y: {
                ticks: {
                    display: false, // Hide y-axis labels
                },
                grid: {
                    display: false, // Hide y-axis grid lines
                },
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                position: 'Top',
            },
            title: {
                display: false,
                text: 'Bar Chart',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const datasets = [
        {
            label: 'Dataset 1',
            data: [10, 50, 40, 20, 80, 90, 35],
            backgroundColor: '#ffb2c1',
            borderRadius: 10
        },
    ];

    const [data, setData] = useState({
        labels,
        datasets,
    });


    return (
        <>
            <div className="flex justify-center items-center w-[800px] h-[300px] p-2 pb-[2rem]">
                <Bar options={options} data={data} />
            </div>
        </>
    );
}

/*
 * Author: Harsh Lohana
 */
// import React, { useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );

// export default function BarChart() {
//     const [data, setData] = useState({
//         labels: [], // Initialize with empty labels
//         datasets: [
//             {
//                 label: 'Dataset 1',
//                 data: [],
//                 backgroundColor: '#ffb2c1',
//                 borderRadius: 10,
//             },
//         ],
//     });

//     useEffect(() => {
//         // Fetch data from API
//         fetch("http://localhost:8003/business/getMonthWiseExpense")
//             .then(response => response.json())
//             .then(result => {
//                 const labels = result.months; // Assuming API provides month labels
//                 const expenses = result.expenses; // Assuming API provides expense data

//                 const newData = {
//                     labels: labels,
//                     datasets: [
//                         {
//                             ...data.datasets[0],
//                             data: expenses,
//                         },
//                     ],
//                 };
//                 setData(newData);
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     const options = {
//         // ... (your options here)
//     };

//     return (
//         <div className="flex justify-center items-center w-full h-[300px] p-2 pb-[2rem]">
//             <Bar options={options} data={data} />
//         </div>
//     );
// }

