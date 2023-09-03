import logo from './logo.svg';
import './App.css';
import {Route, Routes } from 'react-router';
import MainForm from './MainForm';
import MoviesBar from './MoviesBar';
import NavBar from './NavBar';
import Home from './Home';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
    <NavBar/> 
   <div className='body'>
   
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/mainform" element={<MainForm/>}/>
     <Route path="/moviesbar" element={<MoviesBar/>}/>
   </Routes>

   </div>
 </div>
  );
}

export default App;

