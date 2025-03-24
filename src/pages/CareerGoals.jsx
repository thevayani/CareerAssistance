
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

    const deleteBtn = (v) => {
        alert("Do you want to delete?")
        let del = goalsDetails.skill.filter((items) => items != v)
        setGoalDetails({ ...goalsDetails, skill: del })
    }


    const handleQuestion = (index, value) => {
        let updatedQuestions = goalsDetails.questions.length ? [...goalsDetails.questions] : [...goalsQues];
        updatedQuestions[index].answer = value;
        setGoalDetails({ ...goalsDetails, questions: updatedQuestions });
    };

    const submit = () => {
        if (goalsDetails.goal == "" ||
            goalsDetails.skill == "" ||
            goalsDetails.questions[0].answer == "" ||
            goalsDetails.questions[1].answer == "" ||
            goalsDetails.questions[2].answer == "" ||
            goalsDetails.questions[3].answer == "") {
            alert("please enter the value")
        }
        else {
            const formData = new FormData();
            formData.append("user_id", user.id);
            formData.append("data", JSON.stringify(goalsDetails));

            axios.post('https://agaram.academy/api/b4/action.php?request=ai_carrier_update_user_goals', formData).then((res) => {
                console.log(res)
            })
            alert("submitted successfully");
            navigate("/show");
        }
    }

    const getgoalDetailsApi = () => {
        axios.get(`https://agaram.academy/api/b4/action.php?request=ai_carrier_get_user_goals&user_id=${user.id}`)
            .then((res) => {
                let getData = res.data.data.data
                setGoalDetails(JSON.parse(getData))
                console.log(getData)
            })
    }

    return <div style={
        {
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "900px",
            background: "20"
        }
    }>
        <h1 style={{ textAlign: "center", color: "black" }}><i>Career Goal</i></h1>

        <div style={{
            backgroundColor: "rgb(34, 160, 195)",
            width: "500px",
            marginLeft: "34%",
            borderRadius: "15px",
            marginTop: "50px",
            boxShadow: "0 0 10px",
            padding: "30px"

        }}>

            <h5 style={{ textAlign: "left", color: "black", marginLeft: "25px" }}>Goal:</h5>
            <Form.Control type="text" value={goalsDetails.goal} placeholder="Enter your goal" onChange={(e) => setGoalDetails({ ...goalsDetails, goal: e.target.value.trimStart() })} required  ></Form.Control>

            <h5 style={{ textAlign: "left", color: "black", marginLeft: "25px" }}>skill:</h5>

            <div>
                <div className="d-flex align-items-center">
                    <Form.Control
                        type="text"
                        value={skillDetails}
                        onChange={(e) => setSkillDetails(e.target.value.trimStart())}
                        required
                        className="me-2"
                    />
                    <Button variant="warning" onClick={addskill}><IoAddOutline /></Button>
                </div>

                <ul>
                    <div>
                        {goalsDetails.skill?.map((v) =>
                            <li>{v} <Button variant="danger" onClick={() => deleteBtn(v)}><AiTwotoneDelete /></Button>

                            </li>
                        )}
                    </div>
                </ul>
            </div>

            {goalsDetails?.questions?.length ? goalsDetails.questions.map((q, index) => (
                <div>
                    <b>{q.question}</b>
                    <Form.Control type="text" value={q.answer} onChange={(e) => handleQuestion(index, e.target.value.trimStart())} required />
                </div>
            )) : goalsQues.map((q, index) => (
                <div>
                    {q.question}
                    <Form.Control type="text" style={{ textAlign: "left", color: "black", marginLeft: "5px" }} value={q.answer} onChange={(e) => handleQuestion(index, e.target.value.trimStart())} required />
                </div>
            ))}

            <div style={{ textAlign: "center", color: "black", paddingTop: "20px" }} >
                <Button variant="success" onClick={submit}>Submit</Button>
            </div>
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