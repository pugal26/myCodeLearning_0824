import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "@mui/material/Button";


const Task_8 = () => {

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const [usernameError, setUsernameError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');

    const [isUsernameError, setIsUsernameError] = useState<boolean>(false);
    const [isEmailError, setIsEmailError] = useState<boolean>(false)

    const onUsernameChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const name = event.target.value
        setUsername(name);

        if (name.trim() === '') {
            setIsUsernameError(true);
            setUsernameError('Username is Required')
        } else if (name.length < 3)  {
            setIsUsernameError(true)
            setUsernameError('Username must be at least 3 characters');
        } else {
            setIsUsernameError(false)
            setUsernameError('');
        }
    };

    const onEmailChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const inputemail = event.target.value
        setEmail(inputemail);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (inputemail.trim() === '') {
            setIsEmailError(true);
            setEmailError('email in Required')
        } else if (!emailRegex.test(inputemail)) {
            setEmailError('Enter a valid email')
        } else {
            setIsEmailError(false);
            setEmailError('');
        }
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`
                Username: ${username}
                Email: ${email}
            `)
        setUsername('')
        setEmail('')
    } 

    return (
       <Box>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Fill the form and get the alert while submit the form with form validation
                </Typography>

                <form noValidate onSubmit={(event) => {handleSubmit(event)}}>
                    <TextField 
                        type="text"
                        name="username"
                        label='User Name'
                        value={username}
                        onChange={(event) => {onUsernameChange(event)}}
                        margin="normal"
                        fullWidth
                        required
                        error={isUsernameError}
                        helperText={usernameError}
                    />

                    <TextField 
                        required
                        type="email"
                        name="email"
                        label='Email'
                        value={email}
                        onChange={(event) => onEmailChange(event)}
                        margin="normal"
                        fullWidth
                    />

                    <Button type="submit" variant="contained">Submit</Button>
                </form>
            </Container>
       </Box>
    )
}

export default Task_8;