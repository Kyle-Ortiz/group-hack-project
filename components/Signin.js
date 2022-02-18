import React, { useState, useContext } from 'react';
import { Button, TextField } from '@mui/material';
import { AppContext } from '../appState/appState';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { employees } from '../pages/selection';


function Signin() {

     const firstState = {
          "employeeId" : "",
          "password" : "",
     }

     const router = useRouter();
     const [signInForm, setSignInForm] = useState(firstState)

     const { globalState, changeState } = useContext(AppContext);
     const selectedCompany = globalState.companyProfile;
     
     
     const inputChange = (e) => {
          setSignInForm({...signInForm, 
              [e.target.name]: e.target.value
          })
     }

     const submit = (e) => {
          e.preventDefault()
          const current_user = employees.find(user => user.employeeId === signInForm.employeeId)
          if(!current_user || current_user?.password !== signInForm.password) return setSignInForm(firstState)
          changeState({type: "SET_CURRENT_USER", payload: current_user})
          router.push('/selection')
     }

     console.log("Sigin component rendered")

 
  return <form className="form" onSubmit={submit}>
               <div>
                    <img src={selectedCompany.logo} width="250px" height="100px" />
               </div>
               <div >
                    <h1 className="form-header">Sign In</h1>
               </div>
              <TextField 
                    required 
                    className="text-field" 
                    id="outlined-basic" 
                    name="employeeId" 
                    value={signInForm.employeeId} 
                    onChange={(e)=> inputChange(e)} 
                    label="Employee ID" 
                    variant="outlined" 
              />
              <TextField 
                    required 
                    className="text-field" 
                    id="outlined-basic2" 
                    name="password" 
                    type="password" 
                    value={signInForm.password} 
                    onChange={(e) => inputChange(e)} 
                    label="Password" 
                    variant="outlined" 
               />
              <Button 
                    id="signup-button" 
                    color="success" 
                    type="submit"
                    variant="contained"
               >Sign In
               </Button>
              <p>Don{"'"}t have an account?  
                   <Link href="/signup">
                         <a>Sign up. </a>
                    </Link>
               </p>
          </form>;
}

export default Signin;

