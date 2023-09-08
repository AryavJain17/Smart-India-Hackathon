import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Home.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product'; // Assuming you want to include Product
import About from './pages/About';
function App() {
  return (
    <BrowserRouter>
      <Navbar className="z-50" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/About' element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
