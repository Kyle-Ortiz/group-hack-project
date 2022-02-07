import { Button, TextField } from '@mui/material';
import { useState } from 'react'
import React from 'react';
import Link from 'next/link'


const firstState = {
     "first" : "",
     "last" : "",
     "Password" : ""
}

function Signup() {
     //add error toggling if any field is left blank?
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
  return <form id="signup-form">
               <div >
                    <h1 id="signup-header">Let{"'"}s create your account.</h1>
               </div>
              <TextField required className="text-field" id="outlined-basic" name="first" value={signUpForm.first} onChange={(e)=> inputChange(e)} label="First Name" variant="outlined" />
              <TextField required className="text-field" id="outlined-basic2" name="last"value={signUpForm.last} onChange={(e)=>inputChange(e)} label="Last Name" variant="outlined" />
              <TextField required className="text-field" id="outlined-basic3" type="password" name="Password"value={signUpForm.Password} onChange={(e) => inputChange(e)} label="Password" variant="outlined" />
              <Button id="signup-button" color="success" onClick={submit}variant="contained">Sign up</Button>
              <p>Already have an account? 
                   <Link href="/signin">
                      <a>Sign in. </a>
                   </Link>
               </p>
          </form>;
}

export default Signup;
