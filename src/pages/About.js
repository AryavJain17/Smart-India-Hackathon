import React from 'react';

const About = () => {
  const backgroundImageStyle = {
    backgroundImage: `url('artisianJK.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

  };

  return (
    <div className="bg-gray-100   min-h-screen flex flex-col justify-center ">
      <div
        className="bg-gray-300 mb-8 p-4 "
        style={{ ...backgroundImageStyle, height: '650px',opacity:75 }} // Adjust the height as needed
      >
        <div className="max-w-4xl mx-auto text-white">
            <h2 className='text-6xl font-bold mt-40 justify-center'>ABOUT US</h2>
          <h5 className="font-semibold mt-40 text-2xl">
            A distinctive e-commerce platform for the <span className="font-bold">One District One Product</span> (ODOP) initiative in Jammu and Kashmir by focusing on local authenticity and curated, high-quality ODOP products. Elevate the unique stories and craftsmanship of local artisans and producers, fostering a connection with consumers.
          </h5>
        </div>
      </div>
      <div className="bg-gray-300 flex p-8 flex-row items-center mb-8 max-w-max p-4 mx-auto">
        <img
          src="/ODOPimage.jpg"
          alt="Kashmir Artisan"
          className="mb-4 w-80 h-60 rounded mr-4"
        />
        <p className="font-semibold">
          Jammu and Kashmir (J&K), known for its breathtaking landscapes and rich cultural heritage, is also home to a diverse community of artisans and vendors who contribute significantly to the region's vibrant craftsmanship and local economy. These artisans and vendors are known for their exceptional work in various fields, and their creations often reflect the unique cultural, historical, and natural aspects of the region.
        </p>
      </div>
    </div>
  );
};

export default About;