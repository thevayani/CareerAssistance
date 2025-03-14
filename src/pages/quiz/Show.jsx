import { Form, Container, Button, Row, Col,Navbar,Nav, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector,useDispatch } from 'react-redux';
import { setanswer } from '../../redux/slices/quiz';
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

import { useEffect, useState } from "react";

function Show (){

  const globalAnswer = useSelector((state) => state.quiz)

   

    const[summary,setSummary] = useState([])


    const cx = "84c171dacf1aa43c1"
    const apiKey = "AIzaSyC8kh_wDAmTboxQf3lvjBSChxhiNfjbPdU"

    const genAI = new GoogleGenerativeAI(apiKey);

    

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

console.log(globalAnswer.answer.map((val,index) => val.index))

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
                        disabled 
                     />
                    
                   )}
              
                  </span>
                  <h6>{v.id}</h6>
                    {/* {globalAnswer.answer.map((val) => val.id === v.id ?
                    <h6>{val}</h6>:"Not entered"
                )} */}
            </div>      
        )}
         
       
    </div>
}

export default Show