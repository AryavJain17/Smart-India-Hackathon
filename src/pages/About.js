import React from 'react';
import Navbar from '../components/Navbar';
import { useAuth0 } from '@auth0/auth0-react';
// import {about2} from '../../public/imgs/about2.jpg'
// import {about1} from '../../public/imgs/about1.jpg'
const About = () => {
  const backgroundImageStyle = {
    backgroundImage: `url('artisianJK.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

  };

  return (
    <>
    <Navbar/>
    <div className="bg-gray-100   min-h-screen flex flex-col justify-center ">
      <div
        className="bg-gray-300 p-4 "
        style={{ ...backgroundImageStyle, height: '650px',opacity:75 }} // Adjust the height as needed
      >
        <div className="max-w-4xl mx-auto text-white">
            <h2 className='text-6xl font-bold mt-40 justify-center'>ABOUT US</h2>
          <h5 className="font-semibold mt-24 text-3xl">
          At <span>J&K TREASURES</span>, our mission is to connect you with the rich cultural heritage of Jammu and Kashmir by offering a curated selection of local products from talented artisans and vendors in the region, allowing you to support local communities and experience the beauty of their craftsmanship.
          </h5>
        </div>
      </div>
      <div className="bg-gray-300 flex p-8 flex-row items-center max-w-max p-4 mx-auto">
        <img
          src="/ODOPimage.jpg"
          alt="Kashmir Artisan"
          className="mb-4 w-80 h-60 rounded mr-4"
        />
        <p className="font-semibold text-2xl">
        The "One District One Product" (ODOP) initiative in Jammu and Kashmir plays a pivotal role in diversifying the economy, generating employment, preserving cultural heritage, and promoting sustainable development. It fosters entrepreneurship, enhances product visibility in national and international markets, and attracts tourists seeking authentic experiences. Supported by government incentives, ODOP empowers local artisans and producers, contributing significantly to the region's economic growth and cultural richness.
        </p>
      </div>
      <div className="bg-gray-300 flex p-8 flex-row items-center max-w-max p-4 mx-auto">
      <p className="font-semibold text-2xl">
      To ensure product safety and accurate delivery of Jammu and Kashmir products, establish stringent quality control, vet reliable suppliers, employ secure packaging, and maintain meticulous inventory management. Encourage customer feedback, provide staff training, use technology for streamlined operations, and stay compliant with relevant laws. Effective communication with customers and a commitment to continuous improvement will build trust and enhance your website's reputation.
        </p>
        <img
        src="about2.jpg"
          
          alt="Kashmir Artisan"
          className="mb-4 w-80 h-60 rounded mr-4"
        />
       
      </div>
      <div className="bg-gray-300 flex p-8 flex-row items-center max-w-max p-4 mx-auto">
        <img
          src="about1.jpg"
          alt="Kashmir Artisan"
          className="mb-4 w-80 h-60 rounded mr-4"
        />
        <p className="font-semibold text-2xl">
        At  J&K Treasures, we prioritize your payment security. Rest assured, your transactions are safeguarded through a combination of Razorpay, a trusted payment gateway, and blockchain technology. With these advanced security measures in place, you can shop on our platform with confidence, knowing that your personal and financial data is protected. Your trust and security are our top concerns, and we are dedicated to providing a safe shopping experience.
        </p>
      </div>
    </div>
    </>
  );
};

export default About;