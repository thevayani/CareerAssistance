import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Table, Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react";
import axios from 'axios';



function Resume() {
   

    const [skillValue, setSkillValue] = useState([])
    const [languageKnownValue, setLanguageKnownValue] = useState([])
    const [hobbiesValue, setHobbiesValue] = useState([])
    const [resumeData, setResumeData] = useState()


    const [courseValue, setCourseValue] = useState({
        courseName: "",
        institude: "",
        year: "",
        place: ""
    })

    const [workExp_Value, setWorkExp_Value] = useState({
        company_name: "",
        role: "",
        year: "",
        place: ""
    })

    const [project, setProject] = useState({
        project_title: "",
        project_description: ""
    })

    const [certification, setCertification] = useState({
        certification_name: "",
        institute: "",
        duration: "",
        place: ""
    })

    const [inputValue, setInputValue] = useState({
        fullname: "",
        email: "",
        objective: "",
        fatherName: "",
        motherName: "",
        gender: "",
        dob: "",
        address: "",
        nationality: "",
        languageKnown: [],
        skills: [],
        hobbies: [],
        course: [],
        certification: [],
        workExperience: [],
        project: [],
        marital_status: "",
        contact_number: ""
    })
    useEffect(() => {
        getApi()
    }, [])

   

    const addlanguageValue = () => {
        let a = [languageKnownValue]
        let b = [...inputValue.languageKnown, ...a]
        setInputValue({ ...inputValue, languageKnown: b })
        setLanguageKnownValue("")
    }
    const deletelanguage = (v) => {
        let del = inputValue.languageKnown.filter((items) => items != v)
        setInputValue({ ...inputValue, languageKnown: del })
    }



    const addskillValue = () => {
        let b = [...inputValue.skills, skillValue]
        setInputValue({ ...inputValue, skills: b })
        setSkillValue("")
    }
    const deleteskill = (v) => {
        let del = inputValue.skills.filter((items) => items != v)
        setInputValue({ ...inputValue, skills: del })
    }


    const addhobbiesValue = () => {
        let a=[hobbiesValue]
        let b = [...inputValue.hobbies, ...a]
        setInputValue({ ...inputValue, hobbies: b })
        setHobbiesValue("")
    }
    const deletehobbies = (v) => {
        let del = inputValue.hobbies.filter((items) => items != v)
        setInputValue({ ...inputValue, hobbies: del })
    }


    const addcourseValue = () => {
        let a=[courseValue]
        let b = [...inputValue.course, ...a]
        setInputValue({ ...inputValue, course: b })
        setCourseValue({
            courseName: "",
            institude: "",
            year: "",
            place: ""
        })
    }
    const deleteEdu = (v) => {
        let del = inputValue.course.filter((items) => items != v)
        setInputValue({ ...inputValue, course: del })
    }

    const addcertification = () => {
        let a=[certification]
        let b = [...inputValue.certification, ...a]
        setInputValue({ ...inputValue, certification: b })
        setCertification({
            certification_name: "",
            institute: "",
            duration: "",
            place: ""
        })
    }

    const deletecertification = (v) => {
        let del = inputValue.certification.filter((items) => items != v)
        setInputValue({ ...inputValue, certification: del })
    }


    const addworkexperience = () => {
        let a = [workExp_Value]
        let b = [...inputValue.workExperience, ...a]
        setInputValue({ ...inputValue, workExperience: b })
        setWorkExp_Value({
            company_name: "",
            role: "",
            year: "",
            place: ""
        })
    }
    const deletework = (v) => {
        let del = inputValue.workExperience.filter((items) => items != v)
        setInputValue({ ...inputValue, workExperience: del })
    }


    const addproject = () => {
        let a=[project]
        let b = [...inputValue.project, ...a]
        setInputValue({ ...inputValue, project: b })
        setProject({
            project_title: "",
            project_description: ""

        })
    }


    const deleteproject = (v) => {
        let del = inputValue.project.filter((items) => items != v)
        setInputValue({ ...inputValue, project: del })
    }
  

    const submit = () => {
        const formData = new FormData();
        formData.append("user_id", 4);
        formData.append("data", JSON.stringify(inputValue));

        axios.post('https://agaram.academy/api/b4/action.php?request=ai_carrier_update_user_resume', formData).then((res) => {
            // console.log(res)
        })
        alert("submit")

    }
    const getApi = () => {

        axios.get('https://agaram.academy/api/b4/action.php?request=ai_carrier_get_user_profile&user_id=4').then((res) => {
            let getData = res.data.data.data
            // console.log(getData)
            setInputValue({...inputValue,...JSON.parse(getData)})

        });

        axios.get('https://agaram.academy/api/b4/action.php?request=ai_carrier_get_user_resume&user_id=4')
        .then((res) => {
            console.log( res);
    
            const resumeData = res.data?.data;
            console.log( resumeData);

            
        })
        
       
    

        
        

        //     // setResumeData(JSON.parse.(getDatas));  

       
    }
   

    return <div>
        <h1 style={{ textAlign: "center" }}>Resume</h1>
        <Container style={{ backgroundColor: "lightgreen" }}>
            <Row>
                <Col>
                <Col sm="6">
                    
                    <h3>Name</h3>
                    <Form.Control type="text" value={inputValue.fullname} placeholder='enter your name'
                        onChange={(e) => setInputValue({ ...inputValue, fullname: e.target.value })} />

                    <h3>Email</h3>
                    <Form.Control type="email" value={inputValue.email} placeholder='enter your email'
                        onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })} />


                    <h3>Objective</h3>
                    <Form.Control type="objective" value={inputValue.objective} placeholder='enter your objective'
                        onChange={(e) => setInputValue({ ...inputValue, objective: e.target.value })} />

                    <h1>Personal details:</h1>
                    
                        <h4>Fathername</h4>
                        <Form.Control type="text" value={inputValue.fatherName} placeholder='enter your fathername'
                            onChange={(e) => setInputValue({ ...inputValue, fatherName: e.target.value })} />

                        <h4>Mothername</h4>
                        <Form.Control type="text" value={inputValue.motherName} placeholder='enter your mothername'
                            onChange={(e) => setInputValue({ ...inputValue, motherName: e.target.value })} />

                        <h4>address</h4>
                        <Form.Control type="text" value={inputValue.address} placeholder='enter your address'
                            onChange={(e) => setInputValue({ ...inputValue, address: e.target.value })} />


                        <h4>Gender</h4>
                        
                            <Form.Check inline type="radio" label="Male" value="male" checked={inputValue.gender === "male"}
                                onChange={(e) => setInputValue({ ...inputValue, gender: e.target.value })} />
                            <Form.Check inline type="radio" label="Female" value="female" checked={inputValue.gender === "female"}
                                onChange={(e) => setInputValue({ ...inputValue, gender: e.target.value })} />
                        

                        <h4>Maritial Status</h4>
                        
                            <Form.Check inline type="radio" label="Married" value="married"
                                checked={inputValue.marital_status === "married"}
                                onChange={(e) => setInputValue({ ...inputValue, marital_status: e.target.value })} />
                            <Form.Check inline type="radio" label="Single" value="single"
                                checked={inputValue.marital_status === "single"}
                                onChange={(e) => setInputValue({ ...inputValue, marital_status: e.target.value })} />
                        

                        <h4>Nationality</h4>

                        <Form.Control type="text" value={inputValue.nationality} placeholder='enter nationality'
                            onChange={(e) => setInputValue({ ...inputValue, nationality: e.target.value })} />

                        <h4>Contact Number</h4>

                        <Form.Control type="number" value={inputValue.contact_number} placeholder='enter your contact'
                            onChange={(e) => setInputValue({ ...inputValue, contact_number: e.target.value })} />
                    
                

                    <h3>Course</h3>
                    <Form.Label>CourseName</Form.Label>
                    <Form.Control type="text" value={courseValue.courseName} placeholder="Enter CourseName"
                        onChange={(e) => setCourseValue({ ...courseValue, courseName: e.target.value })} />

                    <Form.Label>CourseInstitute</Form.Label>
                    <Form.Control type="text" value={courseValue.institude} placeholder="Enter institute"
                        onChange={(e) => setCourseValue({ ...courseValue, institude: e.target.value })} />

                    <Form.Label>Year</Form.Label>
                    <Form.Control type="number" value={courseValue.year} placeholder="Enter year"
                        onChange={(e) => setCourseValue({ ...courseValue, year: e.target.value })} />

                    <Form.Label>Place</Form.Label>
                    <Form.Control type="text" value={courseValue.place} placeholder="Enter place"
                        onChange={(e) => setCourseValue({ ...courseValue, place: e.target.value })} />

                    <Button onClick={addcourseValue} variant='info'>+</Button>

                    <Table striped bordered cover>
                        <thead>
                            <tr>
                                <th>courseName</th>
                                <th>institude</th>
                                <th>year</th>
                                <th>place</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inputValue.course?.map((v) =>
                                <tr>
                                    <td>{v.courseName}</td>
                                    <td>{v.institude}</td>
                                    <td>{v.year}</td>
                                    <td>{v.place}</td>
                                    <td><Button variant='dark' onClick={() => deleteEdu(v)}>x</Button></td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
                </Col>

            

            
            <Col>
                <Col sm="6">
                    <h4>Language</h4>
                    <Form.Control
                        type="text"
                        value={languageKnownValue} placeholder="Enter language" onChange={(e) => setLanguageKnownValue(e.target.value)} />
                    <ul>
                        <Button onClick={addlanguageValue} variant='info' >+</Button>
                        {inputValue.languageKnown?.map((v) =>
                            <li>{v}
                                <td><Button variant='dark' onClick={() => deletelanguage(v)}>x</Button></td>
                            </li>
                        )}
                    </ul>

                
            
                    <h4>Skills</h4>
                    <Form.Control
                        type="text"
                        value={skillValue} placeholder="Enter skill" onChange={(e) => setSkillValue(e.target.value)} />
                    <ul>
                        <Button onClick={addskillValue} variant='info' >+</Button>

                        {inputValue.skills?.map((v) =>
                            <li>{v}
                                <td><Button variant='dark' onClick={() => deleteskill(v)}>x</Button></td>
                            </li>
                        )}
                    </ul>
                </Col>
            



            
                <Col sm="6">
                    <h4>Hobbies</h4>
                    <Form.Control
                        type="text"
                        value={hobbiesValue} placeholder="Enter hobbies" onChange={(e) => setHobbiesValue(e.target.value)} />
                    <ul>
                        <Button onClick={addhobbiesValue} variant='info' >+</Button>
                        {inputValue.hobbies?.map((v) =>
                            <li>{v}
                                <td><Button variant='dark' onClick={() => deletehobbies(v)}>x</Button></td>
                            </li>
                        )}
                    </ul>
                </Col>
            






            <h3>certification</h3>
            <Col sm="6">
                <Form.Label>coursename</Form.Label>
                <Form.Control type="text" value={certification.certification_name} placeholder="Enter CourseName"
                    onChange={(e) => setCertification({ ...certification, certification_name: e.target.value })} />

                <Form.Label>institute</Form.Label>
                <Form.Control type="text" value={certification.institute} placeholder="Enter institute"
                    onChange={(e) => setCertification({ ...certification, institute: e.target.value })} />

                <Form.Label>duration</Form.Label>
                <Form.Control type="text" value={certification.duration} placeholder="Enter duration"
                    onChange={(e) => setCertification({ ...certification, duration: e.target.value })} />

                <Form.Label>place</Form.Label>
                <Form.Control type="text" value={certification.place} placeholder="Enter place"
                    onChange={(e) => setCertification({ ...certification, place: e.target.value })} />

                <Button onClick={addcertification} variant='info' >+</Button>

                <Table striped bordered cover>
                    <thead>
                        <tr>
                            <th>certification_name</th>
                            <th>institute</th>
                            <th>duration</th>
                            <th>place</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inputValue.certification?.map((v) =>
                            <tr>
                                <td>{v.certification_name}</td>
                                <td>{v.institute}</td>
                                <td>{v.duration}</td>
                                <td>{v.place}</td>
                                <td><Button variant='dark' onClick={() => deletecertification(v)}>x</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Col>


            <h3>WorkExperience</h3>
            <Col sm="6">
                <Form.Label>CompanyName</Form.Label>
                <Form.Control type="text" value={workExp_Value.company_name} placeholder="Enter CompanyName"
                    onChange={(e) => setWorkExp_Value({ ...workExp_Value, company_name: e.target.value })} />

                <Form.Label>role</Form.Label>
                <Form.Control type="text" value={workExp_Value.role} placeholder="Enter role"
                    onChange={(e) => setWorkExp_Value({ ...workExp_Value, role: e.target.value })} />

                <Form.Label>year</Form.Label>
                <Form.Control type="number" value={workExp_Value.year} placeholder="Enter year"
                    onChange={(e) => setWorkExp_Value({ ...workExp_Value, year: e.target.value })} />

                <Form.Label>place</Form.Label>
                <Form.Control type="text" value={workExp_Value.place} placeholder="Enter place"
                    onChange={(e) => setWorkExp_Value({ ...workExp_Value, place: e.target.value })} />
                <Button onClick={addworkexperience} variant='info' >+</Button>

                <Table striped bordered cover>
                    <thead>
                        <tr>
                            <th>company_name</th>
                            <th>role</th>
                            <th>year</th>
                            <th>place</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inputValue.workExperience?.map((v) =>
                            <tr>
                                <td>{v.company_name}</td>
                                <td>{v.role}</td>
                                <td>{v.year}</td>
                                <td>{v.place}</td>
                                <td><Button variant='dark' onClick={() => deletework(v)}>x</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Col>

            <h3 >Project</h3>
            <Col sm="6" >
                <Form.Label>project title</Form.Label>
                <Form.Control type="text" value={project.project_title} placeholder="Enter project title"
                    onChange={(e) => setProject({ ...project, project_title: e.target.value })} />

                <Form.Label>project description</Form.Label>
                <Form.Control type="text" value={project.project_description} placeholder="Enter project description"
                    onChange={(e) => setProject({ ...project, project_description: e.target.value })} />
                <Button onClick={addproject} variant='info' >+</Button>

                <Table striped bordered cover>
                    <thead>
                        <tr>
                            <th>tiltle</th>
                            <th>description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inputValue.project?.map((v) =>
                            <tr>
                                <td>{v.project_title}</td>
                                <td>{v.project_description}</td>
                                <td><Button variant='dark' onClick={() => deleteproject(v)}>x</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Col>
            </Col>
            </Row>
                        
            <td><Button variant='danger' onClick={submit}>submit</Button></td>
        </Container>

    </div>

}
export default Resume