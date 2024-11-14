import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Task_8 = () => {

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [age, setAge] = useState<number>(0);
    const [gender, setGender] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [phone, setPhone] = useState<number>(0);
    const [pinCode, setPinCode] = useState<number>(0);
    const [country, setCountry] = useState<string>('');
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [date, setDate] = useState<string>('');
    

    const [usernameError, setUsernameError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [ageError, setAgeError] = useState<string>('');
    const [genderError, setGenderError] = useState<string>('');
    const [addressError, setAddressError] = useState<string>('');
    const [phoneError, setPhoneError] = useState<string>('');
    const [pinCodeError, setPinCodeError] = useState<string>('');
    const [countryError, setCountryError] = useState<string>('');
    const [CheckedError, setCheckedError] = useState<string>('');
    const [dateError, setDateError] = useState<string>('');
    

    const [isUsernameError, setIsUsernameError] = useState<boolean>(false);
    const [isEmailError, setIsEmailError] = useState<boolean>(false)
    const [isAgeError, setIsAgeError] = useState<boolean>(false);
    const [isGenderError, setIsGenderError] = useState<boolean>(false);
    const [isAddressError, setIsAddressError] = useState<boolean>(false);
    const [isPhoneError, setIsPhoneError] = useState<boolean>(false);
    const [isPinCodeError, setIsPinCodeError] = useState<boolean>(false);
    const [isCountryError, setIsCountryError] = useState<boolean>(false);
    const [isCheckedError, setIsCheckedError] = useState<boolean>(false);
    const [isDateError, setIsDateError] = useState<boolean>(false);


    const onUsernameChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const name = event.target.value
        setUsername(name);

        if (name.trim() === '') {
            setIsUsernameError(true);
            setUsernameError('Mandatory')
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
            setEmailError('Mandatory')
        } else if (!emailRegex.test(inputemail)) {
            setEmailError('Enter a valid email')
        } else {
            setIsEmailError(false);
            setEmailError('');
        }
    }

    const onAgeChange = (event:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {    
        const ageInput = Number(event.target.value)
        setAge(ageInput)

        if (isNaN(ageInput) || ageInput < 18 || ageInput > 99) {
            setIsAgeError(true)
            setAgeError('*Enter a valid age between 18 and 99*')
        } else {
            setIsAgeError(false);
            setAgeError('');
        }
    }

    const onGenderChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const genderInput = event.target.value
        setGender(genderInput)

        if (genderInput === 'Male') {
            setIsGenderError(false)
        } else if (genderInput === 'Female') {
            setIsGenderError(false)
        } else if (genderInput === 'Rather Not Say') {
            setIsGenderError(false)
        } else {
            setIsGenderError(true)
            setGenderError('Mandatory')
        }
        
    }

    const onAddressChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const addressInput = event.target.value
        setAddress(addressInput)

        if (addressInput.trim() === '') {
            setIsAddressError(true)
            setAddressError('Mandatory')
        } else if (addressInput.trim().split('\n').length < 2) {
            setIsAddressError(true)
            setAddressError('Enter address for two lines')
        } else {
            setIsAddressError(false)
            setAddressError('')
        }
    }

    const onPhoneChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const phoneInput = Number(event.target.value)
        setPhone(phoneInput)

        if (isNaN(phoneInput)) {
            setIsPhoneError(true)
            setPhoneError('Mandatory')
        } else if (phoneInput.toString().length != 10) {
            setIsPhoneError(true)
            setPhoneError('Enter a valid phone no.')
        } else {
            setIsPhoneError(false)
            setPhoneError('')
        }
    }

    const onPinCodeChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const pincodeInput = Number(event.target.value)
        setPinCode(pincodeInput);

        if (isNaN(pincodeInput)) {
            setIsPinCodeError(true)
            setPinCodeError('Mandatory')
        } else if (pincodeInput.toString().length != 6) {
            setIsPinCodeError(true)
            setPinCodeError('Enter a 6-digit pincode')
        } else {
            setIsPinCodeError(false)
            setPinCodeError('')
        }
    }

    const countries = ['India', 'United States', 'Europe', 'Russia']

    const onCountryChange = (event: SelectChangeEvent<string>) => {
        const countryInput = event.target.value
        setCountry(countryInput)

        if (countryInput.trim() === '') {
            setIsCountryError(true)
            setCountryError('Select any one Country')
        } else {
            setIsCountryError(false)
            setCountryError('')
        }
    }

    const onConditionChange = (event: ChangeEvent<HTMLInputElement>) => {
        const checkedInput = event.target.checked
        setIsChecked(checkedInput)

        if (!checkedInput) {
            setIsCheckedError(true)
            setCheckedError('Mandatory')
        } else {
            setIsCheckedError(false)
            setCheckedError('')
        }
            
    }

    const onDateChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const dateInput = event.target.value
        setDate(dateInput)

        if (dateInput.trim() === '') {
            setIsDateError(true)
            setDateError('Mandatory')
        } else {
            setIsDateError(false)
            setDateError('')
        }
    }

    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`
                Username: ${username}
                Email: ${email}
                Age: ${age}
                Gender: ${gender}\n
                Address: ${address}
                Phone: +91${phone}
                Pincode: ${pinCode}
                Country: ${country}\n
                Terms & Conditios: ${isChecked}
                Date: ${date}
            `)
        setUsername('')
        setEmail('')
        setAge(0)
        setGender('')
        setAddress('')
        setPhone(0)
        setPinCode(0)
        setCountry('')
        setIsChecked(false)
        setDate('')
    } 

    return (
       <Box>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Fill the form and get the alert while submit the form with form validation
                </Typography>

                <form onSubmit={(event) => {handleSubmit(event)}}>
                    <TextField 
                        required
                        id="outlined-required"
                        name="username"
                        label='User Name'
                        value={username}
                        onChange={(event) => {onUsernameChange(event)}}
                        margin="normal"
                        fullWidth
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
                        error={isEmailError}
                        helperText={emailError}
                    />

                    <TextField
                        required
                        label="Age"
                        value={age}
                        onChange={(event) => {onAgeChange(event)}}
                        fullWidth
                        margin="normal"
                        error={isAgeError}
                        helperText={ageError}
                    />

                    <FormControl component="fieldset" margin="normal" error={isGenderError}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            row name="gender"
                            value={gender}
                            onChange={(event) => {onGenderChange(event)}}
                        >
                            <FormControlLabel value="Male" control={<Radio />} label="Male" />
                            <FormControlLabel value="Female" control={<Radio />} label="Female" />
                            <FormControlLabel value="Rather Not Say" control={<Radio />} label="Rather Not Say" />
                        </RadioGroup>
                        <FormHelperText>{genderError}</FormHelperText>
                    </FormControl>

                    <TextField
                        label="Address"
                        name="address"
                        value={address}
                        onChange={(event) => {onAddressChange(event)}}
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                        error={isAddressError}
                        helperText={addressError}
                    />

                    <TextField
                        label="Phone (+91)"
                        type="number"
                        name="phone"
                        value={phone}
                        onChange={(event) => {onPhoneChange(event)}}
                        fullWidth
                        margin="normal"
                        error={isPhoneError}
                        helperText={phoneError}
                    />  

                    <TextField
                        label="Pin Code"
                        type="number"
                        name="pinCode"
                        value={pinCode}
                        onChange={(event) => {onPinCodeChange(event)}}
                        fullWidth
                        margin="normal"
                        error={isPinCodeError}
                        helperText={pinCodeError}
                    /> 

                    <FormControl fullWidth margin="normal" error={isCountryError}>
                        <InputLabel>Country</InputLabel>
                        <Select
                            name="country"
                            value={country}
                            onChange={(event) => {onCountryChange(event)}}
                        >
                            {countries.map((country, index) => (
                                <MenuItem key={index} value={country}>
                                    {country}
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>{countryError}</FormHelperText>
                    </FormControl>

                    <FormControl margin="normal" error={isCheckedError}>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isChecked}
                                        onChange={(event) => {onConditionChange(event)}}
                                        name="isChecked"
                                    />
                                }
                                label="Agree to Terms & Conditions"
                            />
                        </FormGroup>
                        <FormHelperText>{CheckedError}</FormHelperText>
                    </FormControl>

                    <TextField 
                        // label='Form Submission Date:'
                        name="date"
                        type='datetime-local'
                        value={date}
                        onChange={(event) => {onDateChange(event)}}
                        fullWidth
                        margin="normal"
                        error={isDateError}
                        helperText={dateError}
                    />

                    <Button type="submit" variant="contained">Submit</Button>
                </form>
            </Container>
       </Box>
    )
}

export default Task_8;