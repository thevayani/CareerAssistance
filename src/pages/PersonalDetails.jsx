import { Form,Container,Navbar,Button,Row,Col,FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
// import { useNavigate } from 'react-router';
import { useSelector,useDispatch } from 'react-redux';
import react from  '../assets/image.jpg';
import { setUserList } from '../redux/slices/userDetails';

function PersonalDetails(){

    const userGlobalState = useSelector((state)=> state.userDetail)

    const disPatch = useDispatch()

   

    const [userInputValue,setuserInputValue] = useState(
        {
            fullname:"",
            fatherName:"",
            motherName:"",
            gender:"",
            dob:"",
            address:"",
            Language_known : [],
            hobbies:[],
            course:[],
            workExperience: [],
            whether_employee:"",
            contact_number:"",
        }
    );


     const submitBtn = () => {
        let x = [...userGlobalState.userList,userInputValue]
        disPatch(setUserList(x))
        console.log(x)
     }


     const addBtn =(() =>{
       console.log
        // if(p_key == "hobbies"){
        //     setuserInputValue({...userInputValue,hobbies:[arrayValue]})
        // }

        // setArrayValue(getArrayvalue = "")

     })




   
    return <div style={
            {
                backgroundImage:`url(${react})`,
                backgroundSize:"cover",
                backgroundAttachment:"revert",
                backgroundRepeat:"no-repeat",
                height:"900px",
            }
        }>
       <Container>
        <h1 style={{textAlign:"center",
            textShadow:"5px 8px #888888",
            marginBottom:"0px",
            color:"white"}}>User Form</h1>
        <Form style={
            {
                backgroundColor:"rgba(255, 255, 255, 0.5)", 
                WebkitBackdropFilter:"blur(5px)",
                backdropFilter:"blur(5px)",
                marginTop:"20px",
                padding:"30px",
                borderRadius:"45px",
                marginRight:"20px",
                boxShadow:"6px 8px rgb(247, 192, 11)"
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
                                    style={{backgroundColor:"inherit",
                                    border:"1px solid black",
                                    color:"white"}} 
                                    type="text" 
                                    onChange={(e) => setuserInputValue({...userInputValue,fullname:e.target.value})}
                                    placeholder="Enter full Name" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3"   >
                                <Form.Label column sm="3">
                                    <h5>Father Name</h5>
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control 
                                    style={{backgroundColor:"inherit",
                                    border:"1px solid black",
                                    color:"white"}} 
                                    type="text" 
                                    onChange={(e) => setuserInputValue({...userInputValue,fatherName:e.target.value})}
                                    placeholder="Enter Father Name" />
                                </Col>
                            </Form.Group>
                            
                            <Form.Group as={Row} className="mb-3"   >
                                <Form.Label column sm="3">
                                    <h5>Mother Name</h5>
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control 
                                    style={{backgroundColor:"inherit",
                                    border:"1px solid black",
                                    color:"white"}} 
                                    type="text" 
                                    onChange={(e) => setuserInputValue({...userInputValue,motherName:e.target.value})}
                                    placeholder="Enter Mother Name" />
                                </Col>
                            </Form.Group>


                            <Form.Group as={Row} className="mb-4">
                                <Row>
                                <Form.Label column sm="3">
                                   <h5>Gender</h5> 
                                    </Form.Label>
                                    <Col sm="2"className="mt-2">
                                            <Form.Check type="radio" label="Male" value="Male"
                                            onChange={(e) => setuserInputValue({...userInputValue,gender:e.target.value})} />
                                    </Col>
                                    <Col sm="2" className="mt-2">
                                            <Form.Check type="radio" label="Female" value="Femle" 
                                            onChange={(e) => setuserInputValue({...userInputValue,gender:e.target.value})} />
                                            
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
                                        onChange={(e) => setuserInputValue({...userInputValue,dob:e.target.value})}
                                        style={{backgroundColor:"inherit",
                                        border:"1px solid black",color:"whitesmoke"}} 
                                        placeholder="Enter full Name" />
                                    </Col>
                            </Form.Group>


                            <Form.Group as={Row} className="mb-3"   >
                                    <Form.Label column sm="3">
                                        <h5>Address</h5>
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control as="textarea" 
                                        style={{backgroundColor:"inherit",
                                        border:"1px solid black",
                                        color:"white",
                                        height:"70px"}}
                                        onChange={(e) => setuserInputValue({...userInputValue,address:e.target.value})} 
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
                                                onChange={(e) => setArrayValue(e.target.value)}
                                                style={{backgroundColor:"inherit",
                                                border:"1px solid black",color:"white"}} 
                                                placeholder="Hobbies" />
                                            </Col>
                                            <Col sm="4">
                                                <Button 
                                                onClick={() => addBtn()}
                                                style={{backgroundColor:"inherit",
                                                    color:"black",
                                                    border:"1px solid black"}}>
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
                                                onChange={(e) => setArrayValue({...userInputValue,Language_known:e.target.value})}
                                                style={{backgroundColor:"inherit",
                                                border:"1px solid black",
                                                color:"white"}} 
                                                placeholder="Language Known" />
                                            </Col>
                                            <Col sm="4">
                                                <Button 
                                                onClick={() => addBtn()}
                                                style={{backgroundColor:"inherit",
                                                color:"black",
                                                border:"1px solid black"}}>
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
                                            <Col sm="2"className="mt-2">
                                                    <Form.Check type="radio" label="Yes" />
                                            </Col>
                                            <Col sm="2" className="mt-2">
                                                    <Form.Check type="radio" label="No" />
                                                    
                                            </Col>
                                        </Row>           
                                    </Form.Group>
                            </Col>
                        
        
                            <Col sm="6">
                                    
                            <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm="5">
                                        <h5>Work Experience</h5>
                                    </Form.Label>
                                    <Row style={{marginTop:"15px"}}>
                                        <Col sm="4">
                                            <p>
                                            <Form.Label  style={{marginTop:"10px",marginLeft:"20px"}}>
                                                Company Name
                                            </Form.Label>
                                            </p>
                                        </Col>
                                        <Col sm="5">
                                            <Form.Control 
                                            type="text"
                                            style={{backgroundColor:"inherit",
                                            border:"1px solid black",
                                            color:"white"}} 
                                            placeholder="Company Name" />
                                            </Col>
                                        </Row>

                                        <Row>
                                        <Col sm="4">
                                            <p>
                                            <Form.Label  style={{marginTop:"10px",marginLeft:"20px"}}>
                                                Institude Name
                                            </Form.Label>
                                            </p>
                                        </Col>
                                        <Col sm="5">
                                            <Form.Control type="text" style={{backgroundColor:"inherit",border:"1px solid black",color:"white"}} placeholder="Institude Name" />
                                            </Col>
                                        </Row>

                                        <Row>
                                        <Col sm="4">
                                            <p>
                                            <Form.Label  style={{marginTop:"10px",marginLeft:"20px"}}>
                                                Year.Of.Exp
                                            </Form.Label>
                                            </p>
                                        </Col>
                                        <Col sm="3">
                                            <Form.Control type="number" style={{backgroundColor:"inherit",border:"1px solid black",color:"white"}} placeholder="Year" />
                                            </Col>
                                        </Row>
                                    
                            </Form.Group>


                            <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm="5">
                                        <h5>Course details</h5>
                                    </Form.Label>
                                    <Row style={{marginTop:"15px"}}>
                                        <Col sm="4">
                                            <p>
                                            <Form.Label  style={{marginTop:"10px",marginLeft:"20px"}}>
                                                Course Name
                                            </Form.Label>
                                            </p>
                                        </Col>
                                        <Col sm="5">
                                            <Form.Control 
                                            type="text"
                                            style={{backgroundColor:"inherit",
                                            border:"1px solid black",
                                            color:"white"}} 
                                            placeholder="Company Name" />
                                            </Col>
                                        </Row>

                                        <Row>
                                        <Col sm="4">
                                            <p>
                                            <Form.Label  style={{marginTop:"10px",marginLeft:"20px"}}>
                                                Institude Name
                                            </Form.Label>
                                            </p>
                                        </Col>
                                        <Col sm="5">
                                            <Form.Control type="text" style={{backgroundColor:"inherit",border:"1px solid black",color:"white"}} placeholder="Institude Name" />
                                            </Col>
                                        </Row>

                                        <Row>
                                        <Col sm="4">
                                            <p>
                                            <Form.Label  style={{marginTop:"10px",marginLeft:"20px"}}>
                                                Year
                                            </Form.Label>
                                            </p>
                                        </Col>
                                        <Col sm="3">
                                            <Form.Control type="number" style={{backgroundColor:"inherit",border:"1px solid black",color:"white"}} placeholder="Year" />
                                            </Col>
                                            
                                        </Row>


                                        <Row>
                                        <Col sm="4">
                                            <p>
                                            <Form.Label  style={{marginTop:"10px",marginLeft:"20px"}}>
                                                Place
                                            </Form.Label>
                                            </p>
                                        </Col>
                                        <Col sm="3">
                                            <Form.Control type="text" style={{backgroundColor:"inherit",border:"1px solid black",color:"white"}} placeholder="place" />
                                            </Col>
                                            
                                        </Row>
                                        
                            </Form.Group>


                            <Form.Group as={Row} className="mt-3"   >
                                        <Form.Label column sm="4">
                                            <h5>Contact Number</h5>
                                        </Form.Label>
                                        <Col sm="5">
                                            <Form.Control 
                                            type="number"
                                            onChange={(e) => setuserInputValue({...userInputValue,contact_number:e.target.value})} 
                                            style={{backgroundColor:"inherit",
                                            border:"1px solid black",
                                            color:"white"}} 
                                            placeholder="Contact Number" />
                                        </Col>
                                </Form.Group>
                        </Col>
                 </Row>


                <Button variant="primary" 
                    onClick={submitBtn}
                    style={{padding:"10px",
                    width:"120px",
                    textAlign:"center",
                    marginTop:"5px"}}>
                    Submit
                </Button>

            </Form>
        </Container>
        
    </div>
}

export default PersonalDetails