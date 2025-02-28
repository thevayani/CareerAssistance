import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';




function Login() {
    const careerGlobalState = useSelector((state) => state.register.registerUsers)
     const navigate = useNavigate();
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    })

    const Save = () => {

        careerGlobalState.forEach((a) => {
            
            if (a.email == loginDetails.email && a.password == loginDetails.password) {
                alert("Login Successfull")
                navigate('/details')
            }
        })
    }

    return <div>
       
        Email:
        <Form.Control type="email" placeholder="Enter emailid" value={loginDetails.email} onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })} />

        Password:
        <Form.Control type="password" placeholder="Enter password" value={loginDetails.password} onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })} />

    <Button variant="success" onClick={Save}>Save</Button>
    </div>
}

export default Login


