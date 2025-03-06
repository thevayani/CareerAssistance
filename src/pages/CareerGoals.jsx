import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { setCareerGoalUsers } from '../redux/slices/careergoal';
import { useSelector, useDispatch } from 'react-redux';



function CareerGoals() {

    const careerGlobalState = useSelector((state) => state.careerGoal.careerGoalUsers)
    const dispatch = useDispatch()
    const [goalsQues, setgoalsQues] = useState({
        question1: "what is your preferred work location?",
        answer1: "",
        question2: "what relevant certification do you hold?",
        answer2: "",
        question3: "period of time to get the job?",
        answer3: "",
        question4: "What is your salary range expectation?",
        answer4: ""
    })

    const [skillDetails, setSkillDetails] = useState([])
    const [goalsDetails, setGoalDetails] = useState({
        goal: "",
        skill: [],
        questions: [],

    })



    const addskill = () => {

        if (skillDetails == "") {
            alert("Please enter the value")

        }
        else {
            setSkillDetails("")
            let value = [skillDetails]
            //console.log(value)
            let skills = [...goalsDetails.skill, ...value]
            setGoalDetails({ ...goalsDetails, skill: skills })
        }


    }

    const submit = () => {



        if (goalsDetails.goal && goalsDetails.skill && goalsQues.answer1
            && goalsQues.answer2 && goalsQues.answer3) {
                
            let question = [...goalsDetails.questions, goalsQues]
            console.log(question)
            setGoalDetails({ ...goalsDetails, questions: question });

            

            let data = [...careerGlobalState, { ...goalsDetails, questions: question }];
            dispatch(setCareerGoalUsers(data));
            //console.log(data)
            
            alert("submitted")
            setGoalDetails({goal:"",skill:"",questions:""})
            setgoalsQues({   
                question1: "what is your preferred work location?",
                answer1: "",
                question2: "what relevant certification do you hold?",
                answer2: "",
                question3: "period of time to get the job?",
                answer3: "",
                question4: "What is your salary range expectation?",
                answer4: ""

            })

            


        }
        else {
            alert("Please fillup")
        }
    }



    return <div>
        <small>{JSON.stringify(goalsDetails)}</small>
        <h1>Career Goal</h1>

        Enter your Goal:
        <Form.Control type="text" value={goalsDetails.goal} onChange={(e) => setGoalDetails({ ...goalsDetails, goal: e.target.value })} required  ></Form.Control>

        skill:
        <div>
            <Form.Control type="text" value={skillDetails} onChange={(e) => setSkillDetails(e.target.value)} required ></Form.Control>
            <Button variant="info" onClick={addskill}>Add</Button>
        </div>

        {goalsQues.question1}
        <Form.Control type="text" value={goalsQues.answer1} onChange={(e) => setgoalsQues({ ...goalsQues, answer1: e.target.value })} required ></Form.Control>

        {goalsQues.question2}
        <Form.Control type="text" value={goalsQues.answer2} onChange={(e) => setgoalsQues({ ...goalsQues, answer2: e.target.value })} required></Form.Control>

        {goalsQues.question3}
        <Form.Control type="text" value={goalsQues.answer3} onChange={(e) => setgoalsQues({ ...goalsQues, answer3: e.target.value })} required></Form.Control>

        {goalsQues.question4}
        <Form.Control type="text" value={goalsQues.answer4} onChange={(e) => setgoalsQues({ ...goalsQues, answer4: e.target.value })} required></Form.Control>

        <Button variant="primary" onClick={submit}>Submit</Button>

    </div>
}
export default CareerGoals