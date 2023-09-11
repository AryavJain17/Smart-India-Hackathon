import React, { useState } from 'react';

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
      backgroundImage: 'url(DELIVERYBOY.jpg)', // Replace with the correct path to your background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white', // Text color
      padding: '20px', // Adjust the padding as needed
    };

  return (
    <>
    <div style={{ ...divStyle, height: '650px',opacity:70}}>
        <h1 className='font-bold text-5xl mt-40 text-orange-700 text-center'>
            BY THE LOCAL FOR THE LOCALS
        </h1>
        <h3 className=' bg-black text-3xl font-semibold text-orange-100 mt-20'>our platform offers Delivery Job for Locals who live in Extreme location or for those who can deliver in extreme location where logistics cant reach <br/>
        SO Hurry up !! for this great side income source and submit the form out </h3>

    </div>
    <div className="container mx-auto p-4 bg-orange-300">
      <h2 className="text-2xl font-bold mb-4">Delivery Personnel Job Application</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="idProof" className="block text-gray-600">ID Proof:</label>
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
          <label htmlFor="name" className="block text-gray-600">Name:</label>
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
          <label htmlFor="age" className="block text-gray-600">Age:</label>
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
    </>
  );
};

export default JobApplicationForm;

