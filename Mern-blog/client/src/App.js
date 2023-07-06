import  {Posts}  from "./components/Posts";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./components/Navbar";
import {Routes,Route} from "react-router-dom"; 
import { Register } from "./pages/register";
import { Login } from "./pages/login";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Posts/>
      <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
