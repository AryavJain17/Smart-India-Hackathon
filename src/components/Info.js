import React from 'react';
import ReactPlayer from 'react-player';

const Info = () => {
  return (
    <div className='bg-[#f1fdf7] flex flex-row justify-between'>
      <div className='left'>
        <h2 className="text-4xl font-bold ml-12 mt-6">When everything's the best</h2>
        <p className='w-[800px] ml-12 my-5 text-2xl font-bold underline italic'>Discover the essence of Jammu and Kashmir, one product at a time.</p>
        <p className=' w-[800px] ml-12 text-lg font-medium mr-12'>Embark on a journey to explore the heart of Jammu and Kashmir's heritage through our curated selection of unique products, each with its own captivating story.</p>
        <p className=' w-[800px] ml-12 my-5 text-2xl font-bold underline italic'>Empowering artisans, enriching heritage: Explore ODOP Jammu and Kashmir.</p>
        <p className=' w-[800px] ml-12 text-lg font-medium mr-12'>Join us in empowering local artisans while preserving and celebrating the timeless traditions that define our heritage. Explore ODOP Jammu and Kashmir today.</p>
        <p className=' w-[800px] ml-12 my-5 text-2xl font-bold underline italic'>From saffron fields to handwoven dreams – Journey through ODOP."</p>
        <p className=' w-[800px] ml-12 text-lg font-medium mr-12'> Take a fascinating journey through the diverse world of ODOP, from the vibrant saffron fields to the intricate dreams woven by skilled hands. Experience the essence of Jammu and Kashmir.</p>
        <p className=' w-[800px] ml-12 my-5 text-2xl font-bold underline italic'>Connecting tradition to innovation: ODOP Jammu and Kashmir.</p>
        <p className=' w-[800px] ml-12 text-lg font-medium mr-12 mb-5 '> At ODOP Jammu and Kashmir, we bridge the gap between timeless traditions and modern innovation, bringing you the best of both worlds. Explore the fusion of heritage and progress here.</p>
      </div>
      <div className='right mr-10 mt-[125px] rounded-lg'>
        <ReactPlayer
       
          url="/videos/myvideo.mp4"
          className='video1'
          width="600px"
          height="auto"
          controls={true}
          config={{
            file: {
              attributes: {
                controlsList: 'nodownload', // Disable download option
              },
            },
          }}
        />
      </div>

      {/* Media query for screens with a max-width of 480px */}
      <style jsx>{`
        @media (max-width: 480px) {
          .flex-row {
            flex-direction: column;
          }
          .mr-10 {
            margin-right: 0;
          }
        
        }
      `}</style>
    </div>
  );
}

export default Info;
