
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Editor from '../components/Editor';


export const Createform =()=>{
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [files, setFile] = useState('');
    const [content, setContent] = useState(''); 


    const handleNewPost = async (event)=>{
        const data = new FormData()
        data.set('title', title); 
        data.set('summary', summary); 
        data.set('content', content); 
        data.set('file', files[0]); 
        event.preventDefault();
  
        const response = await fetch('http://localhost:4000/post', {
            method : 'POST', 
            body: data, 
        }); 

        console.log(await response.json()); 


    } 
     console.log(files);
    return (<>
        <Form onSubmit={handleNewPost} >
            <Form.Group>
                <Form.Control type="title"  placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>
            </Form.Group>
           <Form.Group>
                <Form.Control type="summary"  placeholder="Summary" value={summary} onChange={e => setSummary(e.target.value)}/>
            </Form.Group>
    
            <Form.Group>
                <Form.Control type="file" placeholder="File Image"  onChange={e => setFile(e.target.files)}/>
            </Form.Group>
          
            <Editor value={content} onChange={setContent} />
 
            <Form.Control type='submit' value={"Create Post"}/>
        </Form>
    </>)
} 