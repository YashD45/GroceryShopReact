
import { useHistory } from "react-router-dom"
//import  { useEffect} from 'react';
import React, {useState } from 'react';
function SignIn()
{
    const[UserName, setUsername] =useState("");
    const[Password, setPassword] =useState("");
    //const[Email, setEmail] =useState("");
    const history= useHistory();
   /* useEffect(() => {
        if(localStorage.getItem('user-info')){
            history.push("/add")
        }
    }, [history])*/
async function logIn(){
   
    console.warn(UserName,Password)
    let item = {UserName,Password};
   let result= await fetch("http://localhost:64469/api/MyAccount",{
        method:'POST',
      
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json'
        },
        body:JSON.stringify(item)
    });
    result =await result.json();
   localStorage.setItem("user-info",JSON.stringify(result))
   history.push("/add")
}

   
    return(
       
     
            <div className="col-sm-6 offset-sm-3">
            <h1>Sign In</h1>
            <input type="text" value={UserName} onChange={(e)=> setUsername(e.target.value)}  placeholder="UserName" className="form-control" /><br />
            <input type="password" value={Password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" className="form-control" /><br />
           
            <button  onClick={ logIn} className="btn btn-primary">SignIn</button>

            </div>
           
           
     
      

    )
}

export default SignIn