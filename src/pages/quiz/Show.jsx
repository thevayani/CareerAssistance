import { Form, Container, Button, Row, Col,Navbar,Nav, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector,useDispatch } from 'react-redux';


import { useEffect, useState } from "react";

function Show (){

  // const globalAnswer = useSelector((state) => state.quiz)

  const globalQuestion  =  useSelector((state) => state.question);
  


   
    const [answer,getAnswer] = useState({})
    const[summary,setSummary] = useState([])


   

    useEffect(() =>{
        questionAi()
    },[])


    const questionAi = () => {
        let v =  globalQuestion.question
        // let z = JSON.stringify(v)
        console.log(v)
        
        setSummary(v)
       
    }


  

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
                {/* <h6>{v.id}</h6>
                <h6 style={{color:"gray",marginTop:"15px"}}>User Answer :<span style={{color:'black',marginLeft:"10px"}}>{globalAnswer.answer.map((val) => val[v.id])}</span></h6> */}
            </div>      
        )} 
         
       
    </div>
}

export default Show