
import './App.css'; 
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home'; 
import Register from './pages/Register';
import Login from '../src/pages/Login';
import Navbar from '../src/components/Navbar'
import axios from 'axios'; 
import {Toaster} from 'react-hot-toast';

//Initialises the base url of axios 
axios.defaults.baseURL = 'http://localhost:8000'; 
axios.defaults.withCredentials= true; 

function App() {

  return (
    <>
      <Navbar/> 
      <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
