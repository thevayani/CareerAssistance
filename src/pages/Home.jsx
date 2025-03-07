import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState({})


  const getApi = () => {
    axios.get('https://agaram.academy/api/b4/action.php?request=ai_carrier_get_user_profile&user_id=4')
      .then((res) => {
        if (res.data.data.data) {
          const getData = JSON.parse(res.data.data.data);
          console.log(getData);
          setInputValue(getData);
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
    <div>
      <h3 style={{ textAlign: "center" }}>My Profile</h3>
      <div>
        <Row>
          <Col sm="6">
            <div style={{ width: "80%", height: "100%" }}>
              <Table striped bordered hover style={{
                borderCollapse: "collapse", marginLeft: "80px", marginTop: "50px",
                borderRadius: "5px 5px 0 0", boxShadow: "0 0 10px black"
              }}>
                <thead >

                  <tr>
                    <th>Key</th>
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
              </Table>
            </div>
          </Col>


          <Col sm="6">
            <div>
              <div style={{
                marginLeft: "7%", width: "80%", height: "325px", borderRadius: "1px",
                boxShadow: "0 0 10px black"
              }}>
                <div style={{ marginLeft: "30%", marginTop: "50px", padding: "30px" }}>
                  <Col sm="3">
                    <div>
                      <h4>Hobbies</h4>
                      <ul>
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
                      <ul>
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
          <Col sm= "6">
          <h5 style={{
            marginTop:"10px",
            marginBottom:"20px",
          }}>Course Details</h5>
              <Table striped bordered hover style={{
                 marginLeft: "80px", marginTop: "1%", width: "80%",
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
              </Table>
          </Col>
            <Col sm="6">
                   <div>
                  <h5>Work Experience Details</h5>
                  <Table striped bordered hover style={{
                    marginLeft: "40px", marginTop: "5%", width: "80%",
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
                  </Table>
              </div>
            </Col>
        </Row>
      </div>
      <Button variant="primary" onClick={submit}>Ask Guidance</Button>
      <div>
        <Button variant="dark" onClick={save}>Update</Button>
      </div>
    </div>



  )
}
export default Home;
