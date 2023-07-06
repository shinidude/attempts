import { useState } from "react";
import axios from 'axios'; 
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
                navigate('/');
                
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Form onSubmit={handleSumbit}>
               
                    <Form.Group>
                        <Form.Label> Name </Form.Label>
                        {/* //Taking all the data with the changes occurs in the name input based on the user's input */}
                        <Form.Control type='text' placeholder="enter name ..." value={data.name} onChange={(e) =>{setData({...data, name: e.target.value})}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        {/* //Taking all the data with the changes occurs in the email input  based on the user's input */}
                        <Form.Control type='email' placeholder="enter email ..." value={data.email} onChange={(e) =>{setData({...data, email: e.target.value})}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password </Form.Label>
                        {/* //Taking all the data with the changes occurs in the password input based on the user's input */}
                        <Form.Control type='password' placeholder="enter password ..." value={data.password} onChange={(e) =>{setData({...data, password: e.target.value})}}/>
                    </Form.Group>
                    <br></br>
                    <Button type="submit" variant="success">Submit </Button>
              
         
            </Form>
        </div>
    )
 }