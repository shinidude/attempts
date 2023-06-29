import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login () {
    const navigate = useNavigate(); 
    const [data, setData] = useState({
        email : '', 
        password : ''
    })
    const handleSumbit =async (e)=>{
        e.preventDefault(); 
        const { email, password} = data;
        try {
            const {data} = await axios.post('/login', {email, password}); 
            console.log(data)
            if(data.error){
                toast.error(data.error); 
            }else{
                setData([]);
                navigate("/");
            }
        } catch (error) {
            
        }
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