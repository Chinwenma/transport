// import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Counter from './components/Counter';
import Header from './components/Header';
import Services  from './components/Services';
import Project  from './components/Project';
import Testimonial from './components/Testimonial';
import ChooseUs from './components/ChooseUs';
import Blogs from './components/Blogs';

function App() {
  return (
    <div className="App">


      <Header />
      <Banner />
      <Services/>
      <Counter/>
      <Project/>
      <Testimonial/>
      <ChooseUs/>
      <Blogs/>
      <Blogs/>
      
    
    </div>
  );
}

export default App;
