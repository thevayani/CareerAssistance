
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
import {setLoginUsers} from '../redux/slices/login'




function Login() {
    const careerGlobalState = useSelector((state) => state.login.loginUsers)
    // const [registeredUsers,setRegisteredUsers] = useState()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    })

    const Save = () => {


        const formData = new FormData();
        formData.append("email", loginDetails.email);
        formData.append("password", loginDetails.password);

        axios.post('https://agaram.academy/api/b4/action.php?request=ai_carrier_user_login', formData).then((res) => {
             console.log(res.data);

           
            

            if (res.data.status === "success") {
                alert("Login Successfull")

                dispatch(setLoginUsers(res.data))                
                console.log(careerGlobalState)
                
                navigate('/details')
            }
            else {
                alert("Not registered")
                navigate('/register')
            }

        });


        // useEffect(() => {
           
        //     if (careerGlobalState) {
        //         navigate('/details');
        //     }
        // }, [careerGlobalState, navigate]);




        // careerGlobalState.forEach((a) => {

        //     if (a.email == loginDetails.email && a.password == loginDetails.password) {
        //         alert("Login Successfull")
        //         navigate('/details')

        //     }
        //     else {
        //         navigate('/register')
        //     }
        // })
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


