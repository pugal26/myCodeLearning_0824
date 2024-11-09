import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Autocomplete from "@mui/material/Autocomplete";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import { Chip } from "@mui/material";
import { Key } from "@mui/icons-material";



const Task_9 = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [code, setCode] = useState<{ code: string; label: string; phone: string } | null>(null);
    const [phone, setPhone] = useState<number>(0);
    const [country, setCountry] = useState<string>('');
    const [hobby, setHobby] = useState<string[]>([]);
    const [language, setLanguage] = useState<string[]>([]);
    const [program, setProgram] = useState<string[]>([]);
    const [interested, setInterested] = useState<string[]>([]);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [date, setDate] = useState<string>('');

    const onNameChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const nameInput = event.target.value
        setName(nameInput);
    }

    const onEmailChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const emailInput = event.target.value
        setEmail(emailInput);
    }

    const onGenderChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const genderInput = event.target.value
        setGender(genderInput)
    }

    const onAddressChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const addressInput = event.target.value
        setAddress(addressInput)
    }

    const countriesCode = [
        { code: 'IN', label: 'India', phone: '+91' },
        { code: 'US', label: 'United States', phone: '+1' },
        { code: 'FR', label: 'France', phone: '+33' },
        { code: 'RU', label: 'Russia', phone: '+7' },
    ];

    const onCodeChange = (
        event: React.SyntheticEvent,
        value: { code: string; label: string; phone: string } | null
    ) => {
        setCode(value);
    };


    const onPhoneChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const phoneInput = Number(event.target.value)
        setPhone(phoneInput)
    }

    const countries = ['India', 'United States', 'Europe', 'Russia'];

    const onCountryChange = (event: SelectChangeEvent<string>) => {
        const countryInput = event.target.value
        setCountry(countryInput)
    }

    const hobbies = ['Gardening', 'Painting', 'Reading Books', 'Playing Carrom', 'None of these'];

    const onhobbyChange = (event: SelectChangeEvent<typeof hobbies>) => {
        const { target: { value }, } = event;
        setHobby(typeof value === 'string' ? value.split(',') : value,)
    }

    const lanuages = ['Tamil', 'English', 'French', 'Malayalam', 'Hindi', 'Urudu', 'Kannadam', 'Telugu'];

    const onLanguageChange = (event: SelectChangeEvent<typeof lanuages>) => {
        const { target: {value}, } = event;
        setLanguage(typeof value === 'string' ? value.split(',') : value,)
    }

    const programmes = ['HTML', 'JavaScript', 'TypeScript', 'React', 'AngularJS']

    const onProgramChange = (event: SelectChangeEvent<typeof programmes>) => {
        const { target: {value}, } = event;
        setProgram(typeof value === 'string' ? value.split(',') : value,)
    }

    const interestedAreas = ['Web Design', 'Web Development', 'React', 'Full-Stack', 'UI/UX', 'Back-end']
    
    const onInterestedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { options } = event.target;
        const value: string[] = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setInterested(value);
    }


    const onConditionChange = (event: ChangeEvent<HTMLInputElement>) => {
        const conditionInput = event.target.checked
        setIsChecked(conditionInput)
    }

    const onDateChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const dateInput = event.target.value
        setDate(dateInput)
    }


    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`
                Name: ${name}
                Email: ${email}
                Gender: ${gender}\n
                Address: ${address}\n
                Phone: ${code?.phone} ${phone}
                Country: ${country}\n
                Hobbies: ${hobby}
                Languages: ${language}
                Program Know: ${program}
                Interested Area: ${interested}
                Terms & Conditios: ${isChecked}
                Date: ${date}
            `)
        setName('');
        setEmail('');
        setGender('');
        setAddress('');
        setCode(null);
        setPhone(0);
        setCountry('');
        setHobby([]);
        setLanguage([]);
        setProgram([]);
        setInterested([]);
        setIsChecked(false);
        setDate('');
    }

    return (
        <Box>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Fill the form and get the alert while submit the form.
                </Typography>
                <form onSubmit={(event) => { handleFormSubmit(event) }}>
                    <TextField
                        name="name"
                        type="text"
                        label='Full Name'
                        value={name}
                        onChange={(event) => { onNameChange(event) }}
                        margin="normal"
                    /> <br />

                    <TextField
                        name="email"
                        type="email"
                        label='E-Mail'
                        value={email}
                        onChange={(event) => { onEmailChange(event) }}
                        margin="normal"
                    /> <br />

                    <FormControl component="fieldset" margin="normal">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            row name="gender"
                            value={gender}
                            onChange={(event) => { onGenderChange(event) }}
                        >
                            <FormControlLabel value="Male" control={<Radio />} label="Male" />
                            <FormControlLabel value="Female" control={<Radio />} label="Female" />
                            <FormControlLabel value="Rather Not Say" control={<Radio />} label="Rather Not Say" />
                        </RadioGroup>
                    </FormControl> <br />

                    <TextField
                        label="Address"
                        name="address"
                        value={address}
                        onChange={(event) => { onAddressChange(event) }}
                        multiline
                        rows={4}
                        margin="normal"
                    /> <br />

                    <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 210, my:1 }}
                        options={countriesCode}
                        value={code}
                        onChange={onCodeChange}
                        getOptionLabel={(option) => `${option.label} (${option.phone})`}
                        renderOption={(props, option) => {
                            const { key, ...optionProps } = props;
                            return (
                                <Box key={key} component="li" {...optionProps}>
                                    {option.label} ({option.code}) {option.phone}
                                </Box>
                            );
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Choose a Country Code"
                            />
                        )}
                    />

                    <TextField
                        label="Contact No."
                        type="number"
                        name="phone"
                        value={phone}
                        onChange={(event) => { onPhoneChange(event) }}
                        margin="normal"
                    /> <br />

                    <FormControl margin="normal" sx={{ width: 210 }}>
                        <InputLabel>Country</InputLabel>
                        <Select
                            name="country"
                            value={country}
                            onChange={(event) => { onCountryChange(event) }}
                        >
                            {countries.map((country, index) => (
                                <MenuItem key={index} value={country}>
                                    {country}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl> <br />

                    <FormControl sx={{ width: 210, my:1 }}>
                            <InputLabel id='demo-multiple-name-label'>Hobby</InputLabel>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={hobby}
                                onChange={(event) => {onhobbyChange(event)}}
                                input={<OutlinedInput label='Hobby' />}
                                renderValue={(selected) => selected.join(',')}
                            >
                                {hobbies.map((hobbyList) => (
                                    <MenuItem key={hobbyList} value={hobbyList}>
                                        <Checkbox checked={hobby.includes(hobbyList)} />
                                        <ListItemText primary={hobbyList} />
                                    </MenuItem>
                                ))}
                            </Select>
                    </FormControl>

                    <FormControl sx={{ width: 210, m: 1 }}>
                        <InputLabel id='multiple-chip-label'>Languages Known</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            value={language}
                            onChange={(event) => {onLanguageChange(event)}}
                            input={<OutlinedInput id='select-multiple-chip' label='Language Know'/>}
                            renderValue={(selected) => (
                                <Box sx={{ display:'flex', flexWrap:'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                        >
                            {lanuages.map((languagesList) => (
                                <MenuItem
                                    key={languagesList}
                                    value={languagesList}
                                >
                                    {languagesList}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    
                    <FormControl sx={{ width: 210, m: 1 }}>
                        <Select
                            multiple
                            displayEmpty
                            value={program}
                            onChange={(event) => {onProgramChange(event)}}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <em>Programming Language</em>
                                }

                                return selected.join(',');
                            }}
                        >
                            <MenuItem disabled value=''>
                                <em>Programming Language</em>
                            </MenuItem>
                            {programmes.map((programList) => 
                                <MenuItem
                                    key={programList}
                                    value={programList}    
                                >
                                    {programList}
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl> <br/>

                    <FormControl>
                            <InputLabel shrink htmlFor='select-multiple-native'>Interested</InputLabel>
                            <Select<string[]>
                                multiple
                                native
                                value={interested}
                                onChange={(event) => {onInterestedChange(event)}}
                                label='Interested'
                            >
                                {interestedAreas.map((interest) => (
                                    <option key={interest} value={interest}>
                                        {interest}
                                    </option>
                                ))}
                            </Select>
                    </FormControl>       

                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={isChecked}
                                    onChange={(event) => { onConditionChange(event) }}
                                    name="isChecked"
                                />
                            }
                            label="Agree to Terms & Conditions"
                        />
                    </FormGroup> <br />

                    <TextField
                        // label='Form Submission Date:'
                        name="date"
                        type='datetime-local'
                        value={date}
                        onChange={(event) => { onDateChange(event) }}
                        margin="normal"
                    /> <br />


                    <Button variant="contained" type="submit">Submit</Button>
                </form>
            </Container>

        </Box>
    )
}

export default Task_9;