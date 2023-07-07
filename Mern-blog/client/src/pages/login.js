import { Fragmen,useState } from "react"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const Login=()=>{
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');  

    const handleSubmit=(event)=>{
        event.preventDefault(); 
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