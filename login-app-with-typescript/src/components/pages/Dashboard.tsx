import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from '../../styles/styles';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router';
import { AppBar, Grid, Paper, Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function Dashboard() {
    const classes = useStyles();
    const navigate = useNavigate();

    function signOutUser(event: React.FormEvent){
        const auth = getAuth();
        signOut(auth).then(() => {
            window.alert('User Signed Out');
            console.log("SignedOut")
        }).catch((error) => {
            console.error("Error:", error);
        });
        navigate("/")
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(`${user.phoneNumber}, SignedOUT`);
                console.log()
            } else {console.log("Error")}
        });
        event.preventDefault()
    }
    return (
        <div>
            <AppBar position="static" style={{ background: '#2E3B55' }}>
                <Toolbar>
                    <Grid justify="flex-end" container>
                        <ButtonGroup variant="text" color="secondary" aria-label="text primary button group">
                            <Button onClick={signOutUser} type="submit">
                                <Link className={classes.navLinks} to="/">Sign Out </Link>
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </Toolbar>
            </AppBar> <br /><br/>
            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="flex-start">
                <Paper elevation={8} className={classes.paper_style}>
                    <div className={classes.div_h1}>
                        <h1>Logged In</h1>
                        <h3>Please stay tuned in for more.</h3>
                    </div>
                </Paper>
            </Grid>
            
        </div>
    )
}
