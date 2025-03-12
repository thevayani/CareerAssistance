import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Form } from 'react-bootstrap';
import{useState} from "react";
import{useNavigate} from "react-router-dom";
import image from '../assets/green.jpg';
import axios from 'axios';


function Register(){
    const navigate=useNavigate()


    const[user,setUser]=useState({
        name:"",
        email:"",
        password:""
    })
    const submit=()=>{
       

        const name = user.name.trim();
        const email = user.email.trim();
        const password = user.password.trim();
        
    

                if(name && email && password){ 
                    alert("Register Success")
                    const formData = new FormData();
                    formData.append("name",name);
                    formData.append("email",email);
                    formData.append("password",password);
                        axios.post("https://agaram.academy/api/b4/action.php?request=ai_carrier_user_register",formData)
                        .then((res)=>{
                             console.log(res)
                        })
                    setUser({name:"",email:"",password:""})
                    navigate('/login')
                 }
                 else{
                    alert("Please fill up")
                 }
}

    return <div style={
        {
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundAttachment: "revert",
            backgroundRepeat: "no-repeat",
            height: "550px",
            width:"500px",
            marginLeft:"350px"
            
            
        }
    }>

    <Container style={
        {
            width :  "500PX"
        }
    }>
                    <h1 style={{
                        textAlign:"center",


                    }}>Register</h1>

        <Form style={
            
                {
                    WebkitBackdropFilter: "blur(5px)",
                    backdropFilter: "blur(5px)",
                    marginTop: "20px",
                    padding: "30px",
                    marginRight: "20px",
                    marginTop : "70px",

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