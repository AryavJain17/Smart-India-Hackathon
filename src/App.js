
import { Router } from 'react-router-dom';
import './App.css';
import Carousel from './components/Carousel';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Popular from './components/Popular';
import Search from './components/Search';
function App() {
  return (
    <>
    
  
   <Navbar className="z-50"/>
   {/* <h1 className='absolute z-40 ml-44 mt-56 text-white font-extrabold text-3xl drop-shadow-3xl shadow-black'>Let's Bring</h1> */}
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
   </>
  );
}

export default App;
