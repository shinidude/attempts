import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export const  Post=({_id,title,summary,cover,content,createdAt,author})=>{
    const navigate = useNavigate();
    console.log("POST : "+ author.username);
    return (

        <div key ={_id}>
            <Link to={`/post/${_id}`}>
                <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={'http://localhost:4000/'+cover} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{author.username}</Card.Text>
                        <Card.Text>{summary}</Card.Text>
                    </Card.Body>
                </Card> 
            </Link>
        </div>
    )
}