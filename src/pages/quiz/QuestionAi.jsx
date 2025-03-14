import { Form, Container, Button, Row, Col,Navbar,Nav, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

import { useEffect, useState } from "react";

function QuestionAi (){

    const[summary,setSummary] = useState([])

    const[answers,setAnswer] = useState({
      answer:""
    })

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
          const prompt  = `Generate 10 random questions with 4 multiple choice and 
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

console.log(answers)
    return <div>
        <h1 style={{textAlign:"center"}}>Quiz Question</h1>
        {summary.questions?.map((v) => 
          <div style={
              {
                marginLeft:"500px",
                marginTop:"30px"
              }
            }>
            <h4>{v.question}</h4>
                <span>{v.options.map((option) => 
                     <Form.Check type="radio" 
                     style={{marginLeft:"100px",marginTop:"20px"}} 
                     aria-label="radio 1"  
                     label={option}
                     value={option}
                     checked={option == answers.answer}
                     onChange={(e) => setAnswer({ ...answers, answer: e.target.value })} 
                     />
                  
                   )}
                
                 
                  </span>
            </div>

          
        )}
         

    </div>
}

export default QuestionAi