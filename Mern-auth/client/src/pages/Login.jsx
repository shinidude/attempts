import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
            console.log(data.email)
            if(data.error){
                toast.error(data.error); 
            }else{
                setData([]);
                navigate("/dashboard");
            }
        } catch (error) {
            
        }
    }
    return (

        <div>
              <Form onSubmit={handleSumbit}>
                    <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' placeholder="enter email ..." value={data.email} onChange={(e) =>{setData({...data, email: e.target.value})}}/> 
                    </Form.Group>
                <Form.Group>
     
                        <Form.Label>Password </Form.Label>
                        <Form.Control type='password' placeholder="enter password ..." value={data.password} onChange={(e) =>{setData({...data, password: e.target.value})}}/>
        
                </Form.Group>
                <br/>
                    <Button type="submit" variant="success">Login </Button>
            </Form>
        </div>
    )
 }