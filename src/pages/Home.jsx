import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function Home() {
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

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>My Profile</h3>
  {/* {JSON.stringify(inputValue)} */}

      <Row>

        <Col sm = "6">
               <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
            
            

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
                  <td>Language_known</td>
                  <td>{inputValue.Language_known}</td>
                </tr>
                <tr>
                  <td>hobbies</td>
                  <td>{inputValue.hobbies}</td>
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

        <Col sm = "6">
        <div>
        <h4>Course Details</h4>
        <Table striped bordered hover >
                  <thead>
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

                <div>
                    <h4>Work Experience Details</h4>
                    <Table striped bordered hover>
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
 
        </div>
        </Col>
       </Row>
    </div>

     
 ) }
export default Home;
