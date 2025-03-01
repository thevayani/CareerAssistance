import { Form, Container, Navbar, Button, Row, Col, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
// import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import react from '../assets/image.jpg';
import { setUserList } from '../redux/slices/userDetails';

function PersonalDetails() {

    const userGlobalState = useSelector((state) => state.userDetail)
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
        const initial = {fullname : "",fatherName:"",motherName:"",gender:"",dob:"",address:"",whether_employee:"",contact_number:""} 
        
        // if(userInputValue.fullname&&userInputValue.fatherName&&userInputValue.motherName&&userInputValue.gender&&userInputValue.dob&&userInputValue.address&&userInputValue.Language_known&&userInputValue.hobbies&&userInputValue.course&&userInputValue.workExperience&&userInputValue.whether_employee&&userInputValue.contact_number){
         if(initial){
            alert("please fill the Form")
        } 
        else{
            let userData = [...userGlobalState.userList, userInputValue]
            disPatch(setUserList(userData))
            console.log(userData)
            setuserInputValue(initial)
            // setuserInputValue({fullname : "",fatherName:"",motherName:"",gender:"",dob:"",address:"",whether_employee:"",contact_number:""})
        }
    }


    const addLanguage = (() => {
        let lang = [languageValue]
        let y = [...userInputValue.Language_known, ...lang]
        setuserInputValue({ ...userInputValue, Language_known: y })
        setLangauageValue("")

    })


    const addhobbies = () => {
        let x = [hobbiesValue]
        let y = [...userInputValue.hobbies, ...x]
        setuserInputValue({ ...userInputValue, hobbies: y })
        setHobbiesValue("")
    }

    const addWork_exp = () => {
        let workExp = [workExp_Value]
        let y = [...userInputValue.workExperience, ...workExp]
        setuserInputValue({ ...userInputValue, workExperience: y})

        setWorkExp_Value({companyName:"",institudeName:"",year:""})
    }

    const addCourseBtn = () =>{
        let education = [courseValue]
        let  y = [...userInputValue.course,...education]
        setuserInputValue({...userInputValue,course:y})
        setCourseValue({courseName:"",institudeName:"",year:"",place:""})
    }





    return <div style={
        {
            backgroundImage: `url(${react})`,
            backgroundSize: "cover",
            backgroundAttachment: "revert",
            backgroundRepeat: "no-repeat",
            height: "900px",
        }
    }>
        <Container>
            <h1 style={{
                textAlign: "center",
                textShadow: "5px 8px #888888",
                marginBottom: "0px",
                color: "white"
            }}>User Form</h1>
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
                                    value={userInputValue.fullname}
                                    onChange={(e) => setuserInputValue({ ...userInputValue, fullname: e.target.value })}
                                    placeholder="Enter full Name" />
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
                                    placeholder="Enter Father Name" />
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
                                    placeholder="Enter Mother Name" />
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
                                        onChange={(e) => setuserInputValue({ ...userInputValue, gender: e.target.value })} />
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
                                    placeholder="Leave a comment here" />
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
                                        placeholder="Hobbies" />
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
                                        placeholder="Language Known" />
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
                                        onChange={(e) => setWorkExp_Value({ ...workExp_Value, companyName: e.target.value })}
                                        style={{
                                            backgroundColor: "inherit",
                                            border: "1px solid black",
                                            color: "white"
                                        }}
                                        placeholder="Company Name" />
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
                                        placeholder="Institude Name" />
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
                                        placeholder="Year" />
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
                                        placeholder="Course Name" />
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
                                        placeholder="Institude Name" />
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
                                        placeholder="Year" />
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
                                        placeholder="place" />
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
                        </Form.Group>


                        <Form.Group as={Row} className="mt-3"   >
                            <Form.Label column sm="4">
                                <h5>Contact Number</h5>
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control
                                    type="number"
                                    value={userInputValue.contact_number}
                                    onChange={(e) => setuserInputValue({ ...userInputValue, contact_number: e.target.value })}
                                    style={{
                                        backgroundColor: "inherit",
                                        border: "1px solid black",
                                        color: "white"
                                    }}
                                    placeholder="Contact Number" />
                            </Col>
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