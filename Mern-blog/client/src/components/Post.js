import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai';
import Moment from 'moment';

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

    const handleView =()=>{
        navigate(`/post/${_id}`);
    }

    ownerFunctions = 
            <Card.Body className='owner-func'>
                <Button className='float-right' onClick={handleEdit}><AiFillEdit/></Button>
                <Button  className='float-right' onClick={handleDelete}><AiFillDelete/></Button>
            </Card.Body>;
        
  
    return (
        <div key ={_id} className='blog-post'>
                <Card className='mb-3' style={{ maxWidth: '550px', minHeight:'200px' }}>
                    <Button variant='outline-ligth' onClick={handleView}>
                    <Card.Header>
                        <Row>
                            <Col id='date'><p>{Moment(createdAt).format("ll")}</p></Col> 
                            <Col id='author-col'><p>{author.username}</p></Col>
                        </Row>
                    </Card.Header>
                        <Row className='g-0' >
                            <Col className='image' md={4}>
                                <Card.Img  className="card-img-sm-left" src={'http://localhost:4000/'+cover} />
                            </Col>
                            <Col id='post-body' md={8}>
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>{summary}</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Button> 
                    {myPost===true && ownerFunctions}
                </Card>
        </div>
    )
}