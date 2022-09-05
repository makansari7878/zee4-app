import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom'
import AboutUs from './components/AboutUs';
import MyDefault from './components/MyDefault';
import Teams from './components/Teams';
import India from './components/India';
import Pakistan from './components/Pakistan';

function App() {
  return (
    <div className="App">
      <NavBar/> <br></br><br></br><br></br>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='aboutus' element={<AboutUs/>}></Route>
        <Route path='teams' element= {<Teams/>}>
          <Route index element= {<India/>}></Route>
            <Route path ='india' element={<India/>}></Route>
            <Route path ='pakistan' element={<Pakistan/>}></Route>             
        </Route>

        <Route path='*' element={<MyDefault/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
