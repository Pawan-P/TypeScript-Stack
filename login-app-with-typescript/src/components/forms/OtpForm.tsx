import React from 'react';
import Button from "@material-ui/core/Button";
import { TextField } from '@material-ui/core';
import useStyles from '../../styles/styles';
type OtpFormProps = {
    otpSubmit: (event: React.FormEvent)=> void
    otpHandleChange: (event: React.ChangeEvent<HTMLInputElement>)=> void
}

export default function OtpForm(props: OtpFormProps) {
    const classes = useStyles();
    return (
        <div>
            <form onSubmit={props.otpSubmit}>
                <TextField inputProps={{maxLength: 10}} type="number" name="otp" required onChange={props.otpHandleChange} label="OTP Here" variant="outlined"/> <br/> <br/>
                <Button type="submit" className={classes.button_style} variant="contained" color="primary">
                    Verify & login
                </Button>
            </form>
        </div>
    )
}
