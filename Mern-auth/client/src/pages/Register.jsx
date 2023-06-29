import { useState } from "react";

export default function Register (){
    const [data,  setData] = useState({
        name:'', 
        emaill: '', 
        password: '',
    })

    const handleSumbit = (e) =>{
        e.preventDefault(); 
    }
    return (
        <div>
            <form onSubmit={handleSumbit}>
                <label> Name </label>
                {/* //Taking all the data with the changes occurs in the name input based on the user's input */}
                <input type='text' placeholder="enter name ..." value={data.name} onChange={(e) =>{setData({...data, name: e.target.value})}}/>
                <label>Email</label>
                {/* //Taking all the data with the changes occurs in the email input  based on the user's input */}
                <input type='email' placeholder="enter email ..."value={data.emaill} onChange={(e) =>{setData({...data, emaill: e.target.value})}}/>
                <label>Password </label>
                   {/* //Taking all the data with the changes occurs in the password input based on the user's input */}
                <input type='password' placeholder="enter password ..."/>
                <button type="submit">Submit </button>
            </form>
        </div>
    )
 }