
import './App.css'; 
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home'; 
import Register from './pages/Register';
import Login from '../src/pages/Login';
import Navbar from '../src/components/Navbar'

function App() {

  return (
    <>
      <Navbar/> 
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/Login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
