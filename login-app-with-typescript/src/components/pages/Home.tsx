import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Button from "@material-ui/core/Button";
import { Grid, Paper } from '@material-ui/core';
import useStyles from '../../styles/styles';

export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <Navbar /> <br /><br/>
            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="flex-start">
                <Paper elevation={8} className={classes.paper_style}>
                    <div className={classes.div_h1}>
                        <h1>Joined Us Yet?</h1> <br />
                        <h2>No? You my friend are missing Out</h2> <br />
                        <div className={classes.root}>
                            <Button className={classes.button_style} variant="contained" color="primary">
                                <Link className={`redirect ${classes.link_style}`} to="/register">Join NOW</Link>
                            </Button>
                        </div>                        
                    </div> 
                </Paper>
            </Grid>
        </div>
    )
}
