import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom'
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <NavBar/> <br></br><br></br><br></br>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='aboutus' element={<AboutUs/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
