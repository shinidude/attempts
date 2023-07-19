import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes,Route} from "react-router-dom"; 
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Layout } from "./components/Layout";
import { Home } from "./pages/home";
import {Toaster} from 'react-hot-toast';
import { UserContextProvider } from './context/userContext';
import { Createform } from './pages/createPost';
import { PostPage } from './pages/PostPage';
import EditPost, { editPage } from './pages/EditPost';
import { MyBlogs } from './pages/Myblogs';
import './styles/App.scss'

function App() {
  return (
    <UserContextProvider>
        <Toaster position="top-center" toastOptions={{duration: 2000}}/>
      <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/create' element={<Createform/>}/>
                <Route path='/post/:id' element={<PostPage/>}/>
                <Route path="/own/:id" element={<MyBlogs/>} />
                <Route path="/edit/:id" element={<EditPost />} />
            </Route>
        </Routes>
    </UserContextProvider>
  );
}

export default App;
