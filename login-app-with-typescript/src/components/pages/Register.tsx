import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../Navbar'
import Button from "@material-ui/core/Button";
import { Grid, Paper, TextField } from '@material-ui/core';
import useStyles from '../../styles/styles';

export default function Register() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: "",
        name: "",
        mobile: ""
    });

    function handleInput (event: ChangeEvent<HTMLInputElement>) {
        const {value, name} = event.target
        setUserData({...userData, [name]: value});
        console.log(userData)
    }

    async function registerUser (event: React.FormEvent) {
        event.preventDefault();
        // CHANGE THE FETCH ADDR
        let res = await fetch("/register", {
            method: 'POST',
            body: JSON.stringify(userData),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        let result = await res.json()
        if(result.error === 'User Already Exists' ){
            alert("User Already Exists! Log into your Account Now")
            navigate("/login")
        } else{
            alert("Registration Successful! Log into your Account Now")
        }
        console.log("Result:", result.message);
        navigate("/login")
    }

    return (
        <div>
            <Navbar />
            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="flex-start"> <br/><br/>
                <Paper elevation={8} className={classes.paper_style}>
                    <div className={classes.div_h1}>
                        <h2>Fill the form to Register</h2><br />
                        <form onSubmit={registerUser} className={classes.root}>
                            <div>
                                <TextField
                                type="email" value={userData.email} name="email" required onChange={handleInput} label="Email Address"
                                variant="outlined"
                                />
                                <TextField
                                type="text" value={userData.name} name="name" onChange={handleInput} label="Full Name" variant="outlined"
                                />
                                <TextField inputProps={{maxLength: 10}} type="tel" value={userData.mobile} name="mobile" required onChange={handleInput} label="Phone Number" variant="outlined"
                                />
                            </div>
                            <div className={classes.root}>
                                <Button onClick={registerUser} className={classes.button_style} variant="contained" color="primary">
                                    Register
                                </Button>
                            </div>
                        </form>
                    </div>
                </Paper>
            </Grid>
        </div>
    )
}
