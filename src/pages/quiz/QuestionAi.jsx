import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

import { useEffect, useState } from "react";

function QuestionAi (){

    const[summary,setSummary] = useState()
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

    useEffect(() =>{
        run()
    },[])


    async function run() {
          const prompt  = `Provide quiz questions and answer in Array Object format as HTML within <div> tag with Css and Bootstrap design and 
          avoid below  key improvement explanation Output response will be HTML format only and avoid text which are placed outside HTML and html tag also :`

        
        
        
          const result = await model.generateContent(prompt);
          console.log("Summary Response:", result.response.text());
  

          const responseText = result.response.text();
          setSummary(responseText)
        
}
    return <div>
        <h1>Quiz Question</h1>
        <div
             dangerouslySetInnerHTML={{__html: summary}}
        />
    </div>
}

export default QuestionAi