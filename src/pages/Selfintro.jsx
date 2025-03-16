import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { useEffect, useState } from "react";
import axios from 'axios';

function Selfintro() {
  const cx = "84c171dacf1aa43c1"
  const apiKey = "AIzaSyC8kh_wDAmTboxQf3lvjBSChxhiNfjbPdU"

  const [summary, setSummary] = useState("")
  const [userInputValue, setuserInputValue] = useState(null);
  

  useEffect(() => {
    getApi()
  }, [])

 

  const getApi = () => {

    axios.get('https://agaram.academy/api/b4/action.php?request=ai_carrier_get_user_profile&user_id=4').then((res) => {
      let getData = res.data.data.data
      console.log(getData)
      setuserInputValue(JSON.parse(getData))

    });
  }


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

  useEffect(() => {
    run()
  }, [])

  async function run() {
    const prompt = `Hai, based on the  details how to introduce elaborate selfintroduction:
        ${JSON.stringify(userInputValue)}
        avoid text outside HTML tags return only the HTML content`;






    const result = await model.generateContent(prompt);
    console.log("Summary Response:", result.response.text());


    const responseText = result.response.text();

    setSummary(responseText);
    console.log(summary)
  }



  return <div>
    <h2 style={{ textAlign: "center", color: "black" }}>Self Introduction</h2>

    <button varient="primary" style={{ textAlign: "center", color: "black" }} onClick={run} >Generate Introduction</button>

    <div dangerouslySetInnerHTML={{ __html: summary }} />

  </div>




}
export default Selfintro