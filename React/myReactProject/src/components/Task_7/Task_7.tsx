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
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";

interface userInputData {
    userName: string
    email: string
    age: number
    gender: string
    address: string
    phone: number
    pinCode: number
    country: string
    isChecked: boolean
    date: string

}

const initialState = {
    userName: '',
    email: '',
    age: 0,
    gender: '',
    address: '',
    phone: 0,
    pinCode: 0,
    country: '',
    isChecked: false,
    date: ''
}

const Task_7 = () => {

    const [userName, setUserName] = useState<userInputData>(initialState);
    const [email, setEmail] = useState<userInputData>(initialState);
    const [age, setAge] = useState<userInputData>(initialState);
    const [gender, setGender] = useState<userInputData>(initialState);
    const [address, setAddress] = useState<userInputData>(initialState);
    const [phone, setPhone] = useState<userInputData>(initialState);
    const [pinCode, setPinCode] = useState<userInputData>(initialState);
    const [country, setCountry] = useState<userInputData>(initialState);
    const [isChecked, setIsChecked] = useState<userInputData>(initialState);

    const onUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName({ ...userName, userName: event.target.value })
    }

    const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail({ ...email, email: event.target.value })
    }

    const onAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAge({ ...age, age: event.target.valueAsNumber })
    }

    const onGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGender({ ...gender, gender: event.target.value })
    }

    const onAddressChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setAddress({ ...address, address: event.target.value })
    }

    const onPhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone({ ...phone, phone: event.target.valueAsNumber })
    }

    const onPinCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPinCode({ ...pinCode, pinCode: event.target.valueAsNumber })
    }

    const countries = ['India', 'United States', 'Europe', 'Russia']

    const onCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setCountry({ ...country, country: event.target.value })
    }

    const onCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked({ ...isChecked, isChecked: event.target.checked })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`
                Name: ${userName.userName}
                Email: ${email.email}
                Age: ${age.age}
                Gender: ${gender.gender}\n
                Address: ${address.address}
                Phone: (+91) ${phone.phone}
                Pin Code: ${pinCode.pinCode}
                Country: ${country.country}\n
                Terms & Conditios: ${isChecked.isChecked}
            `);
        setUserName(initialState)
        setEmail(initialState)
        setAge(initialState)
        setGender(initialState)
        setAddress(initialState)
        setPhone(initialState)
        setPinCode(initialState)
        setCountry(initialState)
        setIsChecked(initialState)
    }


    return (
        <Box>
            <Container>
                <Typography variant="h3" gutterBottom>
                    Fill the form and get the alert while submit the form.
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="outlined-required"
                        label='User Name'
                        value={userName.userName}
                        onChange={onUserNameChange}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Email"
                        name="email"
                        value={email.email}
                        onChange={onEmailChange}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Age"
                        type="number"
                        value={age.age}
                        onChange={onAgeChange}
                        fullWidth
                        margin="normal"
                    />

                    <FormControl component="fieldset" margin="normal">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            row name="gender"
                            value={gender.gender}
                            onChange={onGenderChange}>
                            <FormControlLabel value="Male" control={<Radio />} label="Male" />
                            <FormControlLabel value="Female" control={<Radio />} label="Female" />
                            <FormControlLabel value="Rather Not Say" control={<Radio />} label="Rather Not Say" />
                        </RadioGroup>
                    </FormControl>

                    <TextField
                        label="Address"
                        name="address"
                        value={address.address}
                        onChange={onAddressChange}
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Phone (+91)"
                        type="number"
                        name="phone"
                        value={phone.phone}
                        onChange={onPhoneChange}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Pin Code"
                        type="number"
                        name="pinCode"
                        value={pinCode.pinCode}
                        onChange={onPinCodeChange}
                        fullWidth
                        margin="normal"
                    />

                    <FormControl fullWidth margin="normal">
                        <InputLabel>Country</InputLabel>
                        <Select
                            name="country"
                            value={country.country}
                            onChange={onCountryChange}
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
                                    checked={isChecked.isChecked}
                                    onChange={onCheckChange}
                                    name="isChecked"
                                />
                            }
                            label="Agree to Terms & Conditions"
                        />
                    </FormGroup>

                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>

                </form>
            </Container>
        </Box>
    )
}

export default Task_7;