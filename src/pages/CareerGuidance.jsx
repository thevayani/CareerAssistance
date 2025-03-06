import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form } from 'react-bootstrap';
import{useState} from "react";
import{useNavigate} from "react-router-dom";


function CareerGuidance(){


    const[skilledPerson,setSkilledPerson]=useState({
        company_name:"",
        place:"",
        candidate:"",
        qualification:"",
        salary:"",
        contact_no:""

    })
    const[nonskilledPerson,setNonskilledPerson]=useState({
        institute_name:"",
        course_name:"",
        duration:"",
        place:"",
        place:""
    })

    const[userDetails,setUserDetails]=useState([])


    return<div>
        <h1>CareerGuidance</h1>
        company name


    </div>
}

export default CareerGuidance