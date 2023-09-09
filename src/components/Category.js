import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCookieBite,
  faDemocrat,
  faGem,
  faHandsHoldingCircle,
  faPepperHot,
  faPlateWheat,
  faRug,
  faShirt,
  faSun,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';

const Category = () => {
  const cardData = [
    {
      icon: faShirt,
      iconname: 'Handwoven Textiles',
    },
    {
      icon: faDemocrat,
      iconname: 'Wooden Crafts',
    },
    {
      icon: faPepperHot,
      iconname: 'Saffron and Spices',
    },
    {
      icon: faHandsHoldingCircle,
      iconname: 'Handicrafts',
    },
    {
      icon: faCookieBite,
      iconname: 'Dry Fruits and Nuts',
    },
  ];
  const cardData1 = [
    {
      icon: faRug,
      iconname: 'Carpets and Rugs',
    },
    {
      icon: faGem,
      iconname: 'Jewelry and Gemstones',
    },
    {
      icon: faPlateWheat,
      iconname: 'Local Cuisine',
    },
    {
      icon: faUserGroup,
      iconname: 'Artisan Profiles',
    },
    {
      icon: faSun,
      iconname: 'Sustainability Initiatives',
    },
  ];

  return (
    <div className='col-main'>
      <div>
      <h1 className='text-3xl font-bold mt-6 text-center'>Our ever-expanding categories..</h1>
      </div>
      <div className='icons-container mt-10 flex flex-col md:flex-row justify-center'>
        <div className='row1 flex justify-around'>
          {cardData.map((card, index) => (
            <div
              className='text-center hover:drop-shadow-2xl hover:shadow-black cursor-pointer hover:underline'
              key={index}
            >
              <FontAwesomeIcon icon={card.icon} className='icon text-[150px] text-teal-700 mr-[30px]' />
              <p className='mt-3 text-lg font-medium'>{card.iconname}</p>
            </div>
          ))}
        </div>
        <div className='row2 flex justify-around mt-5 md:mt-0'>
          {cardData1.map((card, index) => (
            <div
              className='text-center hover:drop-shadow-2xl hover:shadow-black cursor-pointer hover:underline'
              key={index}
            >
              <FontAwesomeIcon icon={card.icon} className='icon text-[150px] text-teal-700 ml-[30px]' />
              <p className='mt-3 text-lg font-medium'>{card.iconname}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
