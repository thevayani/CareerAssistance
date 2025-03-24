import { Container,Button,Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";
import { useState} from 'react';

function CareerAi(){

  const [generate,setRegenerate] = useState("generate")
  const [loading, setLoading] = useState(false);
  const [summary,setSummary] = useState("")

  let val = JSON.parse(localStorage.getItem("userdetails")); 

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
            const prompt  = `based on my educationdetails and indicate goals,skills,location,salary range expectation answer,
            Provide careers and job roles well suited to a [insert a fullname]
            provide guidance format as HTML within <div> tag with Css and Bootstrap design and 
            avoid below  key improvement explanation Output response will be HTML format only and avoid text which are placed outside HTML and html tag also: 
              ${JSON.stringify(val)}`

            const result = await model.generateContent(prompt);
            const responseText = result.response.text().replace(/```html/g, "").replace(/```/g,"");
            setSummary(responseText);
            setLoading(false)
            setRegenerate("upDate")
  }
       
 
    return <div>
      <Container style={{
      marginTop:"20px"
    }}>
       <h1 style={{textAlign:"center"}}>Carrer Ai Guidance</h1>
      </Container>
     
       {generate == "generate" ? <Button variant='primary' style={{marginLeft:"610px"}} disabled = {loading} onClick={run}>
          {loading ? 
              (
          <>
          <Spinner animation="border"  size='sm' style={{marginRight:"10px"}} variant="light" />Generating...
          </>
              ): (
              "Generate tips.."
              )
          }         
        </Button>:
        <Button variant='primary' style={{marginLeft:"600px"}} onClick={run}>
          {loading == false ? (
            "Re-generate" 
           ) :
          (
            <>
            <Spinner animation="border"  size='sm' style={{marginRight:"10px"}} variant="light" />Generating...
            </>
          )
        }
          </Button>
      }
        <div style={{marginTop: "20px"}}
             dangerouslySetInnerHTML={{__html: summary}}
        />
    </div>
}

export default CareerAi