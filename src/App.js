
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Blog.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/product';

import JobApplicationForm from './components/job';
import './proct.css'
import Sellers from './components/sellers';
import ProductUpload from './components/productupload';
import About from './pages/About';

import Blog from './pages/Blog';
import SellerNavbar from './components/sellernavbar';
import Negotiate from './pages/Negotiate';
import SellerHome from './components/SellerHome';
import Left from './components/Left';
import Right from './components/Right';
import Footer from './components/Footer';


function App() {
  
  return (
   <BrowserRouter>
  
  <Routes>
<Route path='/' element={<Home/>} ></Route>
<Route path='/Product' element={<Product/>} ></Route>
<Route path='/About' element={<About/>} />
        <Route path='/Blog' element={<Blog />} />
<Route path='/Job' element={<JobApplicationForm/>}></Route>
<Route path='/seller' element={<Sellers/>}></Route>
<Route path='/productupload' element={<ProductUpload/>}></Route>
<Route path='/sellerhome' element={<Sellers/>}></Route>
<Route path='/Negotiate' element={<Negotiate/>}></Route>
<Route path='/SellerHome' element={<SellerHome/>}></Route>
<Route path='/Left' element={<Left/>}></Route>
<Route path='/Right' element={<Right/>}></Route>
  </Routes>
   <Footer />
   </BrowserRouter>
  
  );
}

export default App;
