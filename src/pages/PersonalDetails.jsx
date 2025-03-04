import { Form, Container, Button, Row, Col,Navbar,Nav, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
// import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import react from '../assets/image.jpg';
import { setUserList } from '../redux/slices/userDetails';
import axios from 'axios'

function PersonalDetails() {

    const userGlobalState = useSelector((state) => state.userDetail.userList)
    const disPatch = useDispatch()

    const [languageValue, setLangauageValue] = useState([]);
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
        const initial = { fullname: "", fatherName: "", motherName: "", gender: "", dob: "", address: "", whether_employee: "", contact_number: "" }

        // if(userInputValue.fullname&&userInputValue.fatherName&&userInputValue.motherName&&userInputValue.gender&&userInputValue.dob&&userInputValue.address&&userInputValue.Language_known&&userInputValue.hobbies&&userInputValue.course&&userInputValue.workExperience&&userInputValue.whether_employee&&userInputValue.contact_number){
        //     alert("please fill the Form")
        // } 
 
                let duplicate = false

                userGlobalState.forEach((v) => {
                    if (v.fullname == userInputValue.fullname) {
                        duplicate = true
                    }
                })

                if (duplicate) {
                    alert("its already here..")
                }
                // if(userInputValue.fullname.trim() ||
                //     userInputValue.fatherName.trim()||
                //     userInputValue.motherName.trim()||
                //     userInputValue.gender.trim()||
                //     userInputValue.dob.trim()||
                //     userInputValue.address.trim() ||
                //     userInputValue.contact_number.trim()){
                //     alert("please fill all details");
                //     return;
                // }
                else if (userInputValue.fullname == "" ||
                    userInputValue.fatherName == "" ||
                    userInputValue.motherName == "" ||
                    userInputValue.gender == "" ||
                    userInputValue.dob == "" ||
                    userInputValue.address == "" ||
                    userInputValue.contact_number == "") {
                    alert("please enter the value")
                }
                else {
                    // alert("Successfully submitted..")
                    // let userData = [...userGlobalState, userInputValue]
                    // disPatch(setUserList(userData))
                    // console.log(userData)
                    // setuserInputValue(initial)


                    const formData = new FormData();
                    formData.append("user_id",4);
                    formData.append("data",JSON.stringify(userInputValue))

                    axios.post('https://agaram.academy/api/b4/action.php?request=ai_carrier_update_user_profile',formData).then((res)=>{
                    console.log(res)
                    });

                }
    }

    const getApi = () => {

        axios.get('https://agaram.academy/api/b4/action.php?request=ai_carrier_get_user_profile&user_id=4').then((res)=>{
        let getData = res.data.data.data
        console.log(getData)
        setuserInputValue(JSON.parse(getData))
        setLangauageValue(JSON.parse(getData).Language_known)
        setHobbiesValue(JSON.parse(getData).hobbies)
        // setCourseValue(JSON.parse(getData).userInputValue.course)
        // setWorkExp_Value(JSON.parse(getData).userInputValue.workExperience)
        });

    }


    const addLanguage = (() => {
        if (languageValue == "") {
            alert("please enter the value")
        } else {
            let lang = [languageValue]
            let y = [...userInputValue.Language_known, ...lang]
            setuserInputValue({ ...userInputValue, Language_known: y })
            setLangauageValue("")
        }
    })


    const addhobbies = () => {
        if (hobbiesValue == "") {
            alert("please enter the value")
        } else {
            let x = [hobbiesValue]
            let y = [...userInputValue.hobbies,...x]
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
            let y = [...userInputValue.workExperience,...workExp]
            setuserInputValue({ ...userInputValue, workExperience: y })

            setWorkExp_Value({ companyName: "", institudeName: "", year: "" })
        }
    }


    const addCourseBtn = () => {
        if (courseValue.courseName == "" || courseValue.institudeName == "" || courseValue.year == "" || courseValue.place == "") {
            alert("please enter the value")
        } else {
            let education = [courseValue]
            let y = [...userInputValue.course,...education]
            setuserInputValue({ ...userInputValue, course: y })

            setCourseValue({ courseName: "", institudeName: "", year: "", place: "" })
        }
    }





    return <div style={
        {
            backgroundImage: `url(${react})`,
            backgroundSize: "cover",
            backgroundAttachment: "revert",
            backgroundRepeat: "no-repeat",
            height: "1400px",
        }
    }>
        <Navbar bg='dark' data-bs-theme="dark">
        <Container className='mt-25'>
            <Navbar.Brand href="#home"><h1>User Form</h1></Navbar.Brand>
            <Nav className="ms-auto">
                <Nav.Link href="/updateProfile"><h4>Update profile</h4></Nav.Link>
            </Nav>  
        </Container>
        </Navbar>

        <Container>
            {/* <h1 style={{
                textAlign: "center",
                textShadow: "5px 8px #888888",
                marginBottom: "0px",
                color: "white"
            }}>User Form</h1> */}
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
                                <h5>Full Name</h5>
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
                                    onChange={(e) => setuserInputValue({ ...userInputValue, fullname: e.target.value })}
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
                                    onChange={(e) => setuserInputValue({ ...userInputValue, fatherName: e.target.value })}
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
                                    onChange={(e) => setuserInputValue({ ...userInputValue, motherName: e.target.value })}
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
                                    onChange={(e) => setuserInputValue({ ...userInputValue, address: e.target.value })}
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
                                        onChange={(e) => setHobbiesValue(e.target.value)}
                                        value={hobbiesValue}
                                        style={{
                                            backgroundColor: "inherit",
                                            border: "1px solid black", color: "white"
                                        }}
                                        placeholder="Hobbies" 
                                        required />
                                       
                                         
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
                                        onChange={(e) => setLangauageValue(e.target.value)}
                                        value={languageValue}
                                        style={{
                                            backgroundColor: "inherit",
                                            border: "1px solid black",
                                            color: "white"
                                        }}
                                        placeholder="Language Known" 
                                        required />
                                        <ul style={{marginTop:"20px"}}>
                                             <li>{languageValue}</li>
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
                                    onChange={(e) => setuserInputValue({ ...userInputValue, contact_number: e.target.value})}
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
                                        onChange={(e) => setWorkExp_Value({ ...workExp_Value,companyName: e.target.value })}
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
                                        onChange={(e) => setWorkExp_Value({ ...workExp_Value, institudeName: e.target.value })}
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
                                        onChange={(e) => setWorkExp_Value({ ...workExp_Value, year: e.target.value })}
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
                            <Table  striped bordered hover style={{marginTop:"20px",borderRadius:"10px"}}>
                                <thead>
                                    <tr style={{backgroundColor:"inherit"}}>
                                        <th>Company Name</th>
                                        <th>Institude name</th>
                                        <th>Year.of.year</th>
                                     </tr>
                                </thead>
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
                                        onChange={(e) => setCourseValue({ ...courseValue, courseName: e.target.value })}
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
                                        onChange={(e) => setCourseValue({ ...courseValue, institudeName: e.target.value })}
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
                                        onChange={(e) => setCourseValue({ ...courseValue, year: e.target.value })}
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
                                        onChange={(e) => setCourseValue({ ...courseValue, place: e.target.value })}
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
                            <Table  striped bordered hover style={{marginTop:"20px",borderRadius:"10px"}}>
                                <thead>
                                    <tr style={{backgroundColor:"inherit"}}>
                                        <th>Course Name</th>
                                        <th>Institude name</th>
                                        <th>year</th>
                                        <th>Place</th>
                                     </tr>
                                </thead>
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