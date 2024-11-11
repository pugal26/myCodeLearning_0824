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
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ListSubheader from "@mui/material/ListSubheader";




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
    const [workType, setWorkType] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false)
    const [experince, setExperince] = useState<string>('');
    const [opendialog, setOpenDialog] = useState<boolean>(false);
    const [HTMLgroup, setHTMLGroup] = useState<string>('');
    const [reactGroup, setReactGroup] = useState<string>('');
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [date, setDate] = useState<string>('');
    
    
    //Name function, input type text
    const onNameChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const nameInput = event.target.value
        setName(nameInput);
    }

    //Email function, input type email
    const onEmailChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const emailInput = event.target.value
        setEmail(emailInput);
    }

    //Gender function, input type radio
    const onGenderChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const genderInput = event.target.value
        setGender(genderInput)
    }

    //Address Function, input type text
    const onAddressChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const addressInput = event.target.value
        setAddress(addressInput)
    }

    //phone code function, input type autocomplete
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

    //phone function, input type number
    const onPhoneChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const phoneInput = Number(event.target.value)
        setPhone(phoneInput)
    }

    //countries function, input type dropdown
    const countries = ['India', 'United States', 'Europe', 'Russia'];

    const onCountryChange = (event: SelectChangeEvent<string>) => {
        const countryInput = event.target.value
        setCountry(countryInput)
    }

    //hobbies function, input type dropdown checkbox
    const hobbies = ['Gardening', 'Painting', 'Reading Books', 'Playing Carrom', 'None of these'];

    const onhobbyChange = (event: SelectChangeEvent<typeof hobbies>) => {
        const { target: { value }, } = event;
        setHobby(typeof value === 'string' ? value.split(',') : value,)
    }

    //lanuages function, input type dropdown chip
    const lanuages = ['Tamil', 'English', 'French', 'Malayalam', 'Hindi', 'Urudu', 'Kannadam', 'Telugu'];

    const onLanguageChange = (event: SelectChangeEvent<typeof lanuages>) => {
        const { target: {value}, } = event;
        setLanguage(typeof value === 'string' ? value.split(',') : value,)
    }

    //programming function, input type dropdown placeholder
    const programmes = ['HTML', 'JavaScript', 'TypeScript', 'React', 'AngularJS']

    const onProgramChange = (event: SelectChangeEvent<typeof programmes>) => {
        const { target: {value}, } = event;
        setProgram(typeof value === 'string' ? value.split(',') : value,)
    }

    //Interested ares function, input type native display
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


    //work type function, dropdown with button to open it.
    const OnWorkTypeChange = (event: SelectChangeEvent<typeof workType>) => {
        setWorkType(event.target.value)
    }

    //dropdown btn close function
    const handleClose = (event: React.SyntheticEvent) => {
        setOpen(false);
    }

    //dropdown btn open function
    const handleOpen = (event: React.SyntheticEvent) => {
        setOpen(true);
    }

    //year's experince 
    const onExperinceChange = (event: SelectChangeEvent<typeof experince>) => {
        setExperince(event.target.value || '')
    }

    //experince dialog box button open
    const handleClickOpen = () => {
        setOpenDialog(true)
    }

    //experince dialog box button close
    const handleClickClose = (event: React.SyntheticEvent<unknown>, reason? : string) => {
        if (reason !== 'backdropClick') {
            setOpenDialog(false);
        }
    }

    //group dropdown function
    const onHTMLGroupChange = (event: SelectChangeEvent<string>) => {
        setHTMLGroup(event.target.value);
    };

    //group dropdown function
    const onReactGroupChange = (event: SelectChangeEvent<string>) => {
        setReactGroup(event.target.value);
    };

    //terms and condition true or false function
    const onConditionChange = (event: ChangeEvent<HTMLInputElement>) => {
        const conditionInput = event.target.checked
        setIsChecked(conditionInput)
    }

    //date function
    const onDateChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const dateInput = event.target.value
        setDate(dateInput)
    }

    //form submit function
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
                Preferred Work Type: ${workType}
                Experince: ${experince}
                Components: ${HTMLgroup}, ${reactGroup}
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
        setWorkType('');
        setOpen(false);
        setExperince('');
        setOpenDialog(false);
        setHTMLGroup('');
        setReactGroup('');
        setIsChecked(false);
        setDate('');
    }

    return (
        <Box>
            <Container>
                {/* Heading */}
                <Typography variant="h4" gutterBottom>
                    Fill the form and get the alert while submit the form.
                </Typography>
                <form onSubmit={(event) => { handleFormSubmit(event) }}>
                    {/* Name Input */}
                    <TextField
                        name="name"
                        type="text"
                        label='Full Name'
                        value={name}
                        onChange={(event) => { onNameChange(event) }}
                        margin="normal"
                    /> <br />

                    {/* Email Input */}
                    <TextField
                        name="email"
                        type="email"
                        label='E-Mail'
                        value={email}
                        onChange={(event) => { onEmailChange(event) }}
                        margin="normal"
                    /> <br />

                    {/* Radio Button Input for Gender */}
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

                    {/* Address Input */}
                    <TextField
                        label="Address"
                        name="address"
                        value={address}
                        onChange={(event) => { onAddressChange(event) }}
                        multiline
                        rows={4}
                        margin="normal"
                    /> <br />

                    {/* Autocomplete input for select country code and type to search */}
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

                    {/* Contact no. input number */}
                    <TextField
                        label="Contact No."
                        type="number"
                        name="phone"
                        value={phone}
                        onChange={(event) => { onPhoneChange(event) }}
                        margin="normal"
                    /> <br />

                    {/* Dropdown for country */}
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

                    {/* Checkbox dropdown for hobby */}
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
                    
                    {/* Chip dropdown for languages */}
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
                    
                    {/* Placeholder dropdown for programming */}
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

                    {/* Native & display all with scroll bar dropdown for intereseted areas*/}
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
                    </FormControl> <br />

                    <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen} >Open the select</Button>
                    <FormControl sx={{ width: 210, my: 1}}>  
                            <InputLabel id='demo-controlled-open-select-label'>Preferred Work Type:</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={open}
                                onClose={(event) => {handleClose(event)}}
                                onOpen={(event) => {handleOpen(event)}}
                                value={workType}
                                label='Preferred Work Type:'
                                onChange={(event) => {OnWorkTypeChange(event)}}
                            >
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value='In-Person'>In-Person</MenuItem>
                                <MenuItem value='WFH'>Work From Home</MenuItem>
                                <MenuItem value='Hybrid'>Hybrid</MenuItem>
                            </Select>
                    </FormControl>   

                    {/* Dialog box with dropdown for work type  */}
                    <Button variant="contained" sx={{ m:2, mt:2 }} onClick={handleClickOpen}>Open Select Dialog</Button>
                    <Dialog disableEscapeKeyDown open={opendialog} onClose={handleClickClose}>
                        <DialogTitle>Fill the Form</DialogTitle>
                        <DialogContent>
                            <Box component='form' sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                <FormControl sx={{ m:1, minWidth: 120 }}>
                                    <InputLabel>Experince</InputLabel>
                                    <Select
                                        native
                                        value={experince}
                                        onChange={(event) => {onExperinceChange(event)}}
                                        input={<OutlinedInput label='Experince' id="demo-dialog-native" />}
                                    >
                                        <option aria-label="None" value='' />
                                        <option value="Fresher">Fresher</option>
                                        <option value="Below One Year">Below One Year</option>
                                        <option value="One to Five Years">One to Five Year</option>
                                        <option  value="More than Five Years">More than Five Year</option>
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ m:1, minWidth: 120 }}>
                                    <InputLabel id='demo-dialog-select-label'></InputLabel>
                                    <Select
                                        labelId="demo-dialog-select-label"
                                        id="demo-dialog-select"
                                        value={experince}
                                        onChange={(event) => {onExperinceChange(event)}}
                                        input={<OutlinedInput label='Years' />}
                                    >
                                        <MenuItem value=''><em>None</em></MenuItem>
                                        <MenuItem value="Fresher">Fresher</MenuItem>
                                        <MenuItem value="Below One Year">Below One Year</MenuItem>
                                        <MenuItem value="One to Five Years">One to Five Years</MenuItem>
                                        <MenuItem value="More than Five Years">More than Five Years</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClickClose}>Cancel</Button>
                            <Button onClick={handleClickClose}>Ok</Button>
                        </DialogActions>    
                    </Dialog>
                    
                    {/* group dropdown for experience */}
                    <FormControl sx={{ m:1, minWidth: 120 }}>
                        <InputLabel htmlFor='grouped-native-select'>HTML Components</InputLabel>
                        <Select
                            native
                            value={HTMLgroup}
                            onChange={(event) => {onHTMLGroupChange(event)}}
                            id='grouped-native-select'
                            label='HTML Components'
                        >
                            <option aria-label="None" value="" />
                            <optgroup label="HTML">
                                <option value='Heading Tag'>Heading Tag</option>
                                <option value='Paragraph Tag'>Paragraph Tag</option>
                                <option value='Button Tag'>Button Tag</option>
                            </optgroup>
                            <optgroup label="Events">
                                <option value='OnClick'>Onclick</option>
                                <option value='OnSubmit'>OnSubmit</option>
                                <option value='OnChange'>OnChange</option>
                            </optgroup>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m:1, minWidth: 120 }}>  
                        <InputLabel htmlFor='grouped-select'>React Components</InputLabel> 
                        <Select
                            id='grouped-select' 
                            label='React Components'
                            value={reactGroup}
                            onChange={(event) => {onReactGroupChange(event)}}
                        >
                            <MenuItem value=''>
                                <em>None</em>
                            </MenuItem>
                            <ListSubheader>Components</ListSubheader>
                            <MenuItem value='TextField'>TextField</MenuItem>
                            <MenuItem value='AutoComplete'>AutoComplete</MenuItem>
                            <MenuItem value='Box'>Box</MenuItem>
                            <ListSubheader>React Form Components</ListSubheader>
                            <MenuItem value='FormControl'>FormControl</MenuItem>
                            <MenuItem value='InputLabel'>InputLabel</MenuItem>
                            <MenuItem value='FormLabel'>FormLabel</MenuItem>
                        </Select>
                    </FormControl>

                    {/* terms and condition check box for true or false */}
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

                    {/* date picker input of date submission */}
                    <TextField
                        // label='Form Submission Date:'
                        name="date"
                        type='datetime-local'
                        value={date}
                        onChange={(event) => { onDateChange(event) }}
                        margin="normal"
                    /> <br />

                    {/* btn to submit the form */}
                    <Button variant="contained" type="submit">Submit</Button>
                </form>
            </Container>
        </Box>
    )
}

export default Task_9;