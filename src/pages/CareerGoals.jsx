import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form } from 'react-bootstrap';
import{useState} from "react";
import{useNavigate} from "react-router-dom";

import {setRegisterUsers} from '../redux/slices/register.js';
import { useSelector,useDispatch } from 'react-redux';



function CareerGoals(){
    const[goalsDetails,setGoalDetails]=useState({
        goal:"",
        skill:[],
        what_industries_are_you_most_interested_in:"",
        what_relevant_certification_do_you_hold:"",
        period_of_time_to_get_the_job:""

    })

    const skillArray=(e)=>{
        const Array=e.target.value.map(skill=>skill.trim());
        setGoalDetails({ ...goalsDetails, skill: skillArray });
    }


    return <div>
        <h1>Career Goal</h1>
        Enter your Goal
        <Form.Control type="text" onChange={(e)=>setGoalDetails({...goalsDetails,goal:e.target.value})} ></Form.Control> 
         skill
        <Form.Control type="text" onChange={(e)=>setGoalDetails({...goalsDetails,skill:e.target.value})} ></Form.Control> 

        <Button variant="info"onClick={skillArray}>Add</Button>

        
    </div>
}

export default CareerGoals