import React, {useState , useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import Header from './Header';
function Signup()
{
    const[UserName, setUsername] =useState("");
    const[Password, setPassword] =useState("");
    const[ConfermPassword, setConfirmpassword] =useState("");
    const[Email, setEmail] =useState("");
    const[Errors, setErrors]= useState("");
    const[isRegister, setisRegister]= useState(false);


    const history = useHistory();

async function Registration(){
    
    let item = {UserName,Password,ConfermPassword,Email}
    console.warn(item)
    setisRegister(true);
   let result= await fetch("http://localhost:64469/api/Customer" ,{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json'
           
        }
    })
    result =await result.json()
   localStorage.setItem("user-info",JSON.stringify(result))
   history.push("/add")
   setErrors( validate(item));
}
useEffect(() => {
    console.log(Errors);
if(Object.keys(Errors).length === 0 && isRegister){
    //console.log(item);
}
},[Errors])
const validate = (value) => {
const Errors = {};
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
if(!value.UserName){
    Errors.UserName= "username is required";

}
if(!value.Password){
    Errors.Password= "password is required";
    
}
if(!value.ConfermPassword){
    Errors.ConfermPassword= "Conferm username is required";
    
}

if(!value.Email){
    Errors.Email= "Email is required";
    
}

return Errors;
};

    return(
        <div className="col-sm-6 offset-sm-3">
            <h1>Registration page</h1><br />
<div><input type="text" value={UserName} onChange={(e)=> setUsername(e.target.value)} className="form-control" placeholder="UserName" /></div><p>{Errors.UserName}</p><br />
<div><input type="password" value={Password} onChange={(e)=> setPassword(e.target.value)} className=" form-control" placeholder="Password" /></div><p>{Errors.Password}</p><br />
<div><input type="password" value={ConfermPassword} onChange={(e)=> setConfirmpassword(e.target.value)} className=" form-control" placeholder="Confirm Pssword" /></div><p>{Errors.ConfermPassword}</p><br />
<div><input type="Email"  value={Email} onChange={(e)=> setEmail(e.target.value)} className=" form-control" placeholder="Email Id" /></div><p>{Errors.Email}</p><br />
<br />



<button id='t2' onClick={ Registration} className="btn btn-primary" >SignUp</button>
        </div>
    )
}

export default Signup