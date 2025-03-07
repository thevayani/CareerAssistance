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
    const [goalsQues, setgoalsQues] = useState([
        {
            question: "what is your preferred work location?",
            answer: ""
        },
        {
            question: "what relevant certification do you hold?",
            answer: ""
        },
        {
            question: "Get a job within?",
            answer: ""
        },
        {
            question: "What is your salary range expectation?",
            answer: ""
        }
    ])

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

    const handleQuestion = (index, value) => {
        const updatedQuestions = [...goalsQues];
        updatedQuestions[index].answer = value;
        setgoalsQues(updatedQuestions);

    };

    const submit = () => {


//         const formData = new FormData();
//         formData.append("goal", goalsDetails.goal);
//         formData.append("skill", goalsDetails.skill);
//         formData.append("questions", goalsDetails.questions);

       
// axios.post('',formData).then((res)=>{
//     console.log(res)
//   })

        if (goalsDetails.goal && goalsDetails.skill && goalsQues[0].answer
            && goalsQues[1].answer && goalsQues[2].answer  && goalsQues[3].answer) {
        
       

        let question = [...goalsDetails.questions, goalsQues]
        console.log(question)
        setGoalDetails({ ...goalsDetails, questions: goalsQues });
        console.log(goalsDetails)


        // let data = [...careerGlobalState, {  ...goalsDetails, questions: goalsQues }];
        // console .log(data)
        // dispatch(setCareerGoalUsers(data));
        //console.log(data)

        alert("submitted")
        // setGoalDetails({goal:"",skill:"",questions:""})
        




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

        {goalsQues.map((q, index) => (
            <div>
                {q.question}
                <Form.Control type="text" value={q.answer} onChange={(e) => handleQuestion(index, e.target.value)} required />
            </div>
        ))}

      


        {/* {goalsQues[0].question}
        <Form.Control type="text" value={goalsQues.answer}  onChange={(e) => setgoalsQues({...goalsQues[0], answer: e.target.value })} required ></Form.Control>  */}




        {/* {goalsQues.question}
        <Form.Control type="text" value={goalsQues.answer} onChange={(e) => setgoalsQues({ ...goalsQues, answer: e.target.value })} required></Form.Control>

        {goalsQues.question}
        <Form.Control type="text" value={goalsQues.answer} onChange={(e) => setgoalsQues({ ...goalsQues, answer: e.target.value })} required></Form.Control>

        {goalsQues.question4}
        <Form.Control type="text" value={goalsQues.answer} onChange={(e) => setgoalsQues({ ...goalsQues, answer: e.target.value })} required></Form.Control>  */}

        <Button variant="primary" onClick={submit}>Submit</Button>
    </div>
}
export default CareerGoals