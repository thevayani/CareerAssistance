import { Form,Container,Navbar,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";
import { useState, useEffect } from 'react';



function CareerAi(){

  const[summary,setSummary] = useState("")

        const details = {
            personal_details:{
              Fullname:"Venkadesh.M",
              dob:"11-05-1999",
              father_name:"R.Muthu Krishnan",
              mother_name:"N.Sheela",
              email:"venkadesh264@gmail.com",
              gender:"male",
            conntact_number:"8838946021"
              
            },
            education:[
              {
              course_name:"sslc",
              course_institute:"S.M.R.V",
              course_year:2014,
              course_percentage:88
            },
            {
              course_name:"hsc",
              course_institute:"vgs",
              course_year:2016,
              course_percentage:89
            },
            {
              course_name:"B.Sc",
              course_institute:"S.T.Hindu College",
              course_year:2019,
              course_percentage:74
            }
          ],
          skills:["java","phyton","html","css","react","redux","bootstrap"],
          languages_known:["tamil","english"],
          goals:["i want a job"]
    }
    
    
        const cx = "84c171dacf1aa43c1"
        const apiKey = "AIzaSyC8kh_wDAmTboxQf3lvjBSChxhiNfjbPdU"
    
        const genAI = new GoogleGenerativeAI(apiKey);
    
        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash",
        });
    
        const generationConfig = {
            temperature: 1,
            topP: 0.95,
            topK: 40,
            maxOutputTokens: 8192,
            responseMimeType: "text/plain",
        };
    
        async function run() {
          
            // const prompt  = `List a skills realted job using this:  ${JSON.stringify(details)}
            // title: below Given title,
            // solution : below skills related solution`;

            const prompt = `skills realted job using this:${JSON.stringify(details)}

              title = {'title': string}
              solution = {'solution' : string}
              Return: Array<title><solution>`;


            const result = await model.generateContent(prompt);
           
            console.log("Summary Response: ",result.response.text());
            setSummary(result.response.text().split(/[*,**]/));
           
            
        }
       
    
        useEffect(() => {
            
            run()
        },[])

        
    
        
    return <div>
      <Container style={{
      marginLeft:"580px",
      marginTop:"20px"
      
    }}>
       <h1>Carrer Ai</h1>
        <Button variant='primary' style={{marginLeft:"40px"}} onClick={run}>Click</Button>


      </Container>
             <p style={{marginTop:"20px"}}>{summary}</p>
    </div>
}

export default CareerAi