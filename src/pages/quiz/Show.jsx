import { Form, Container, Button, Row, Col,Navbar,Nav, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector,useDispatch } from 'react-redux';


import { useEffect, useState } from "react";

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";


function Show (){

  // const globalAnswer = useSelector((state) => state.quiz)

  const globalQuestion  =  useSelector((state) => state.quiz);

    const[summary,setSummary] = useState([])

    const[markShow,setMarkshow] = useState("show")


    const[verifyAnswer,setverifyAnswer] = useState("")


   

   
    const questionAi = () => {
      let v =  globalQuestion.answer      
      console.log(v)     
      setSummary(v)
  }

  useEffect(() =>{
    questionAi()
},[])


      const cx = "84c171dacf1aa43c1"
        const apiKey = "AIzaSyC8kh_wDAmTboxQf3lvjBSChxhiNfjbPdU"
    
        const genAI = new GoogleGenerativeAI(apiKey);
    
       
        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash",
            generationConfig: {
              responseMimeType: "application/json",
            },
          });
    
         
    
        async function run() {
          const prompt = `
        Check how many answers are correct from this data: ${JSON.stringify(summary)}.
        Return only this exact JSON format:  

        { "total marks": "correctAnswers / totalQuestions" }

        No extra text or explanation
        `;
          
      
           
              const result = await model.generateContent(prompt);
               const responseText = result.response.text();  

                  const text = JSON.parse(responseText);
                  console.log(text)
                  const totalMarks = text["total marks"]; 
                  setverifyAnswer(totalMarks);
                  setMarkshow("update")

    
        }

    

  

    return <div>
     
        <h1 style={{textAlign:"center"}}>Quiz</h1>
        {markShow == "show" ?
          <Button variant='primary' style={{marginLeft:"600px",marginTop:"20px"}} onClick={run}>Verify Answer</Button>:
          <h3 style={{marginLeft:"580px",marginTop:"20px"}}>Total marks = {verifyAnswer}</h3>
        }
       
         
       
    </div>
}

export default Show