


import { Form, Container, Button, Row, Col,Navbar,Nav, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CloseButton from 'react-bootstrap/CloseButton';
import { CIcon } from '@coreui/icons-react';
import { cilTrash } from '@coreui/icons';



import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import react from '../assets/image.jpg';
import axios from 'axios'

function PersonalDetails() {

    // const navigate =  useNavigate()
    
    const [languageValue, setLanguageValue] = useState([]);
    const [hobbiesValue, setHobbiesValue] = useState([]);
    const [workExp_Value, setWorkExp_Value] = useState({
        companyName: "",
        institudeName: "",
        year: ""
    });
  
    const [courseValue, setCourseValue] = useState({
        courseName: "",
        institudeName: "",
        year: "",
        place: ""
    });

    useEffect (() =>{
        getApi()
    },[])

    const [userInputValue, setuserInputValue] = useState(
        {
            fullname: "",
            fatherName: "",
            motherName: "",
            gender: "",
            dob: "",
            address: "",
            Language_known: [],
            hobbies: [],
            course: [],
            workExperience: [],
            whether_employee: "",
            contact_number: "",
        }
    );


    const submitBtn = () => {

                // let fullname = userInputValue.fullname.trim()
                // let fatherName =userInputValue.fatherName.trim()
                // let motherName =  userInputValue.motherName.trim()
                // let address =  userInputValue.address.trim()
                // let contact_number  = userInputValue.contact_number.trim()
                

       
                if (userInputValue.fullname == "" ||
                    userInputValue.fatherName == "" ||
                    userInputValue.motherName == "" ||
                    userInputValue.gender == "" ||
                    userInputValue.dob == "" ||
                    userInputValue.address == "" ||
                    userInputValue.contact_number == "") {
                    alert("please enter the value")
                }
                else {
                  
                    const formData = new FormData();
                    formData.append("user_id",4);
                    formData.append("data",JSON.stringify(userInputValue))

                    axios.post('https://agaram.academy/api/b4/action.php?request=ai_carrier_update_user_profile',formData).then((res)=>{
                        console.log(res)
                    });
                    // navigate("/home")
                }
    }

    const getApi = () => {

        axios.get('https://agaram.academy/api/b4/action.php?request=ai_carrier_get_user_profile&user_id=4').then((res)=>{
        let getData = res.data.data.data
        console.log(getData)
        setuserInputValue(JSON.parse(getData))
        
        });
    }


    const addLanguage = (() => {
       
        if (languageValue == "") {
            alert("please enter the value")
        } else {
            let lang = [languageValue]
            let y = [...userInputValue?.Language_known, ...lang]
            setuserInputValue({ ...userInputValue, Language_known: y })
            setLanguageValue("")
        }
    })


    const addhobbies = () => {
      
        if (hobbiesValue == "") {
            alert("please enter the value")
        } else {
            let x = [hobbiesValue]
            let y = [...userInputValue?.hobbies,...x]
            setuserInputValue({...userInputValue, hobbies: y})
            setHobbiesValue("")
        }
    }

    const addWork_exp = () => {
       
        if (workExp_Value.companyName == "" || workExp_Value.institudeName == "" || workExp_Value.year == "") {
            alert("please enter the value")
        }
        else {
            let workExp = [workExp_Value]
            let y = [...userInputValue?.workExperience,...workExp]
            setuserInputValue({ ...userInputValue, workExperience: y })

            setWorkExp_Value({ companyName: "", institudeName: "", year: "" })
        }
    }


    const addCourseBtn = () => {
       

        if (courseValue.courseName == "" || courseValue.institudeName == "" || courseValue.year == "" || courseValue.place == "") {
            alert("please enter the value")
        } else {
            let education = [courseValue]
            let y = [...userInputValue?.course,...education]
            setuserInputValue({ ...userInputValue, course: y })

            setCourseValue({ courseName: "", institudeName: "", year: "", place: "" })
        }
    }

    const deleteLanguage = (v) =>{
        alert("Do you want to delete?")
        let del = userInputValue.Language_known.filter((items) => items != v)
        setuserInputValue({...userInputValue,Language_known:del})
    }

    const deletehobbies =((v) =>{
        alert("Do you want to delete?")
        let del = userInputValue.hobbies.filter((items) => items != v)
        setuserInputValue({...userInputValue,hobbies:del})
    })


    const deleteWorkExp =((v) =>{
        alert("Do you want to delete?")
        let del = userInputValue.workExperience.filter((items) => items != v)
        setuserInputValue({...userInputValue,workExperience:del})
    })

    const deletecourse =((v) =>{
        alert("Do you want to delete?")
        let del = userInputValue.course.filter((items) => items != v)
        setuserInputValue({...userInputValue,course:del})
    })


    return <div style={
        {
            backgroundImage: `url(${react})`,
            backgroundSize: "cover",
            backgroundAttachment: "revert",
            backgroundRepeat: "no-repeat",
            height: "1300px",
        }
    }>
        <Navbar bg='dark' data-bs-theme="dark" sticky>
        <Container className='mt-25'>
            <Navbar.Brand href="#home" style={{textAlign:"center",marginLeft:"440px"}}><h2>User Details</h2></Navbar.Brand>
           
        </Container>
        </Navbar>

        <Container>
            <Form style={
                {
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    WebkitBackdropFilter: "blur(5px)",
                    backdropFilter: "blur(5px)",
                    marginTop: "20px",
                    padding: "30px",
                    borderRadius: "45px",
                    marginRight: "20px",
                    boxShadow: "6px 8px rgb(247, 192, 11)"
                }
            }>
                <Row>
                    <Col sm="6">
                        <Form.Group as={Row} className="mb-3"   >
                            <Form.Label column sm="3">
                                Full Name
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control
                                    style={{
                                        backgroundColor: "inherit",
                                        border: "1px solid black",
                                        color: "white"
                                    }}
                                    type="text"
                                    required 
                                    value={userInputValue.fullname}
                                    onChange={(e) => setuserInputValue({ ...userInputValue, fullname: e.target.value.trim()})}
                                    placeholder="Enter full Name"
                                   />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3"   >
                            <Form.Label column sm="3">
                                <h5>Father Name</h5>
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control
                                    style={{
                                        backgroundColor: "inherit",
                                        border: "1px solid black",
                                        color: "white"
                                    }}
                                    type="text"
                                    value={userInputValue.fatherName}
                                    onChange={(e) => setuserInputValue({ ...userInputValue, fatherName: e.target.value.trim() })}
                                    placeholder="Enter Father Name" 
                                    required />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3"   >
                            <Form.Label column sm="3">
                                <h5>Mother Name</h5>
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control
                                    style={{
                                        backgroundColor: "inherit",
                                        border: "1px solid black",
                                        color: "white"
                                    }}
                                    type="text"
                                    value={userInputValue.motherName}
                                    onChange={(e) => setuserInputValue({ ...userInputValue, motherName: e.target.value.trim() })}
                                    placeholder="Enter Mother Name" 
                                    required />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-4">
                            <Row>
                                <Form.Label column sm="3">
                                    <h5>Gender</h5>
                                </Form.Label>
                                <Col sm="2" className="mt-2">
                                    <Form.Check type="radio"
                                        label="Male"
                                        value="male"
                                        checked={userInputValue.gender == "male"}
                                        onChange={(e) => setuserInputValue({ ...userInputValue, gender: e.target.value })} 
                                         />
                                </Col>
                                <Col sm="2" className="mt-2">
                                    <Form.Check type="radio"
                                        label="Female"
                                        value="female"
                                        checked={userInputValue.gender == "female"}
                                        onChange={(e) => setuserInputValue({ ...userInputValue, gender: e.target.value })} />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-4"   >
                            <Form.Label column sm="3">
                                <h5>DOB</h5>
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control
                                    type='date'
                                    onChange={(e) => setuserInputValue({ ...userInputValue, dob: e.target.value })}
                                    value={userInputValue.dob}
                                    style={{
                                        backgroundColor: "inherit",
                                        border: "1px solid black", color: "whitesmoke"
                                    }}
                                    placeholder="Enter full Name" />
                            </Col>
                        </Form.Group>
                        


                        <Form.Group as={Row} className="mb-3"   >
                            <Form.Label column sm="3">
                                <h5>Address</h5>
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control as="textarea"
                                    style={{
                                        backgroundColor: "inherit",
                                        border: "1px solid black",
                                        color: "white",
                                        height: "70px"
                                    }}
                                    onChange={(e) => setuserInputValue({ ...userInputValue, address: e.target.value.trim() })}
                                    value={userInputValue.address}
                                    placeholder="Leave a comment here" 
                                    required />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Row>
                                <Form.Label column sm="3">
                                    <h5>Hobbies</h5>
                                </Form.Label>
                                <Col sm="5">
                                    <Form.Control
                                        type="text"
                                        onChange={(e) => setHobbiesValue(e.target.value.trim())}
                                        value={hobbiesValue}
                                        style={{
                                            backgroundColor: "inherit",
                                            border: "1px solid black", color: "white"
                                        }}
                                        placeholder="Hobbies" 
                                        required />
                                      
                                            <ul style={{marginTop:"10px"}}>
                                            {userInputValue.hobbies?.map((v) =>
                                                    <li>{v}<CloseButton 
                                                    onClick={() => deletehobbies(v)}
                                                    style={
                                                            {
                                                                fontSize:"12px",
                                                                marginLeft:"10px",
                                                                backgroundColor:"Background"
                                                            }
                                                        } />
                                                </li>)}
                                            </ul>
                                         
                                </Col>
                                <Col sm="4">
                                    <Button
                                        onClick={addhobbies}
                                        style={{
                                            backgroundColor: "inherit",
                                            color: "black",
                                            border: "1px solid black"
                                        }}>
                                        Add
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Row>
                                <Form.Label column sm="3">
                                    <h5>Language</h5>
                                </Form.Label>
                                <Col sm="5">
                                    <Form.Control
                                        type="text"
                                        onChange={(e) => setLanguageValue(e.target.value.trim())}
                                        value={languageValue}
                                        style={{
                                            backgroundColor: "inherit",
                                            border: "1px solid black",
                                            color: "white"
                                        }}
                                        placeholder="Language Known" 
                                        required />
                                        <ul style={{marginTop:"8px"}}>
                                            {userInputValue.Language_known.map((v) =>
                                                <li>{v}<CloseButton 
                                                onClick={() => deleteLanguage(v)}
                                                style={
                                                        {
                                                            fontSize:"12px",
                                                            marginLeft:"10px",
                                                            backgroundColor:"Background"
                                                        }
                                                    } />
                                            </li>)}
                                        </ul>
                                </Col>
                                <Col sm="4">
                                    <Button
                                        onClick={addLanguage}
                                        style={{
                                            backgroundColor: "inherit",
                                            color: "black",
                                            border: "1px solid black"
                                        }}>
                                        Add
                                    </Button>
            
                                </Col>
                                
                            </Row>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Row>
                                <Form.Label column sm="4">
                                    <h5>whether employee</h5>
                                </Form.Label>
                                <Col sm="2" className="mt-2">
                                    <Form.Check type="radio"
                                        label="Yes"
                                        value="yes"
                                        checked={userInputValue.whether_employee == "yes"}
                                        onChange={(e) => setuserInputValue({ ...userInputValue, whether_employee: e.target.value })}
                                    />
                                </Col>
                                <Col sm="2" className="mt-2">
                                    <Form.Check type="radio"
                                        label="No"
                                        value="no"
                                        checked={userInputValue.whether_employee == "no"}
                                        onChange={(e) => setuserInputValue({ ...userInputValue, whether_employee: e.target.value })}
                                    />

                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group as={Row} className="mt-3"   >
                            <Form.Label column sm="3">
                                <h5>Contact Number</h5>
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control
                                    type="number"
                                    value={userInputValue.contact_number}
                                    onChange={(e) => setuserInputValue({ ...userInputValue, contact_number: e.target.value.trim()})}
                                    style={{
                                        backgroundColor: "inherit",
                                        border: "1px solid black",
                                        color: "white"
                                    }}
                                    placeholder="Contact Number"
                                    required  />
                            </Col>
                        </Form.Group>
                    </Col>


                    <Col sm="6">

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="5">
                                <h5>Work Experience</h5>
                            </Form.Label>
                            <Row style={{ marginTop: "15px" }}>
                                <Col sm="4">
                                    <p>
                                        <Form.Label style={{ marginTop: "10px", marginLeft: "20px" }}>
                                            Company Name
                                        </Form.Label>
                                    </p>
                                </Col>
                                <Col sm="5">
                                    <Form.Control
                                        type="text"
                                        value={workExp_Value.companyName}
                                        onChange={(e) => setWorkExp_Value({ ...workExp_Value,companyName: e.target.value.trim() })}
                                        style={{
                                            backgroundColor: "inherit",
                                            border: "1px solid black",
                                            color: "white"
                                        }}
                                        placeholder="Company Name" 
                                        required />
                                </Col>
                            </Row>

                            <Row>
                                <Col sm="4">
                                    <p>
                                        <Form.Label style={{ marginTop: "10px", marginLeft: "20px" }}>
                                            Institude Name
                                        </Form.Label>
                                    </p>
                                </Col>
                                <Col sm="5">
                                    <Form.Control
                                        type="text"
                                        value={workExp_Value.institudeName}
                                        onChange={(e) => setWorkExp_Value({ ...workExp_Value, institudeName: e.target.value.trim() })}
                                        style={{
                                            backgroundColor: "inherit",
                                            border: "1px solid black",
                                            color: "white"
                                        }}
                                        placeholder="Institude Name" 
                                        required />
                                </Col>
                            </Row>

                            <Row>
                                <Col sm="4">
                                    <p>
                                        <Form.Label style={{ marginTop: "10px", marginLeft: "20px" }}>
                                            Year.Of.Exp
                                        </Form.Label>
                                    </p>
                                </Col>
                                <Col sm="3">
                                    <Form.Control
                                        onChange={(e) => setWorkExp_Value({ ...workExp_Value, year: e.target.value.trim() })}
                                        type="number"
                                        value={workExp_Value.year}
                                        style={{
                                            backgroundColor: "inherit",
                                            border: "1px solid black",
                                            color: "white"
                                        }}
                                        placeholder="Year" 
                                        required />
                                </Col>
                            </Row>

                            <Col sm="3">
                                <Button
                                    onClick={addWork_exp}
                                    style={{
                                        backgroundColor: "inherit",
                                        color: "black",
                                        border: "1px solid black",
                                        marginLeft: "18px"
                                    }}>
                                    Add
                                </Button>
                            </Col>
                            <Table   striped="columns" bordered hover  style={{marginTop:"20px",borderRadius:"10px",backgroundColor:"inherit"}}>
                                <thead style={{backgroundColor:"inherit"}}>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Company Name</th>
                                        <th>Institude name</th>
                                        <th>Year.of.year</th>
                                        <th>Delete</th>
                                     </tr>
                                </thead>
                                <tbody>
                                    {userInputValue.workExperience?.map((v,i) => <tr>
                                        <td>{i+1}</td>
                                        <td>{v.companyName}</td>
                                        <td>{v.institudeName}</td>
                                        <td>{v.year}</td>
                                        <td><CIcon icon={cilTrash} onClick={() => deleteWorkExp(v)} size="sm" style={{width:"30px",marginLeft:"9px"}} /></td>
                                    </tr>)}
                                </tbody>
                            </Table>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="5">
                                <h5>Course details</h5>
                            </Form.Label>
                            <Row style={{ marginTop: "15px" }}>
                                <Col sm="4">
                                    <p>
                                        <Form.Label style={{ marginTop: "10px", marginLeft: "20px" }}>
                                            Course Name
                                        </Form.Label>
                                    </p>
                                </Col>
                                <Col sm="5">
                                    <Form.Control
                                        type="text"
                                        value={courseValue.courseName}
                                        onChange={(e) => setCourseValue({ ...courseValue, courseName: e.target.value.trim() })}
                                        style={{
                                            backgroundColor: "inherit",
                                            border: "1px solid black",
                                            color: "white"
                                        }}
                                        placeholder="Course Name" 
                                        required />
                                </Col>
                            </Row>

                            <Row>
                                <Col sm="4">
                                    <p>
                                        <Form.Label style={{ marginTop: "10px", marginLeft: "20px" }}>
                                            Institude Name
                                        </Form.Label>
                                    </p>
                                </Col>
                                <Col sm="5">
                                    <Form.Control
                                        type="text"
                                        value={courseValue.institudeName}
                                        onChange={(e) => setCourseValue({ ...courseValue, institudeName: e.target.value.trim() })}
                                        style={
                                            {
                                                backgroundColor: "inherit",
                                                border: "1px solid black",
                                                color: "white"
                                            }
                                        }
                                        placeholder="Institude Name" 
                                        required />
                                </Col>
                            </Row>

                            <Row>
                                <Col sm="4">
                                    <p>
                                        <Form.Label style={{ marginTop: "10px", marginLeft: "20px" }}>
                                            Year
                                        </Form.Label>
                                    </p>
                                </Col>
                                <Col sm="3">
                                    <Form.Control
                                        type="number"
                                        value={courseValue.year}
                                        onChange={(e) => setCourseValue({ ...courseValue, year: e.target.value.trim() })}
                                        style={
                                            {
                                                backgroundColor: "inherit",
                                                border: "1px solid black",
                                                color: "white"
                                            }
                                        }
                                        placeholder="Year" 
                                        required />
                                </Col>
                            </Row>


                            <Row>
                                <Col sm="4">
                                    <p>
                                        <Form.Label style={{ marginTop: "10px", marginLeft: "20px" }}>
                                            Place
                                        </Form.Label>
                                    </p>
                                </Col>
                                <Col sm="5">
                                    <Form.Control
                                        type="text"
                                        value={courseValue.place}
                                        onChange={(e) => setCourseValue({ ...courseValue, place: e.target.value.trim() })}
                                        style={
                                            {
                                                backgroundColor: "inherit",
                                                border: "1px solid black",
                                                color: "white"
                                            }
                                        }
                                        placeholder="place" 
                                         required />

                                </Col>
                            </Row>


                            <Col sm="3">
                                <Button
                                    onClick={addCourseBtn}
                                    style={{
                                        backgroundColor: "inherit",
                                        color: "black",
                                        border: "1px solid black",
                                        marginLeft: "18px"
                                    }}>
                                    Add
                                </Button>
                            </Col>

                        <Table striped="columns" bordered hover  style={{marginTop:"20px",borderRadius:"20px",backgroundColor:"inherit"}}>
                                <thead >
                                    <tr>
                                        <th>S.No</th>
                                        <th>Company Name</th>
                                        <th>Institude name</th>
                                        <th>Year.of.year</th>
                                        <th>Place</th>
                                        <th>Delete</th>
                                     </tr>
                                </thead>
                                <tbody>
                                    {userInputValue.course?.map((v,i) => <tr>
                                        <td>{i+1}</td>
                                        <td>{v.courseName}</td>
                                        <td>{v.institudeName}</td>
                                        <td>{v.year}</td>
                                        <td>{v.place}</td>
                                        <td><CIcon icon={cilTrash} onClick={() => deletecourse(v)} size="sm" style={{width:"30px",marginLeft:"9px"}} /></td>
                                    </tr>)}
                                </tbody>
                            </Table>
                                        
                        </Form.Group>

                    </Col>
                </Row>


                <Button variant="primary"
                    onClick={submitBtn}
                    style={{
                        padding: "10px",
                        width: "120px",
                        textAlign: "center",
                        marginTop: "5px"
                    }}>
                    Submit
                </Button>

            </Form>
        </Container>

    </div>
}

export default PersonalDetails