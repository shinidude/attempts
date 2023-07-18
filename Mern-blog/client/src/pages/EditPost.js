import {useEffect, useState} from "react";
import {Navigate, useParams} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Editor from '../components/Editor';

export default function EditPost() {
  const {id} = useParams();
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect,setRedirect] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/post/'+id)
      .then(response => {
        response.json().then(postInfo => {
          setTitle(postInfo.title);
          setContent(postInfo.content);
          setSummary(postInfo.summary);
        });
      });
  }, []);


  const updatePost= async (ev)=>{
    ev.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('id', id);
    if (files?.[0]) {
      data.set('file', files?.[0]);
    }
    const response = await fetch('http://localhost:4000/post', {
      method: 'PUT',
      body: data,
      credentials: 'include',
    });
    // if (response.ok) {
    //   setRedirect(true);
    // }
  }

  if (redirect) {
    return <Navigate to={'/post/'+id} />
  }

  return (<>
    <Form onSubmit={updatePost} >
        <Form.Group>
            <Form.Control type="title"  placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>
        </Form.Group>
       <Form.Group>
            <Form.Control type="summary"  placeholder="Summary" value={summary} onChange={e => setSummary(e.target.value)}/>
        </Form.Group>

        <Form.Group>
            <Form.Control type="file" placeholder="File Image"  onChange={e => setFiles(e.target.files)}/>
        </Form.Group>
      
        <Editor value={content} onChange={setContent} />

        <Form.Control type='submit' value={"Update Post"}/>
    </Form>
</>)
}