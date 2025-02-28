import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form } from 'react-bootstrap';
import{useState} from "react";
import{useNavigate} from "react-router-dom";

import {setRegisterUsers} from '../redux/slices/register.js';
import { useSelector,useDispatch } from 'react-redux';


function Register(){
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const registerGlobalState=useSelector((state)=>state.register.registerUsers)

    const[user,setUser]=useState({
        name:"",
        email:"",
        password:""
    })
    const submit=()=>{

        if(user.name && user.email && user.password){ 

      let duplicateValue=false
      registerGlobalState.map((e) =>{ 
            if(e.email === user.email){
                duplicateValue=true

            }
        })
        if (duplicateValue) {
            alert("Email already exists");
            return;
        
        }

        else{

            let   data = [...registerGlobalState,user]
            dispatch(setRegisterUsers(data));
            console.log(data)

           alert("ok")
        setUser({name:"",email:"",password:""})
        navigate('/login')
        }
    }
    else{
        alert("please fillup")
    }
}

    return <div>

       {JSON.stringify(registerGlobalState)}

        <h1>Register</h1>
        Name
        <Form.Control type="text" placeholder="enter your name" onChange={(e)=>setUser({...user,name:e.target.value})} ></Form.Control> 
        Email
        <Form.Control type="text" placeholder="enter your email" onChange={(e)=>setUser({...user,email:e.target.value})} ></Form.Control> 
        Password
        <Form.Control type="text" placeholder="enter your password" onChange={(e)=>setUser({...user,password:e.target.value})} ></Form.Control> 



        <Button variant="dark" onClick={submit}>Register</Button>

    </div>
}
export default Register