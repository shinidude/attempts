import { useState } from "react";
import axios from 'axios'; 
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register (){
    const navigate =  useNavigate(); 

    const [data,  setData] = useState({
        name:'', 
        emaill: '', 
        password: '',
    })

    const handleSumbit = async (e) =>{
        e.preventDefault(); 
        const {name, email, password} = data;
        try {
            const {data} = await axios.post('/register', {name, email, password})
            console.log(data)
            if(data.error){
                toast.error(data.error);
            }else{
                setData({}); 
                toast.success('login successful. Welcome!');
                navigate('/login');
                
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <form onSubmit={handleSumbit}>
                <label> Name </label>
                {/* //Taking all the data with the changes occurs in the name input based on the user's input */}
                <input type='text' placeholder="enter name ..." value={data.name} onChange={(e) =>{setData({...data, name: e.target.value})}}/>
                <label>Email</label>
                {/* //Taking all the data with the changes occurs in the email input  based on the user's input */}
                <input type='email' placeholder="enter email ..." value={data.emaill} onChange={(e) =>{setData({...data, emaill: e.target.value})}}/>
                <label>Password </label>
                   {/* //Taking all the data with the changes occurs in the password input based on the user's input */}
                <input type='password' placeholder="enter password ..." value={data.password} onChange={(e) =>{setData({...data, password: e.target.value})}}/>
                <button type="submit">Submit </button>
            </form>
        </div>
    )
 }