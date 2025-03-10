import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Row, Col, Button,Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import image from '../assets/image.jpg'


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
    navigate("/Ai")
  }

  const save = () => {
    alert("update")
    navigate("/")
  }

  return (
    <div style={
      {
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "1100px",
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
                    backgroundColor:"teal",
                  }
                }>
                  <tr>
                    <th style={{marginLeft:"29px"}}>Key</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody >
                  <tr>
                    <td>fullname</td>
                    <td>{inputValue.fullname}</td>
                  </tr>
                  <tr>
                    <td>fatherName</td>
                    <td>{inputValue.fatherName}</td>
                  </tr>
                  <tr>
                    <td>motherName</td>
                    <td>{inputValue.motherName}</td>
                  </tr>
                  <tr>
                    <td>dob</td>
                    <td>{inputValue.dob}</td>
                  </tr>
                  <tr>
                    <td>address</td>
                    <td>{inputValue.address}</td>
                  </tr>
                  <tr>
                    <td>whether_employee</td>
                    <td>{inputValue.whether_employee}</td>
                  </tr>
                  <tr>
                    <td>contact_number</td>
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
                backgroundColor:"white"
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
                        {inputValue.Language_known?.map((v) => <li>
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
              marginTop: "10px",
              marginBottom: "20px",
            }}>Work Experience</h5>
              <table striped bordered hover style={{
                marginLeft: "80px", marginTop: "5%", width: "80%",marginTop: "1%",
                borderRadius: "5px 5px 0 0", boxShadow: "0 0 10px black"
              }}>
                <thead>
                  <tr>
                    <th>companyName</th>
                    <th>instituteName</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  {inputValue.workExperience?.map((workExperience) => (
                    <tr >
                      <td>{workExperience.companyName}</td>
                      <td>{workExperience.institudeName}</td>
                      <td>{workExperience.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </Col>


          <Col sm="6">

            <h5 style={{
              marginTop: "10px",
              marginBottom: "20px",
            }}>Course Details</h5>
            <table striped bordered hover style={{
              marginLeft: "40px", marginTop: "1%", width: "80%",
              boxShadow: "0 0 10px black"
            }}>
              <thead style={{ textAlign: "left", fontWeight: "bold", padding: "1px" }}>
                <tr>
                  <th>Course Name</th>
                  <th>Institute Name</th>
                  <th>Year</th>
                  <th>Place</th>
                </tr>
              </thead>
              <tbody>
                {inputValue.course?.map((course) => (
                  <tr>
                    <td>{course.courseName}</td>
                    <td>{course.institudeName}</td>
                    <td>{course.year}</td>
                    <td>{course.place}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </Col>
        </Row>
      </div>



     <Row>
        <Col sm = "6">
                 <div>
            <h4>Question:</h4>
              <div style={{
                    marginLeft: "80px", marginTop: "20px", width: "80%",height:"300px",
                    borderRadius: "5px 5px 0 0", boxShadow: "0 0 10px black",backgroundColor:"white"

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
          <Col sm="6">
          <h4>Skils & Goals</h4>

          <div style={
            {
                marginLeft: "40px",
                marginTop: "20px", 
                width: "80%",
                height:"300px",
                borderRadius: "5px 5px 0 0", 
                boxShadow: "0 0 10px black",
                padding:"25px",
                backgroundColor:"white"
                }}>
                   <div style={{ marginLeft: "30%", marginTop: "20px", padding: "30px",listStyleType:"square" }}>
                      <h5>Goal</h5>
                        <ul style={{ listStyleType:"square"}} >
                            <li>{goalValue.goal}</li>
                        </ul>
        
                  
                        <div>
                          <h5>Skils</h5>
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
      </Row>           
      


      
      <div style={
                    {
                    textAlign:"center",
                    marginTop:"30px"
                    }
                  } >
      <Button variant="primary" onClick={submit}>Ask Guidance</Button>
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