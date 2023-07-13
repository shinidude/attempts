import Card from 'react-bootstrap/Card';
import { Fragment } from 'react';


export const  Post=({title, summary, content, cover,_id})=>{
    console.log(_id);
    return (
        
        <Fragment key ={_id}>
            <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={'http://localhost:4000/'+cover} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{summary}</Card.Text>
                    </Card.Body>
                </Card> 
        </Fragment>
    )
}