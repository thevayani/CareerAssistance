import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

import { useEffect, useState } from "react";

function QuestionAi (){

    const[summary,setSummary] = useState([])
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

console.log(summary.questions)

    return <div>
        <h1>Quiz Question</h1>
        {summary.questions?.map((v) => 
          <p>{v.question}</p>
        )}
          {/* <div
              dangerouslySetInnerHTML={{__html: summary}}
          /> */}

    </div>
}

export default QuestionAi