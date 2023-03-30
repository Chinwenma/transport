// import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Counter from './components/Counter';
import Header from './components/Header';
import Services  from './components/Services';
import Project  from './components/Project';

function App() {
  return (
    <div className="App">


      <Header />
      <Banner />
      <Services/>
      <Counter/>
      <Project/>
    
    </div>
  );
}

export default App;
