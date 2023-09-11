
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/product';
import About from './page/about';
import JobApplicationForm from './components/job';


function App() {
  
  return (
   <BrowserRouter>
   <Navbar className="z-50"/>
  <Routes>
<Route path='/' element={<Home/>} ></Route>
<Route path='/Product' element={<Product/>} ></Route>
<Route path='/About' element={<About/>} ></Route>
<Route path='/Job' element={<JobApplicationForm/>}></Route>
  </Routes>
   
   </BrowserRouter>
  
  );
}

export default App;
