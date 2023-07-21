
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Editor from '../components/Editor';




export const Createform =()=>{
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [files, setFile] = useState('');
    const [content, setContent] = useState(''); 


    const handleNewPost = async (event)=>{
        event.preventDefault();
        const data = new FormData()
        data.set('title', title); 
        data.set('summary', summary); 
        data.set('content', content); 
        data.set('file', files[0]); 
        const response = await fetch('http://localhost:4000/post', {
            method : 'POST', 
            body: data, 
            credentials: 'include', 
        }); 

         console.log(await response.json());
        console.log("hell0")
        console.log(await response.json());
        if(response.ok){
            toast.success("New Post Created")
            setTitle(''); 
            setContent(''); 
            setSummary('');
        }
        

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