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
          
            // const prompt  = `List a skills realted job using this:  ${JSON.stringify(details)}
            // title: below Given title,
            // solution : below skills related solution`;

            // const prompt = `skills realted tips job using this:${JSON.stringify(details)}

            //   title = {'title': string}
            //   solution = {'solution' : string}
            //   Return: Array<title><solution>`;


            // const result = await model.generateContent(prompt);
           
            // console.log("Summary Response: ",result.response.text());
            // setSummary(result.response.text().split(/[*,**]/));

            const prompt = `based on my skills and my goals 
                  what career paths should I consider and what steps should I take to reach that goal?
                 provide guidance format as HTML within <div> tag with Css design fromat
                   ${JSON.stringify(details)}`;
       
            const result = await model.generateContent(prompt);
            console.log("Summary Response:", result.response.text());
    

            const responseText = result.response.text();
            // const parts = responseText.split(/[*]|<-->|<-C->/);

            // let newResponse;
            // for(let i = 0 ; i < parts.length; i++){
            //   if( i == 0 || i%2 !== 1){
            //     newResponse += parts[i]
            //   }else{
            //     newResponse += "<b>" + parts[i] + "</b>"
            //   }
            // }
    
    // let formattedSummary = [];
    //   for (let i = 1; i < parts.length; i+= 2) {
    //     const title = parts[i]?.trim();
    //     const content = parts[i + 3]?.trim();
    //     if(title && content){
    //       formattedSummary.push({
    //          title: title, 
    //         content: content
    //       });
    //     }
       
    //   }

      setSummary(responseText);
  }
       
    
        useEffect(() => {        
            run()
        },[])

        
    
        
    return <div>
      <Container style={{
      // marginLeft:"580px",
      marginTop:"20px"
      
    }}>
       <h1>Carrer Ai</h1>
        <Button variant='primary' style={{marginLeft:"40px"}} onClick={run}>Click</Button>


      </Container>
      <div
          dangerouslySetInnerHTML={{__html: summary}}
        />
      {/* {summary.length === 0 ? (
          <h6>No Data..</h6>
        ) : (
          summary.map((item, index) => (
            <div key={index}>
             <h6>{item.title}</h6>
              <li>{item.content}</li>
            </div>
          ))
        )} */}
        
             {/* <div style={{marginTop:"20px"}}>{summary}</div> */}
             
    </div>
}

export default CareerAi