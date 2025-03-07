import { Form,Container,Navbar,Button,Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";
import { useState, useEffect } from 'react';



function CareerAi(){

  const [loading, setLoading] = useState(false);

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
          skills:["html","css","react","javascript","bootstrap"],
          languages_known:["tamil","english"],
          goals:["i want to get a software industry"],
          place : "nagercoil",
          within  : "6 months",
          certificate : "React Certificate",
          salary_expectation  : "20OOO"

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
          setLoading(true)
            const prompt  = `based on my skills and my goals,place,salary,location,
            Provide careers and job roles well suited to a [insert a name]
            provide guidance format as HTML within <div> tag with Css and Bootstrap design and 
            avoid below  key improvement explanation Output response will be HTML format only and avoid text which are placed outside HTML: 
              ${JSON.stringify(details)}`

                     // const prompt = `based on my skills and my goals 
            //       what career paths should I consider and what steps should I take to reach that goal?
            //      provide guidance format as HTML within <div> tag with Css and Bootstrap design 
            //      not to show HTML structure & best practise & Key improvements in this version:
            //        ${JSON.stringify(details)}`;

          
          
            const result = await model.generateContent(prompt);
            console.log("Summary Response:", result.response.text());
    

            const responseText = result.response.text();
          
            setSummary(responseText);
            setLoading(false)
  }
       
    
      
        
    
        
    return <div>
      <Container style={{
    
      marginTop:"20px"
    }}>
       <h1>Carrer Ai</h1>
      </Container>
      <div
          dangerouslySetInnerHTML={{__html: summary}}

        />
        <Button variant='primary' style={{marginLeft:"600px"}} disabled = {loading} onClick={run}>
          {loading ? 
              (
          <>
          <Spinner animation="border"  size='sm' variant="danger" />Generating...
          </>
              ): (
              "Generate tips.."
              )
          }
          
        </Button>

     
    </div>
}

export default CareerAi