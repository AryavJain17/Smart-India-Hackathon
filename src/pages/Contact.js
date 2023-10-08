import './Contact.css';
import Carousel from './components/carousel';
import Form from './components/form';

function App() {
  return (
    <div>
      
        <div className="carousel-container">
          <Carousel />
        </div>
        <div className="container my-5" >
        <div className="form-container">
          <Form />
          </div>
        </div>
      
    </div>
  );
}


export default App;
