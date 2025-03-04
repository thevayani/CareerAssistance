
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form } from 'react-bootstrap';
import{useState} from "react";
import{useNavigate} from "react-router-dom";

import { setCareerUsers } from '../redux/slices/careergoal';
import { useSelector,useDispatch } from 'react-redux';



function CareerGoals(){

    const careerGlobalState=useSelector((state)=>state.careerGoal.careerGoalUsers)
    const dispatch=useDispatch()


    const[skillDetails,setSkillDetails]=useState([])
    const[goalsDetails,setGoalDetails]=useState({
        goal:"",
        skill:[],
        what_industries_are_you_most_interested_in:"",
        what_relevant_certification_do_you_hold:"",
        period_of_time_to_get_the_job:""
    })



    const addskill=()=>{

        if(skillDetails == ""){
            alert("Please enter the value")

        }
        else{
        setSkillDetails("")
        let value=[skillDetails]
        console.log(value)
        let skills=[...goalsDetails.skill,...value]
        setGoalDetails({...goalsDetails,skill:skills})
        }
 

    }

        const submit=()=>{
            if(goalsDetails.goal && goalsDetails.skill && goalsDetails.what_industries_are_you_most_interested_in &&
                goalsDetails.what_relevant_certification_do_you_hold && goalsDetails.period_of_time_to_get_the_job)

            {

             let   data = [...careerGlobalState,goalsDetails]
                        dispatch(setCareerUsers(data));
                        console.log(data)
                        alert("ok")
                        setGoalDetails({goal:"",skill:"",what_industries_are_you_most_interested_in:"",what_relevant_certification_do_you_hold:"",
                            period_of_time_to_get_the_job:""
                        })
        }
        else{
            alert("Please fillup")
        }
    }



    return <div>
        <h1>Career Goal</h1>
        Enter your Goal
        <Form.Control type="text" value={goalsDetails.goal}onChange={(e)=>setGoalDetails({...goalsDetails,goal:e.target.value})} required  ></Form.Control> 
         skill 
         <div>
        <Form.Control type="text" value={skillDetails} onChange={(e)=>setSkillDetails(e.target.value)} required ></Form.Control>
        <Button variant="info"onClick={addskill}>Add</Button>
        </div>

        what industries are you most interested in?
        <Form.Control type="text" value={goalsDetails.what_industries_are_you_most_interested_in} onChange={(e)=>setGoalDetails({...goalsDetails,what_industries_are_you_most_interested_in:e.target.value})} required ></Form.Control> 
        what relevant certification do you hold?
        <Form.Control type="text" value={goalsDetails.what_relevant_certification_do_you_hold} onChange={(e)=>setGoalDetails({...goalsDetails,what_relevant_certification_do_you_hold:e.target.value})} required></Form.Control> 
        period of time to get the job?
        <Form.Control type="text" value={goalsDetails.period_of_time_to_get_the_job} onChange={(e)=>setGoalDetails({...goalsDetails,period_of_time_to_get_the_job:e.target.value})} required></Form.Control> 
        <Button variant="primary" onClick={submit}>Submit</Button>

    </div>
}
 export default CareerGoals