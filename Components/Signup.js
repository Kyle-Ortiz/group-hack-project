import { Button, TextField } from '@mui/material';
import { useState } from 'react'
import React from 'react';

const firstState = {
     "first" : "",
     "last" : "",
     "Password" : ""
}

function Signup() {
     const [signUpForm, setSignUpForm] = useState(firstState)
     const inputChange = (e) => {
          setSignUpForm({...signUpForm, 
              [e.target.name] : e.target.value}
          )
     }
     const submit = (e) => {
          //send form to backend for account creation
          setSignUpForm(firstState)
     }
  return <div id="signup-form">
              <TextField id="outlined-basic" name="first" value={signUpForm.first} onChange={(e)=> inputChange(e)} label="First Name" variant="outlined" />
              <TextField id="outlined-basic" name="last"value={signUpForm.last} onChange={(e)=>inputChange(e)} label="Last Name" variant="outlined" />
              <TextField id="outlined-basic" type="password" name="Password"value={signUpForm.Password} onChange={(e) => inputChange(e)} label="Password" variant="outlined" />
              <Button onClick={submit}variant="contained">Sign up</Button>
  </div>;
}

export default Signup;
