
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/product';
import About from './components/about';
import JobApplicationForm from './components/job';
import './proct.css'
import Sellers from './components/sellers';
import ProductUpload from './components/productupload';


function App() {
  
  return (
   <BrowserRouter>
   
  <Routes>
<Route path='/' element={<Home/>} ></Route>
<Route path='/Product' element={<Product/>} ></Route>
<Route path='/About' element={<About/>} ></Route>
<Route path='/Job' element={<JobApplicationForm/>}></Route>
<Route path='/seller' element={<Sellers/>}></Route>
<Route path='/productupload' element={<ProductUpload/>}></Route>
<Route path='/sellerhome' element={<Sellers/>}></Route>
  </Routes>
   
   </BrowserRouter>
  
  );
}

export default App;
