// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button,Form } from 'react-bootstrap';
// import{useState} from "react";
// import{useNavigate} from "react-router-dom";

// import {setRegisterUsers} from '../redux/slices/login';
// import { useSelector,useDispatch } from 'react-redux';



// function CareerGoals(){
//     const careerGlobalDetails = useSelector((state) => state.register)
//     const dispatch = useDispatch()
    
//     const[skillUser,setSkillUser] = useState([])
//     const[goalsDetails,setGoalDetails]=useState({
//         goal:"",
//         skill:[],
//         what_industries_are_you_most_interested_in:"",
//         what_relevant_certification_do_you_hold:"",
//         period_of_time_to_get_the_job:""

//     })

//     const skillArray=()=>{
//         console.log(goalsDetails)
       
        
        
//         // const Array=e.target.value.map(skill=>skill.trim());
//         // setGoalDetails({ ...goalsDetails, skill: skillArray });
//     }

//     const Submit = ()=>{

//         if(goalsDetails.skill){
//             goalsDetails.skill = [goalsDetails.skill]
//         }
//         let data = [...careerGlobalDetails.registerUsers,goalsDetails]
        
//         dispatch(setRegisterUsers(data))
        
//     }


//     return <div>
//         <h1>Career Goal</h1>
//         {JSON.stringify(careerGlobalDetails)}
//         <Form.Control type="text" onChange={(e)=>setGoalDetails({...goalsDetails,goal:e.target.value})} ></Form.Control> 
        
//          skill
//          <div>
//         <Form.Control type="text" onChange={(e)=>setGoalDetails({...goalsDetails,skill:e.target.value})} ></Form.Control>
//         <Button variant="info"onClick={skillArray}>Add</Button>
//         </div>

//         what industries are you most interested in?
//         <Form.Control type="text" onChange={(e)=>setGoalDetails({...goalsDetails,what_industries_are_you_most_interested_in:e.target.value})} ></Form.Control> 
//         what relevant certification do you hold?
//         <Form.Control type="text" onChange={(e)=>setGoalDetails({...goalsDetails,what_relevant_certification_do_you_hold:e.target.value})} ></Form.Control> 
//         period of time to get the job?
//         <Form.Control type="text" onChange={(e)=>setGoalDetails({...goalsDetails,period_of_time_to_get_the_job:e.target.value})} ></Form.Control> 
//         <Button variant="info"onClick={Submit}>submit</Button>
     
       

        
//     </div>
// }

// export default CareerGoals