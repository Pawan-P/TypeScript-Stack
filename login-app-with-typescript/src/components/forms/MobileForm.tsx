import React from 'react'
import Button from "@material-ui/core/Button";
import { TextField } from '@material-ui/core';
import useStyles from '../../styles/styles';

type MobileOtpProps = { 
    phoneNumberSubmit: (event: React.FormEvent)=> void;
    formHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function MobileForm(props: MobileOtpProps) {
    const classes = useStyles();
    return (
        <div>
            <form onSubmit={props.phoneNumberSubmit}>
                <TextField inputProps={{maxLength: 10}} type="tel" name="mobile" required onChange={props.formHandleChange} label="Phone Number" variant="outlined"/>
                <div id="recaptcha-container"></div><br/>
                <Button type="submit" className={classes.button_style} variant="contained" color="primary">
                    Submit
                </Button>
            </form><br/>
        </div> 
    )
}
