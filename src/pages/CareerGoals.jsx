import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { useState,useEffect} from "react";
import axios from 'axios';
import image from '../assets/flower.jpg'

function CareerGoals() {

   

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

    useEffect(() => {
        getApi()
    }, [])




    const addskill = () => {

        if (skillDetails == "") {
            alert("Please enter the value")

        }
        else {
            setSkillDetails("")
            let value = [skillDetails]
            console.log(value)
            let skills = [...goalsDetails.skill,...value]
            setGoalDetails({ ...goalsDetails, skill: skills })
        }


    }

    const deleteBtn = (v) => {
        alert("do you want to delete?")
        let del = goalsDetails.skill.filter((items) => items != v)
        setGoalDetails({ ...goalsDetails, skill: del })
    }
    

    const handleQuestion = (index, value) => {
        const updatedQuestions = [...goalsQues];
        
        updatedQuestions[index].answer = value;
        setGoalDetails({...goalsDetails, questions: updatedQuestions });
 };

 
    

    
    const submit = () => {


        const formData = new FormData();
        formData.append("user_id", 4);
        formData.append("data", JSON.stringify(goalsDetails));

        axios.post('https://agaram.academy/api/b4/action.php?request=ai_carrier_update_user_goals', formData).then((res) => {
            console.log(res)
        })

       

        if (goalsDetails.goal && goalsDetails.skill && goalsQues[0].answer
            && goalsQues[1].answer && goalsQues[2].answer && goalsQues[3].answer) {

                console.log(goalsDetails)
                setGoalDetails({goal:""})

             
           
            setgoalsQues([
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
            alert("submitted")
         }
        else{
            alert("Please fillup")
        }
    }

    const getApi = () => {
        axios.get('https://agaram.academy/api/b4/action.php?request=ai_carrier_get_user_goals&user_id=4')
            .then((res) => {
                let getData = res.data.data.data
                setGoalDetails(JSON.parse(getData))
                console.log(getData)

            })
        }

    return <div  style={
        {
            backgroundImage:   `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "750px",
        }
    }>
        <h1 style={{ textAlign: "center", color:"black"}}>Career Goal</h1>

        <div style={{
            backgroundColor: "rgb(24, 163, 161)",
            width: "500px",
            marginLeft: "350px",
            borderRadius: "15px",
            marginLeft: "400px",
            marginTop: "50px",
            background: "transparent",
            boxShadow: "0 0 10px",
            padding:"30px"

        }}>

        <h5 style={{ textAlign: "left", color:"black", marginLeft: "25px"}}>Enter your Goal:</h5>
        <Form.Control type="text" value={goalsDetails.goal} onChange={(e) => setGoalDetails({ ...goalsDetails, goal: e.target.value.trim() })} required  ></Form.Control>

        <h5 style={{ textAlign: "left", color:"black", marginLeft: "25px"}}>skill:</h5>
        <div>
            <Form.Control type="text" value={skillDetails} onChange={(e) => setSkillDetails(e.target.value.trim())} required ></Form.Control>
            <ul>
                                    {goalsDetails.skill?.map((v) =>
                                        <li>{v}<Button onClick={()=> deleteBtn(v)}>delete</Button>
                                         
                                        </li>
                                    )}
                                </ul>
           
            <Button variant="warning" onClick={addskill}>Add</Button>
            
        </div>


        {goalsDetails?.questions.length?  goalsDetails.questions.map((q, index) => (
            <div>
                {q.question}
                <Form.Control type="text"  value={q.answer}  onChange={(e) => handleQuestion(index, e.target.value.trim())} required />
            </div>
        )) : goalsQues.map((q, index) => (
            <div>
                {q.question }
                <Form.Control type="text" style={{ textAlign: "left", color:"black", marginLeft: "25px"}}value={q.answer}  onChange={(e) => handleQuestion(index, e.target.value.trim())} required />
            </div>
        ))}

 <Button variant="dark" onClick={submit}>Submit</Button>
    </div>
    </div>
    
}
export default CareerGoals