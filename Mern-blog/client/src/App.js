import  {Posts}  from "./components/Posts";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes,Route} from "react-router-dom"; 
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Layout } from "./components/Layout";
import { Home } from "./pages/home";


function App() {
  return (
    <div className="App">
      <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index path="/posts" element={<Home/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
            </Route>
     
        </Routes>
    </div>
  );
}

export default App;
