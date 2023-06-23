import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "./Pages/home";
import { Auth } from "./Pages/auth";
import { SaveRecipe } from "./Pages/saved-recipe";
import { CreateRecipe } from "./Pages/create-recipe-page";
import { Navbar } from "./components/Navbar";

function App(){
    return (<div className="App">
        <Router>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/auth" element={<Auth/>}/>
                <Route path="/saved-recipe" element={<SaveRecipe/>}/>
                <Route path="/create-recipe" element={<CreateRecipe/>}/>
            </Routes>
        </Router>
    </div>); 
}

export default App;