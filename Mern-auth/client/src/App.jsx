
import './App.css'; 
import { Routes, Route } from 'react-router-dom'; 
import Register from './pages/Register';
import Login from '../src/pages/Login';
import Navbar from '../src/components/Navbar'
import axios from 'axios'; 
import {Toaster} from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext';
import Dashboard from './pages/Dashboard';

//Initialises the base url of axios 
axios.defaults.baseURL = 'http://localhost:8000'; 
axios.defaults.withCredentials= true; 

function App() {

  return (
    <UserContextProvider>
        <Navbar/> 
        <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
        <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/' element={<Login/>}/>
        </Routes>
      </UserContextProvider>
  )
}

export default App
