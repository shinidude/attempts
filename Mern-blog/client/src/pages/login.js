import { Fragmen,useContext,useState } from "react"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Toast, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";


export const Login=()=>{
    const navigate = useNavigate(); 
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');  
    const {setUserInfo} = useContext(UserContext); 

    const handleSubmit= async (event)=>{
        event.preventDefault(); 
        try {
            const response =  await fetch('http://localhost:4000/login',{
                method: 'POST',
                body : JSON.stringify({username,password}), 
                headers:{'Content-Type': 'application/json'}, 
                credentials: 'include'
            })  
            console.log(response);
            //if the response is not okay
            if(response.ok){
                response.json().then(userInfo=>{
                    setUserInfo(userInfo); 
                    navigate('/');
                });
            
            }else{
                toast.error("Wrong credentials, please try again")
            }
    
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row}>
                        <Col sm="1">
                            <Form.Label>Username :</Form.Label>
                        </Col>
                        <Col sm="3">
                            <Form.Control type="text" 
                                plaintext placeholder="enter username"
                                value={username}
                                onChange={e=>setUsername(e.target.value)}
                            />
                        </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm="1">
                        <Form.Label sm="2">Password :</Form.Label>
                    </Col>
                    <Col sm="3">
                        <Form.Control type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <br/>
            <Form.Group>
                <Form.Control type="submit" value={"Login"}/>
            </Form.Group>
        </Form>
    </div>)
}