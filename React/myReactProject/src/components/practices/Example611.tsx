import { ChangeEvent, FormEvent, useState } from "react";
import { TextField, Box, Button } from "@mui/material";


export default function FormValidation() {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    
    
    const handleNameChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)  => {
        setName(event.target.value);
        if (event.target.validity.valid) {
            setNameError(false);
        } else {
            setNameError(true);
        }
    };
    
    
    const handleEmailChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setEmail(event.target.value);
        if (event.target.validity.valid) {
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    };
    
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (event.currentTarget.checkValidity()) {
            alert("Form is valid! Submitting the form...");

            setName('')
            setEmail('')
        } else {
            alert("Form is invalid! Please check the fields...");
        }

    };
    
    
    return (
        <Box component="form" onSubmit={(event) => {handleSubmit(event)}}>
            <TextField
                required
                label="Name"
                value={name}
                onChange={(event) => {handleNameChange(event)}}
                error={nameError}
                type="text"
                helperText={
                    nameError ? "Please enter your name (letters and spaces only)" : ""
                }
                margin="normal" 
            /> 
            <TextField
                required
                label="Email"
                value={email}
                onChange={(event) => {handleEmailChange(event)}}
                error={emailError}
                helperText={emailError ? "Please enter a valid email" : ""}
                type="email"
                margin="normal"
            /> <br/>
            <Button variant="contained" color="primary" type="submit">
                Submit
            </Button>
        </Box>
    );
}