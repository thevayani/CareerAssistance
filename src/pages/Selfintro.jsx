import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";
import { useEffect, useState } from "react";

function Selfintro(){
    const cx = "84c171dacf1aa43c1"
        const apiKey = "AIzaSyC8kh_wDAmTboxQf3lvjBSChxhiNfjbPdU"

        const[summary,setSummary] = useState("")
      
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
    
        useEffect(()=>{
            run()
        },[])
        async function run() {
         
            const prompt  = `self introduction ramya` 
              

                //      const prompt = `based on my skills and my goals 
                //   what career paths should I consider and what steps should I take to reach that goal?
                //  provide guidance format as HTML within <div> tag with Css and Bootstrap design 
                //  not to show HTML structure & best practise & Key improvements in this version
                //    `;

          
          
            const result = await model.generateContent(prompt);
            console.log("Summary Response:", result.response.text());
    

           const responseText = result.response.text();
          
            setSummary(responseText);

            <button varient= "primary" onClick={run}></button>
          
  }
 return <div>
 <h2>Self Introduction</h2>
 
 <button varient= "primary" onClick={run} >Generate Introduction</button>

 <div dangerouslySetInnerHTML={{ __html: summary }} />

</div>




}
export default Selfintro