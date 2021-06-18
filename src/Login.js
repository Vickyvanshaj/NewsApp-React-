import React, { useContext, useState} from 'react'
import { Form, Button } from "react-bootstrap";
import { MyContext } from './Context';
import { useHistory } from 'react-router-dom';
// import DashBoard from './DashBoard';

function Login() {
   const [email,setEmail]=useState('')
   const [pass,setPassword]=useState('')
  
   let admin=useContext(MyContext);
   let history=useHistory();
   const handleSubmit=(e)=>{
       e.preventDefault();
       
       if(e.target[0].value==='vanshaj2311@gmail.com' && e.target[1].value==='1234'){
           admin.setAdmin(true);
          admin.setLog(true);
           history.push("/dashboard");
          
       }
       else if(e.target[0].value==='vicky@gmail.com' && e.target[1].value==='4321')
       {
           admin.setAdmin(false);
           admin.setLog(true);
           history.push("/dashboard")
          
       }
       else
       {
           alert('Username or password not match');
           admin.setLog(false);
           console.log(admin)
       }

   }
    return (
        <div>
            <div className=" container my-5">
                <h2>Login</h2>
                <hr></hr>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="email" value={pass} onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    <br />

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    



                </Form>
            </div>

        </div>
    )
}

export default Login