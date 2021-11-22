import { Link } from 'react-router-dom'
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Grid } from '@material-ui/core';
import useStyles from '../styles/styles';

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
        <AppBar position="static" style={{ background: '#2E3B55' }}>
          <Toolbar>
            <Grid justify="space-between" container>
              <Typography className={classes.title} variant="h6" noWrap>
                My Login App
              </Typography>
              <div className={classes.rootNav}>
                <ButtonGroup style={{ float:'right' }} variant="text" color="secondary" aria-label="text primary button group">
                    <Button>
                        <Link className={classes.navLinks} to="/">Home </Link>
                    </Button>
                    <Button>
                        <Link className={classes.navLinks} to="/register">Register</Link>
                        </Button>
                    <Button>
                        <Link className={classes.navLinks} to="/login">Login</Link>
                    </Button>
                </ButtonGroup>
              </div>
            </Grid>
          </Toolbar>
          
          
          
          
        </AppBar>
    </div>
  );
}



// export default function Navbar() {
//     return (
//         <header>
//             
//         </header>
//     )
// }
