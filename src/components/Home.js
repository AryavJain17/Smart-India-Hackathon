import React from 'react'
import Cursor from './Cursor'
import Search from './Search'
import Carousel from './Carousel'
import Popular from './Popular'
import Info from './Info'
import Category from './Category'
import Review from './Review'
import Footer from './Footer'

const Home = () => {
  return (
    <>
  
   <div className='homepage'>
   <Cursor />
   <Search />
     <Carousel />
     <h1 className=' text-center font-bold text-3xl mt-10'>Each District is Special</h1>
     <div className='flex flex-row'>
 
   <Popular />
   {/* <Popular />
   <Popular />
   <Popular /> */}
   </div>
 <Info />
 <Category />
 <Review />
 <Footer />
 </div>
    </>
  )
}

export default Home