import React, { useState } from 'react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { initializeApp } from 'firebase/app'
import 'firebase/auth'
import Navbar from '../Navbar';
import firebaseConfig from '../firebase';
import MobileForm from '../forms/MobileForm';
import OtpForm from '../forms/OtpForm';
import { useNavigate } from 'react-router';
import useStyles from '../../styles/styles';
import { Grid, Paper } from '@material-ui/core';


declare global {
  interface Window { recaptchaVerifier: any, confirmationResult: any  }
  interface Response { error: any }
}

initializeApp(firebaseConfig);
const auth = getAuth();

const Login: React.FunctionComponent = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [name, setState] = useState("")
    // called for input change
    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
      setState(event.target.value)
    }
    // called for Recaptcha.
    const configureCaptcha = () =>{
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'normal',
        'expired-callback': () => {
        alert('Verification expired, Please try again')// Response expired. Ask user to solve reCAPTCHA again.
        }
      }, auth);
      console.log("ReCaptcha Verified!");      
    }
    // Called for Number Verification
    async function onSignInSubmit(event: React.FormEvent){
      event.preventDefault()
      configureCaptcha()
      const mobile = "+91" + name;
      console.log(mobile, "Entered by User")
      const appVerifier = window.recaptchaVerifier;

      const userMob = { mobile: name }
      let result = await fetch("/login", {
        method: 'POST',
        body: JSON.stringify(userMob),
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }})
      result = await result.json()
      console.log("Result:", typeof result, result);
      if( result.error === "User not Registered! Please Register"){
        return navigate("/register")
      } else signInWithPhoneNumber(auth, mobile, appVerifier)
          .then(confirmationResult => {
            window.confirmationResult = confirmationResult;
            alert("Please Enter the sent OTP")
          }).catch(error => {
            console.error(error)
            navigate(0)
          });
    }
    // called after cubmitting OTP
    function onSubmitOTP(event: React.FormEvent){
      event.preventDefault()
      const code = name
      console.log(code)
      window.confirmationResult.confirm(code).then((result: { user: any; }) => {
        const user = result.user;
        console.log(JSON.stringify(user.mobile))
        alert("OTP verified, Now Logged In")
        navigate("/dashboard")
      }).catch((error: any) => {
        console.error("OTP not verified", error)
      });
    }
    return (
        <div>
          <Navbar /> <br/> <br/>
          <Grid container spacing={0} direction="column" alignItems="center" justifyContent="flex-start">
            <Paper elevation={8} className={classes.paper_style}>
            <div className={classes.div_h1}>
              <h2>Log into your Account</h2> 
              <MobileForm phoneNumberSubmit={onSignInSubmit} formHandleChange={handleChange} />
              <OtpForm otpSubmit={onSubmitOTP} otpHandleChange={handleChange} />
            </div>
            </Paper>
          </Grid>          
        </div>
    )
}

export default Login;