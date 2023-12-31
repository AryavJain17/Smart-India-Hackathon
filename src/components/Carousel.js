import React, { useState, useEffect } from 'react';


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    'https://admin.risingkashmir.com/Source/News/userfiles/image/s_637735968679573268_4_(8).jpg',
    'https://i1.wp.com/khyenchyen.net/wp-content/uploads/2019/06/Kashmiri-saffron.jpg?fit=1500%2C1000&ssl=1&resize=460%2C249',
    'https://www.tourmyindia.com/states/jammu-kashmir/image/houseboats-jk.jpg ',
  ];

  const handlePrevClick = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(prevIndex);
  };

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000); // Change slides every 3 seconds (adjust as needed)
     return () => {
       clearInterval(interval);
     };
  }, [currentIndex]);

  return (
    <div
      id="carouselExampleCrossfade"
      className="relative"
      data-te-carousel-init
      data-te-ride="carousel"
    >
    

      {/* Carousel items */}
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] h-[650px] ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`relative float-left -mr-[100%] w-full  opacity-0 transition-opacity duration-[300ms] ease-in-out motion-reduce:transition-none ${
              index === currentIndex ? 'opacity-100 ' : ''
            }`}
            data-te-carousel-fade
            data-te-carousel-item
            data-te-carousel-active={index === currentIndex}
          >
            <img src={slide} className="block w-full" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default Carousel;
