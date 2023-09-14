import React, {useState} from 'react'
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import Left from "./Left";
import Right from './Right';
const SellerHome = () => {
    const [contractDetails, setContractDetails] = useState(
        [
            { title: 'Spices', company: 'Kashmiri Spice ', startTime: '12 sept', endTime: '24 sept', status: 'Out of Stock', income: '196', imageSrc: '' },
            { title: 'Spices', company: 'Kashmiri Spice ', startTime: '12 sept', endTime: '24 sept', status: 'Out of Stock', income: '196', imageSrc: '' },
            { title: 'Spices', company: 'Kashmiri Spice ', startTime: '12 sept', endTime: '24 sept', status: 'Out of Stock', income: '196', imageSrc: '' },
        ]
    )
    return (
        <>
        <div className='flex ml-5 mt-5'>
        <BarChart />
        <DoughnutChart />
        </div>
        <div className="p-4 w-[65%] max-h-[450px] justify-center items-center text-center mx-auto">
            <div className="flex justify-between">
                <p className="font-bold text-xl text-black">Latest Contracts</p>
                <p className="font-bold text-md text-blue-600 cursor-pointer border-blue-600">View All</p>
            </div>
            <div className="mt-4" id="latest-contracts">
                {contractDetails.map((elem, index) => (
                    <div className="w-full rounded-xl bg-[#F9F9F9] p-3 flex mt-5">
                        <div className="w-14 h-14 bg-gray-400 rounded-full"></div>
                        <div className="w-[72%] ml-4 flex flex-col justify-between">
                            <p className="font-medium text-lg">{elem.title}</p>
                            <div className="flex text-sm opacity-50 justify-between">
                                <p>{elem.company} </p>
                               <img />
                                <span className="text-sm mr-10">{elem.startTime} - {elem.startTime}</span>
                            </div>
                        </div>
                        <div className="flex jusitfy-center items-center">
                            <div>
                                <p className="flex justiy-center items-end">Price: <span className="font-medium text-lg">Rs.{elem.income}</span></p>
                                <div className="flex justify-center items-center"><p className="flex justify-center items-center px-3 py-1 w-[7rem] rounded-2xl" style={{ backgroundColor: elem.status === 'In Progress' ? '#5E8BFF' : elem.status === 'Completed' ? '#13AB22' : '#FD6161' }}>{elem.status}</p></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
 </>
  )
}

export default SellerHome