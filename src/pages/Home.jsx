import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Row, Col, Button,Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import image from '../assets/home1.avif'


function Home() {
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState({})
  const [goalValue, setGoalValue] = useState({})


  const getApi = () => {
    axios.get('https://agaram.academy/api/b4/action.php?request=ai_carrier_get_user_profile&user_id=4')
      .then((res) => {
        if (res.data.data.data) {
          const getData = JSON.parse(res.data.data.data);
          console.log(getData);
          setInputValue(getData);
        }
      })

    axios.get('https://agaram.academy/api/b4/action.php?request=ai_carrier_get_user_goals&user_id=4')
      .then((res) => {
        if (res.data.data.data) {
          const getDatas = JSON.parse(res.data.data.data);
          console.log(getDatas);
          setGoalValue(getDatas);
        }
      })
  }

  useEffect(() => {
    getApi();
  }, []);

  const submit = () => {
    alert("Ask Guidance")
    navigate("/careerAi")
  }

  const save = () => {
    alert("update")
    navigate( "/details")
  }

  return (
    <div style={
      {
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "1200px",
      }}>
      <h3 style={{ textAlign: "center" }}>My Profile</h3>

      <div>

        <Row>
          <Col sm="6">
                <h4>Personal Details</h4>
            <div>
              <table style={{
                borderCollapse: "collapse", marginLeft: "80px", marginTop: "20px",
                borderRadius: "5px 5px 0 0", boxShadow: "0 0 10px black",
                backgroundColor:"inherit", width: "80%", height: "325px"
              }}>
                <thead style={
                  {
                    backgroundColor:"",
                  }
                }>
                  <tr>
                    <th style={{padding:"10px"}}>Key</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody >
                  <tr>
                    <td style={{padding:"10px"}}>fullname</td>
                    <td>{inputValue.fullname}</td>
                  </tr>
                  <tr>
                    <td  style={{padding:"10px"}}>fatherName</td>
                    <td>{inputValue.fatherName}</td>
                  </tr>
                  <tr>
                    <td  style={{padding:"10px"}}>motherName</td>
                    <td>{inputValue.motherName}</td>
                  </tr>
                  <tr>
                    <td  style={{padding:"10px"}}>dob</td>
                    <td>{inputValue.dob}</td>
                  </tr>
                  <tr>
                    <td  style={{padding:"10px"}}>address</td>
                    <td>{inputValue.address}</td>
                  </tr>
                  <tr>
                    <td  style={{padding:"10px"}}>whether_employee</td>
                    <td>{inputValue.whether_employee}</td>
                  </tr>
                  <tr>
                    <td  style={{padding:"10px"}}>contact_number</td>
                    <td>{inputValue.contact_number}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>


          <Col sm="6">
          
          <div>
          <h4>Hobbies & Languages</h4>
              <div style={{
                 marginLeft: "40px", width: "80%", height: "325px", borderRadius: "1px",
                boxShadow: "0 0 10px black",
                backgroundColor:"inherit"
              }}>
                
                <div style={{ marginLeft: "30%", marginTop: "20px", padding: "30px" }}>
                  
                  <Col sm="3">
                    <div>
                      <h4>Hobbies</h4>
                      <ul style={{listStyleType:"square"}}>
                        {inputValue.hobbies?.map((v) => <li>
                          {v}
                        </li>
                        )}
                      </ul>
                    </div>
                  </Col>
                  

                  <Col sm="3">
                    <div>
                      <h4>Language</h4>
                      <ul style={{listStyleType:"square"}}>
                        {inputValue.languageKnown?.map((v) => <li>
                          {v}
                        </li>
                        )}
                      </ul>
                    </div>
                  </Col>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm="6">
          <div>
          <h5 style={{
            marginTop:"20px",
              marginBottom: "20px",
            }}>Work Experience</h5>
              <table striped bordered hover style={{
                marginLeft: "80px", marginTop: "5%", width: "80%",
                borderRadius: "5px 5px 0 0", boxShadow: "0 0 10px black",padding:"28px"
              }}>
                <thead style={
                  {
                    backgroundColor:"",
                  }
                }>
                  <tr>
                    <th style={{padding:"15px"}}>companyName</th>
                    <th style={{padding:"15px"}}>instituteName</th>
                    <th style={{padding:"15px"}}>Year</th>
                  </tr>
                </thead>
                <tbody>
                  {inputValue.workExperience?.map((workExperience) => (
                    <tr>
                      <td style={{padding:"15px"}}>{workExperience.companyName}</td>
                      <td style={{padding:"15px"}}>{workExperience.institudeName}</td>
                      <td style={{padding:"15px"}}>{workExperience.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </Col>


          <Col sm="6">

            <h5 style={{
              marginTop: "20px",
              marginBottom: "20px",
            }}>Course Details</h5>
            <table striped bordered hover style={{
              marginLeft: "40px", marginTop: "1%", width: "80%",
              boxShadow: "0 0 10px black"
            }}>
              <thead style={{ textAlign: "left", fontWeight: "bold", padding: "1px", backgroundColor:""}}>
                <tr >
                  <th style={{padding:"10px"}}>Course Name</th>
                  <th style={{padding:"10px"}}>Institute Name</th>
                  <th style={{padding:"10px"}}>Year</th>
                  <th style={{padding:"10px"}}>Place</th>
                </tr>
              </thead>
              <tbody>
                {inputValue.course?.map((course) => (
                  <tr>
                    <td style={{padding:"10px"}}>{course.courseName}</td>
                    <td style={{padding:"10px"}}>{course.institudeName}</td>
                    <td style={{padding:"10px"}}>{course.year}</td>
                    <td style={{padding:"10px"}}>{course.place}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </Col>
        </Row>
      </div>



     <Row>
        
          <Col sm="6">
          <h4 style={{marginTop:"20px"}}>Skils & Goals</h4>

          <div style={
            {
                marginLeft: "80px",
                marginTop: "20px", 
                width: "70%",
                maxHeight:"350px",
                borderRadius: "5px 5px 0 0", 
                boxShadow: "0 0 10px black",
                padding:"10px",
                  backgroundColor:"inherit"
                }}>
                   <div style={{ marginLeft: "30%",  padding: "30px",listStyleType:"square" }}>
                      <h5>Goal</h5>
                        <ul style={{ listStyleType:"square"}} >
                            <li>{goalValue.goal}</li>
                        </ul>
        
                  
                        <div>
                          <h5>Skills</h5>
                              <ul style={{ listStyleType:"square"}} >
                                  {goalValue.skill?.map((v) => <li>
                                    {v}
                                  </li>
                                  )}
                            </ul>
                        </div>
                     </div>
                  </div>
          </Col>

          <Col sm = "6">
                 <div>
            <h4 style={{marginTop:"20px"}}>Question:</h4>
              <div style={{
                    marginLeft: "40px", marginTop: "20px", width: "80%",height:"300px",
                    borderRadius: "5px 5px 0 0", boxShadow: "0 0 10px black",backgroundColor:"inherit"

                  }}>
                  {goalValue.questions?.map((v) => 
                  <ul>
                    <h6><li style={{listStyleType:"none",color:"black",textAlign:"center"}}>
                      {v.question}
                    </li></h6>
                    <li style={{listStyleType:"none",textAlign:"center"}}>
                      {v.answer}
                      </li>
                  </ul>
                  )}         
                <ul>
                  {goalValue.answer?.map((v,index) => <li>
                    {v}
                  </li>
                  )}
                </ul>  
              </div>
            </div>
        </Col>
      </Row>           
      


      
      <div style={
                    {
                    textAlign:"center",
                    marginTop:"30px"
                    }
                  } >
      <Button variant="success" onClick={submit}>Ask Guidance</Button>
        <Button style={
                        {
                        marginLeft:"20px"
                        }
                     } variant="dark" onClick={save}>Update</Button>
      </div>
    </div>
  )
}
export default Home;