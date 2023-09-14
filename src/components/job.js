import React, { useState } from 'react';
import Navbar from './Navbar';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    idProof: '',
    name: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log(formData);
  };

  const divStyle = {
    backgroundImage: 'url(delivertest.jpg)', // Replace with the correct path to your background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white', // Text color
    padding: '20px', // Adjust the padding as needed
  };

  return (
    <>
      <Navbar className="z-50" />
      <div style={{ ...divStyle, height: '650px'}}>
        <h1 className="font-extrabold text-5xl mt-40 text-orange-500 text-center">
          BY THE LOCAL FOR THE LOCALS
        </h1>
        <h3 className= " text-3xl font-extrabold text-white mt-20">
          Our platform offers Delivery Job for Locals who live in Extreme locations or for those who can deliver in extreme locations where logistics can't reach
          <br />
          SO Hurry up!! for this great side income source and submit the form out
        </h3>
      </div>
      <div className='flex'>
      <div className="container w-4/6 p-4 bg-slate-200">
        <h2 className="text-2xl font-bold mb-4">
          Delivery Personnel Job Application
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="idProof" className="block text-gray-600">
              ID Proof:
            </label>
            <input
              type="text"
              id="idProof"
              name="idProof"
              value={formData.idProof}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
              required
              />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-600">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
              >
              Submit Application
            </button>
          </div>
        </form>
      </div>
      <div className=' bg-slate-100 p-5'>
        <h1 className='font-extrabold text-3xl'>WHY should one enroll? </h1>
        <h2 className='mt-3 font-bold text-2xl '>Great source of Side income</h2>
        <ul>
         <li className='mt-3 font-bold text-2xl '>NO formal education required</li>
         <li className='mt-3 font-bold text-2xl '>decent daily commision</li>
         <li className='mt-3 font-bold text-2xl '> remoteness of the area can impact the pay rate</li>
         <li className='mt-3 font-bold text-2xl '>Empower yourself!!!!</li>
        </ul>

      </div>
    </div>
    </>
  );
};

export default JobApplicationForm;


