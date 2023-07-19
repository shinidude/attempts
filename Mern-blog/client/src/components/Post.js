import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export const  Post=({_id,title,summary,cover,content,createdAt,author, myPost})=>{
    const navigate = useNavigate();
    console.log("POST : "+ author.username);
    let ownerFunctions=""; 

    const handleEdit =()=>{
        navigate(`/edit/${_id}`)
    }

    const handleDelete = async()=>{
        console.log("hellow delete")
        const response = await fetch(`http://localhost:4000/post/${_id}`, {
            method : 'DELETE', 
            credentials: 'include'
        }); 
        const info =  await response.json();
        toast.success(info.message); 
    }

    ownerFunctions = 
            <div className='owner-func'>
                <Button onClick={handleEdit}>Edit</Button>
                <Button onClick={handleDelete}>Delete</Button>
            </div>
        
  
    return (
        <div key ={_id} className="blog-post">
            {myPost===true && ownerFunctions}
            <Link to={`/post/${_id}`}>
                <Card className="mb-3" style={{ maxWidth: '540px' }}>
                    <Row className="g-0">
                        <Col md={4}>
                            <Card.Img  classname="card-img-sm-left" src={'http://localhost:4000/'+cover} />
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>{author.username}</Card.Text>
                                <Card.Text>{summary}</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card> 
            </Link>
        </div>
    )
}