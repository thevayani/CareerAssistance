import { Form, Container, Button, Row, Col,Navbar,Nav, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import{useNavigate} from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { setanswer } from '../../redux/slices/quiz';
import { setquestion } from '../../redux/slices/quizQuestion';

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

import { useEffect, useState } from "react";

function QuestionAi (){

  const globalAnswer = useSelector((state) => state.quiz)

  const globalQuestion  =  useSelector((state) => state.question)

     const navigate = useNavigate()
     const dispatch = useDispatch()

    const[summary,setSummary] = useState([])

    const[answers,setAnswer] = useState({})

    const[questionAi,setQuestionAi] = useState()

    const cx = "84c171dacf1aa43c1"
    const apiKey = "AIzaSyC8kh_wDAmTboxQf3lvjBSChxhiNfjbPdU"

    const genAI = new GoogleGenerativeAI(apiKey);

    // const model = genAI.getGenerativeModel({
    //     model: "gemini-2.0-flash",
    // });

    const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
        generationConfig: {
          responseMimeType: "application/json",
        },
      });

    useEffect(() =>{
        run()
    },[])


    async function run() {
          const prompt  = `Generate 5 random questions with 4 multiple choice and 
          answer seperately it should be follwing JSON fromat:{"questions":[
            {
          "id":0,
            "question":"",
            "options":[],"answer":""            
            },...]}`

       
          const result = await model.generateContent(prompt);

          const responseText = result.response.text();
          let val = JSON.parse(responseText)
          setSummary(val)
        
}

const checkHandler = (v,i) => {
    setAnswer((prev) => ({
      ...prev,[i]: v,  
    }))
}

const submitBtn =() => {

  // console.log(answers[3])

  // summary.forEach((q) => {

  // })

    let x = [...globalAnswer.answer,answers]
    dispatch(setanswer(x))

    let y =  [...globalQuestion.question,summary]
    dispatch(setquestion(y))

    navigate("/show")
}
    return <div>
     
        <h1 style={{textAlign:"center"}}>Quiz Question</h1>
        {summary.questions?.map((v) => 
          <div style={
              {
                marginLeft:"480px",
                marginTop:"30px"
              }
            }>
            <h4>{v.question}</h4>
                <span>{v.options.map((option) => 
                     <Form.Check type="radio" 
                        style={{marginLeft:"120px",marginTop:"20px"}} 
                        aria-label="radio 1"  
                        label={option}
                        value={option}
                        onChange={() => checkHandler(option,v.id)}
                        checked = {answers[v.id] === option}
                     />
                  
                   )}
                
                   
                  </span>

            </div>

          
        )}
         
        <Button style={{
          marginLeft:"600px",
          textAlign:"center",
          marginTop:"30px"
        }} variant='primary' onClick={submitBtn}>Submit</Button>
    </div>
}

export default QuestionAi