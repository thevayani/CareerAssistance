import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";
import { useState, useEffect } from 'react';



function CareerAi(){

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
          goals:[["i want a job"]
        ]
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
            const prompt  = `Make a summary of the following JSON details: ${JSON.stringify(details)}`;
            const result = await model.generateContent(prompt);
            console.log("Summary Response: ",result.response.text());
            // const chatSession = model.startChat({
            //   generationConfig,
            //   history: [
            //   ],
            // });
    
            // const result = await chatSession.sendMessage("What are the features avaialble in React");
            // console.log(result.response.text());
        }
        // const [data, setData] = useState([])
        // const navigate = useNavigate()
    
        useEffect(() => {
            // FetchApI()
            run();
        }, [])

        const FetchApI = async () => {
            const fetchAPIData = async () => {
    
                try {
                    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=who is the indian prime minister?`;
                    const response = await fetch(url);
    
                    if (!response.ok) {
                        throw new Error(`Error fetching search results: ${response.statusText}`);
                    }
    
                    const data = await response.json();
                    console.log("response", data)
                } catch (error) {
                    console.log("error", error)
                }
            }
    
        }
    return <div>
        <hi>hi</hi>
    </div>
}

export default CareerAi