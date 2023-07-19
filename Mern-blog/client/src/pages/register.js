import { Fragment, useState } from "react"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export const Register=()=>{

    const navigate = useNavigate(); 
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');  

    const handleSubmit= async (event)=>{
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/register',{
                method: 'POST', 
                body: JSON.stringify({username, password}),
                headers:{'Content-Type': 'application/json'}
            })
            console.log(response);
            const notif =  await response.json(); 
            console.log(notif.message);
            if(response.status === 200) {
                toast.success(notif.message);
                navigate('/login');
            }else{
                toast.error(notif.message);
            }
     
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="auth-class">
            <h3>Register</h3>
            <hr/>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row}  className="mb-3" > 
                        <Form.Label column sm={2}>Username</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" 
                                plaintext placeholder="enter username"
                                value={username}
                                onChange={(e)=>setUsername(e.target.value)}
                            />
                        </Col>
                </Form.Group>
                <Form.Group as={Row}  className="mb-3" >
                    <Form.Label column sm={2}>Password</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}  className="mb-3" >
                    <Form.Control type="submit" value={"Register"}/>
                </Form.Group>
            </Form>
        </div>
    )
}