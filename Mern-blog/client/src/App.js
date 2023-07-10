import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes,Route} from "react-router-dom"; 
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Layout } from "./components/Layout";
import { Home } from "./pages/home";
import {Toaster} from 'react-hot-toast';


function App() {
  return (
    <div className="App">
        <Toaster position="top-center" toastOptions={{duration: 2000}}/>
      <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
            </Route>
     
        </Routes>
    </div>
  );
}

export default App;
