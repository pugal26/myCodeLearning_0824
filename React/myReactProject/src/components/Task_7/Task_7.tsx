import { ChangeEvent, FormEvent, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import '@fontsource/roboto/300.css';
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";


const Task_7 = () => {

    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [age, setAge] = useState<number>(0);
    const [gender, setGender] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [phone, setPhone] = useState<number>(0);
    const [pinCode, setPinCode] = useState<number>(0);
    const [country, setCountry] = useState<string>('');
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [date, setDate] = useState<string>('');

    const onUserNameChange = (event:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setUserName(event.target.value)
    }

    const onEmailChange = (event:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const onAgeChange = (event:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        // Number(event.target.value)
        setAge(Number(event.target.value))
        // console.log(typeof Number(event.target.value));
    }

    const onGenderChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setGender(event.target.value)
    }

    const onAddressChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setAddress(event.target.value)
    }

    const onPhoneChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setPhone(Number(event.target.value))
    }

    const onPinCodeChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setPinCode(Number(event.target.value))
    }

    const countries = ['India', 'United States', 'Europe', 'Russia']

    const onCountryChange = (event: SelectChangeEvent<string>) => {
        setCountry(event.target.value)
    }

    const onConditionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked)
    }

    const onDateChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setDate(event.target.value)
    }


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`
                Name: ${userName}
                Email: ${email}
                Age: ${age}
                Gender: ${gender}\n
                Address: ${address}
                Phone: (+91) ${phone}
                Pin Code: ${pinCode}
                Country: ${country}\n
                Terms & Conditios: ${isChecked}
                Date: ${date}
            `);
        setUserName('')
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
                <Typography variant="h3" gutterBottom>
                    Fill the form and get the alert while submit the form.
                </Typography>
                <form onSubmit={(event) => {handleSubmit(event)}}>
                    <TextField
                        name="username"
                        label='User Name'
                        value={userName}
                        onChange={(event) => {onUserNameChange(event)}}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Email"
                        name="email"
                        value={email}
                        onChange={(event) => {onEmailChange(event)}}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Age"
                        value={age}
                        onChange={(event) => {onAgeChange(event)}}
                        fullWidth
                        margin="normal"
                    />

                    <FormControl component="fieldset" margin="normal">
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
                    />

                    <TextField
                        label="Phone (+91)"
                        type="number"
                        name="phone"
                        value={phone}
                        onChange={(event) => {onPhoneChange(event)}}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Pin Code"
                        type="number"
                        name="pinCode"
                        value={pinCode}
                        onChange={(event) => {onPinCodeChange(event)}}
                        fullWidth
                        margin="normal"
                    />

                    <FormControl fullWidth margin="normal">
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
                    </FormControl>

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
                    
                    <TextField 
                        // label='Form Submission Date:'
                        name="date"
                        type='datetime-local'
                        value={date}
                        onChange={(event) => {onDateChange(event)}}
                        fullWidth
                        margin="normal"
                    />
                    

                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>

                </form>
            </Container>
        </Box>
    )
}

export default Task_7;