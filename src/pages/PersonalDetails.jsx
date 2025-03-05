import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import axios from 'axios';

function PersonalDetails(){
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
      <h3>User Details</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          

        </tbody>
      </Table>
    </div>
  );
}


export default PersonalDetails;
