import { useState } from "react";
import axios from 'axios'; 
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

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
                <Stack gap={2}>
                    <div>
                        <label> Name </label>
                        {/* //Taking all the data with the changes occurs in the name input based on the user's input */}
                        <input type='text' placeholder="enter name ..." value={data.name} onChange={(e) =>{setData({...data, name: e.target.value})}}/>
                    </div>
                    <div>
                        <label>Email</label>
                        {/* //Taking all the data with the changes occurs in the email input  based on the user's input */}
                        <input type='email' placeholder="enter email ..." value={data.email} onChange={(e) =>{setData({...data, email: e.target.value})}}/>
                    </div>
                    <div>
                        <label>Password </label>
                        {/* //Taking all the data with the changes occurs in the password input based on the user's input */}
                        <input type='password' placeholder="enter password ..." value={data.password} onChange={(e) =>{setData({...data, password: e.target.value})}}/>
                    </div>
                    <Button type="submit" variant="success">Submit </Button>
                </Stack>
         
            </form>
        </div>
    )
 }