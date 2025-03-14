import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Form } from 'react-bootstrap';
import{useState} from "react";
import{useNavigate} from "react-router-dom";

import {setRegisterUsers} from '../redux/slices/register.js';
import { useSelector,useDispatch } from 'react-redux';
import image from '../assets/compter.jpg';
import axios from 'axios';


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
        //  navigate('/login')
        }
    }
    else{
        alert("please fillup")
    }
    const formData = new FormData();
    formData.append("name",user.name);
    formData.append("email",user.email);
    formData.append("password",user.password);
        axios.post("https://agaram.academy/api/b4/action.php?request=ai_carrier_user_register",formData)
        .then((res)=>{
            console.log(res)
        })
}




    return <div style={
        {
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundAttachment: "revert",
            backgroundRepeat: "no-repeat",
            height: "620px",
        }
    }>

       {JSON.stringify(registerGlobalState)}
    <Container style={
        {
            width :  "500PX",
        }
    }>
                    <h1 style={{
                        textAlign:"center"
                    }}>Register</h1>

        <Form style={
            
                {
                    backgroundColor: "rgba(8, 247, 207, 0.38)",
                    WebkitBackdropFilter: "blur(5px)",
                    backdropFilter: "blur(5px)",
                    padding: "30px",
                    borderRadius: "45px",
                    marginRight: "20px",
                    marginTop : "70px",
                    boxShadow: "6px 8px rgb(12, 9, 1)"
                }

        
        }>
            Name
            <Form.Control type="text" value={user.name} placeholder="enter your name" onChange={(e)=>setUser({...user,name:e.target.value})} required ></Form.Control> 
            Email
            <Form.Control type="text" value={user.email} placeholder="enter your email" onChange={(e)=>setUser({...user,email:e.target.value})} required ></Form.Control> 
            Password
            <Form.Control type="text" value={user.password} placeholder="enter your password" onChange={(e)=>setUser({...user,password:e.target.value})}required ></Form.Control> 
            <Button style={
                {
                    textAlign:"center",
                    marginLeft:"140px",
                    marginTop:"20px"
                }
            } variant="dark" onClick={submit}>Register</Button>

            </Form>

        </Container>
    </div>

}
export default Register