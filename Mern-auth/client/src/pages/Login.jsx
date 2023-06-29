import axios from "axios";
import { useState } from "react";

export default function Login () {
    const [data, setData] = useState({
        email : '', 
        password : ''
    })
    const handleSumbit =async (e)=>{
        e.preventDefault(); 
        fetch('http://localhost:8000/').then(res => res.json()).then(data=> console.log(data)); 
    }
    return (

        <div>
              <form onSubmit={handleSumbit}>
                <label>Email</label>
                <input type='email' placeholder="enter name ..." value={data.email} onChange={(e) =>{setData({...data, email: e.target.value})}}/>
                <label>Password </label>
                <input type='password' placeholder="enter name ..." value={data.password} onChange={(e) =>{setData({...data, password: e.target.value})}}/>
                <button type="submit">Login </button>
            </form>
        </div>
    )
 }