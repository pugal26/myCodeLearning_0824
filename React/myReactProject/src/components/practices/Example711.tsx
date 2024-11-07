import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "@mui/material/Button";

const Example711 = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [age, setAge] = useState<number | ''>('');
    
    const [usernameError, setUsernameError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [ageError, setAgeError] = useState<string>('');

    const [isUsernameError, setIsUsernameError] = useState<boolean>(false);
    const [isEmailError, setIsEmailError] = useState<boolean>(false);
    const [isAgeError, setIsAgeError] = useState<boolean>(false);

    // Username Validation
    const onUsernameChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const name = event.target.value;
        setUsername(name);

        if (name.trim() === '') {
            setIsUsernameError(true);
            setUsernameError('Username is required');
        } else if (name.length < 3) {
            setIsUsernameError(true);
            setUsernameError('Username must be at least 3 characters');
        } else {
            setIsUsernameError(false);
            setUsernameError('');
        }
    };

    // Email Validation
    const onEmailChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const emailInput = event.target.value;
        setEmail(emailInput);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.trim() === '') {
            setIsEmailError(true);
            setEmailError('Email is required');
        } else if (!emailRegex.test(emailInput)) {
            setIsEmailError(true);
            setEmailError('Enter a valid email');
        } else {
            setIsEmailError(false);
            setEmailError('');
        }
    };

    // Age Validation
    const onAgeChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const ageInput = event.target.value ? parseInt(event.target.value) : '';
        setAge(ageInput);

        if (ageInput === '' || ageInput < 18 || ageInput > 99) {
            setIsAgeError(true);
            setAgeError('Age must be between 18 and 99');
        } else {
            setIsAgeError(false);
            setAgeError('');
        }
    };

    // Handle Submit
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validate all fields before submitting
        if (!isUsernameError && !isEmailError && !isAgeError && username && email && age) {
            alert(`Username: ${username}, Email: ${email}, Age: ${age}`);
            setUsername('');
            setEmail('');
            setAge('');
            setIsUsernameError(false);
            setIsEmailError(false);
            setIsAgeError(false);
            setUsernameError('');
            setEmailError('');
            setAgeError('');
        }
    };

    return (
        <Box>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Fill out the form and get an alert on submission with validation
                </Typography>

                <form noValidate onSubmit={handleSubmit}>
                    <TextField
                        name="username"
                        label="User Name"
                        value={username}
                        onChange={onUsernameChange}
                        margin="normal"
                        fullWidth
                        required
                        error={isUsernameError}
                        helperText={usernameError}
                    />

                    <TextField
                        name="email"
                        label="Email"
                        value={email}
                        onChange={onEmailChange}
                        margin="normal"
                        fullWidth
                        required
                        error={isEmailError}
                        helperText={emailError}
                    />

                    <TextField
                        name="age"
                        label="Age"
                        value={age}
                        onChange={onAgeChange}
                        margin="normal"
                        fullWidth
                        required
                        type="number"
                        error={isAgeError}
                        helperText={ageError}
                    />

                    <Button type="submit" variant="contained">
                        Submit
                    </Button>
                </form>
            </Container>
        </Box>
    );
};

export default Example711;
