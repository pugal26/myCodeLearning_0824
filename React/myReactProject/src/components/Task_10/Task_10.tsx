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
import { FormHelperText } from "@mui/material";
import RootLayout from "../Task_13/pages/RootLayout";


const Task_10 = () => {

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
    
    
    const [nameError, setNameError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [genderError, setGenderError] = useState<string>('');
    const [addressError, setAddressError] = useState<string>(''); 
    const [codeError, setCodeError] = useState<string>(''); 
    const [phoneError, setPhoneError] = useState<string>('');
    const [countryError, setCountryError] = useState<string>('');
    const [hobbyError, setHobbyError] = useState<string>('');
    const [languageError, setLanguageError] = useState<string>('');
    const [programError, setProgramError] = useState<string>('');
    const [interestedError, setInterestedError] = useState<string>('');
    const [workTypeError, setWorkTypeError] = useState<string>('');
    const [experinceError, setExperinceError] = useState<string>('');
    const [HTMLgroupError, setHTMLGroupError] = useState<string>('');
    const [reactGroupError, setReactGroupError] = useState<string>('');
    const [CheckedError, setCheckedError] = useState<string>('');
    const [dateError, setDateError] = useState<string>('');



    const [isNameError, setIsNameError] = useState<boolean>(false);
    const [isEmailError, setIsEmailError] = useState<boolean>(false)
    const [isGenderError, setIsGenderError] = useState<boolean>(false);
    const [isAddressError, setIsAddressError] = useState<boolean>(false);
    const [isCodeError, setIsCodeError] = useState<boolean>(false);
    const [isPhoneError, setIsPhoneError] = useState<boolean>(false);
    const [isCountryError, setIsCountryError] = useState<boolean>(false);
    const [isHobbyError, setIsHobbyError] = useState<boolean>(false);
    const [isLanguageError, setIsLanguageError] = useState<boolean>(false);
    const [isProgramError, setIsProgramError] = useState<boolean>(false);
    const [isInterestedError, setIsInterestedError] = useState<boolean>(false);
    const [isWorkTypeError, setIsWorkTypeError] = useState<boolean>(false);
    const [isExperinceError, setIsExperinceError] = useState<boolean>(false);
    const [isHTMLgroupError, setIsHTMLGroupError] = useState<boolean>(false);
    const [isReactGroupError, setIsReactGroupError] = useState<boolean>(false);
    const [isCheckedError, setIsCheckedError] = useState<boolean>(false);
    const [isDateError, setIsDateError] = useState<boolean>(false);




    
    //Name function, input type text
    const onNameChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const nameInput = event.target.value
        setName(nameInput);

        if (nameInput.trim() === '') {
            setIsNameError(true);
            setNameError('Mandatory')
        } else if (name.length < 3)  {
            setIsNameError(true)
            setNameError('Username must be at least 3 characters');
        } else {
            setIsNameError(false)
            setNameError('');
        }
    }

    //Email function, input type email
    const onEmailChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const emailInput = event.target.value
        setEmail(emailInput);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.trim() === '') {
            setIsEmailError(true);
            setEmailError('Mandatory')
        } else if (!emailRegex.test(emailInput)) {
            setEmailError('Enter a valid email')
        } else {
            setIsEmailError(false);
            setEmailError('');
        }
    }

    //Gender function, input type radio
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

    //Address Function, input type text
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

    //phone code function, input type autocomplete
    const countriesCode = [
        { code: 'IN', label: 'India', phone: '+91' },
        { code: 'US', label: 'United States', phone: '+1' },
        { code: 'FR', label: 'France', phone: '+33' },
        { code: 'RU', label: 'Russia', phone: '+7' },
    ];

    const onCodeChange = (
        _event: React.SyntheticEvent,
        value: { code: string; label: string; phone: string } | null
    ) => {
        setCode(value);

        if (!value) {
            setIsCodeError(true)
            setCodeError('Mandatory')
        } else {
            setIsCodeError(false)
            setCodeError('')
        }
    };

    //phone function, input type number
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

    //countries function, input type dropdown
    const countries = ['India', 'United States', 'Europe', 'Russia'];

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

    //hobbies function, input type dropdown checkbox
    const hobbies = ['Gardening', 'Painting', 'Reading Books', 'Playing Carrom', 'None of these'];

    const onhobbyChange = (event: SelectChangeEvent<typeof hobbies>) => {
        const { target: { value }, } = event;
        const selectedHobbies = (typeof value === 'string' ? value.split(',') : value)
        setHobby(selectedHobbies)

        if (selectedHobbies.length === 0) {
            setIsHobbyError(true);
            setHobbyError('Mandatory')
        } else if (selectedHobbies.length >= 5) {
            setIsHobbyError(true);
            setHobbyError('You have selected all')
        } else {
            setIsHobbyError(false);
            setHobbyError('')
        }
    }

    //lanuages function, input type dropdown chip
    const lanuages = ['Tamil', 'English', 'French', 'Malayalam', 'Hindi', 'Urudu', 'Kannadam', 'Telugu'];

    const onLanguageChange = (event: SelectChangeEvent<typeof lanuages>) => {
        const { target: {value}, } = event;
        const languageInput = (typeof value === 'string' ? value.split(',') : value)
        setLanguage(languageInput);

        if (languageInput.length === 0) {
            setIsLanguageError(true);
            setLanguageError('Mandatory')
        } else if (languageInput.length < 2) {
            setIsLanguageError(true);
            setLanguageError('Select Minimum Two Languages')
        } else {
            setIsLanguageError(false);
            setLanguageError('')
        }
    }

    //programming function, input type dropdown placeholder
    const programmes = ['HTML', 'JavaScript', 'TypeScript', 'React', 'AngularJS']

    const onProgramChange = (event: SelectChangeEvent<typeof programmes>) => {
        const { target: {value}, } = event;
        const programInput = (typeof value === 'string' ? value.split(',') : value)
        setProgram(programInput)

        if (programInput.length === 0) {
            setIsProgramError(true);
            setProgramError('Mandatory')
        } else if (programInput.length < 3) {
            setIsProgramError(true);
            setProgramError('Select Minimum Two Languages')
        } else {
            setIsProgramError(false);
            setProgramError('')
        }

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

        if (!value) {
            setIsInterestedError(true)
            setInterestedError('Mandatory')
        } else {
            setIsInterestedError(false)
            setInterestedError('')
        }
    }

    //work type function, dropdown with button to open it.
    const OnWorkTypeChange = (event: SelectChangeEvent<typeof workType>) => {
        const workTypeInput = event.target.value
        setWorkType(workTypeInput)

        if (workTypeInput.trim() === '') {
            setIsWorkTypeError(true)
            setWorkTypeError('Select any one Country')
        } else {
            setIsWorkTypeError(false)
            setWorkTypeError('')
        }
    }

    //dropdown btn close function
    const handleClose = (_event: React.SyntheticEvent) => {
        setOpen(false);
    }

    //dropdown btn open function
    const handleOpen = (_event: React.SyntheticEvent) => {
        setOpen(true);
    }

    //year's experince 
    const onExperinceChange = (event: SelectChangeEvent<typeof experince>) => {
        const experinceInput = (event.target.value || '')
        setExperince(experinceInput)

        if (experinceInput.trim() === '') {
            setIsExperinceError(true)
            setExperinceError('Select any one Country')
        } else {
            setIsExperinceError(false)
            setExperinceError('')
        }
    }

    //experince dialog box button open
    const handleClickOpen = () => {
        setOpenDialog(true)
    }

    //experince dialog box button close
    const handleClickClose = (_event: React.SyntheticEvent<unknown>, reason? : string) => {
        if (reason !== 'backdropClick') {
            setOpenDialog(false);
        }
    }

    //group dropdown function
    const onHTMLGroupChange = (event: SelectChangeEvent<string>) => {
        const HTMLGroupInput = event.target.value
        setHTMLGroup(HTMLGroupInput);

        if (HTMLGroupInput.trim() === '') {
            setIsHTMLGroupError(true)
            setHTMLGroupError('Select any one Country')
        } else {
            setIsHTMLGroupError(false)
            setHTMLGroupError('')
        }
    };

    //group dropdown function
    const onReactGroupChange = (event: SelectChangeEvent<string>) => {
        const reactGroup = event.target.value
        setReactGroup(reactGroup);

        if (reactGroup.trim() === '') {
            setIsReactGroupError(true)
            setReactGroupError('Select any one Country')
        } else {
            setIsReactGroupError(false)
            setReactGroupError('')
        }

    };

    //terms and condition true or false function
    const onConditionChange = (event: ChangeEvent<HTMLInputElement>) => {
        const conditionInput = event.target.checked
        setIsChecked(conditionInput)

        if (!conditionInput) {
            setIsCheckedError(true)
            setCheckedError('Mandatory')
        } else {
            setIsCheckedError(false)
            setCheckedError('')
        }
    }

    //date function
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
        <Box sx={{ display: 'flex' }}>
            <RootLayout />
            <Container sx={{ marginTop: 10, marginBottom: 10 }}>
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
                        error={isNameError}
                        helperText={nameError}
                    /> <br />

                    {/* Email Input */}
                    <TextField                        
                        name="email"
                        type="email"
                        label='E-Mail'
                        value={email}
                        onChange={(event) => { onEmailChange(event) }}
                        margin="normal"
                        error={isEmailError}
                        helperText={emailError}
                    /> <br />

                    {/* Radio Button Input for Gender */}
                    <FormControl  component="fieldset" error={isGenderError} margin="normal">
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
                        <FormHelperText>{genderError}</FormHelperText>
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
                        error={isAddressError}
                        helperText={addressError}
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
                                error={isCodeError}
                                helperText={codeError}
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
                        error={isPhoneError}
                        helperText={phoneError}
                    /> <br />

                    {/* Dropdown for country */}
                    <FormControl  margin="normal" sx={{ width: 210 }} error={isCountryError}>
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
                        <FormHelperText>{countryError}</FormHelperText>
                    </FormControl> <br />

                    {/* Checkbox dropdown for hobby */}
                    <FormControl sx={{ width: 210, my:1 }} error={isHobbyError}>
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
                            <FormHelperText>{hobbyError}</FormHelperText>
                    </FormControl>
                    
                    {/* Chip dropdown for languages */}
                    <FormControl sx={{ width: 210, m: 1 }} error={isLanguageError}>
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
                        <FormHelperText>{languageError}</FormHelperText>
                    </FormControl>
                    
                    {/* Placeholder dropdown for programming */}
                    <FormControl sx={{ width: 210, m: 1 }} error={isProgramError}>
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
                        <FormHelperText>{programError}</FormHelperText>
                    </FormControl> <br/>

                    {/* Native & display all with scroll bar dropdown for intereseted areas*/}
                    <FormControl error={isInterestedError}>
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
                            <FormHelperText>{interestedError}</FormHelperText>
                    </FormControl> <br />

                    <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen} >Open the select</Button>
                    <FormControl sx={{ width: 210, my: 1}}  error={isWorkTypeError}>  
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
                            <FormHelperText>{workTypeError}</FormHelperText> 
                    </FormControl>   


                    {/* Dialog box with dropdown for work type  */}
                    <Button variant="contained" sx={{ m:2, mt:2 }} onClick={handleClickOpen}>Open Select Dialog</Button>
                    <Dialog disableEscapeKeyDown open={opendialog} onClose={handleClickClose}>
                        <DialogTitle>Fill the Form</DialogTitle>
                        <DialogContent>
                            <Box component='form' sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                <FormControl sx={{ m:1, minWidth: 120 }} error={isExperinceError}>
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
                                    <FormHelperText>{experinceError}</FormHelperText>
                                </FormControl>
                                <FormControl sx={{ m:1, minWidth: 120 }} error={isExperinceError}>
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
                                    <FormHelperText>{experinceError}</FormHelperText>
                                </FormControl>
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClickClose}>Cancel</Button>
                            <Button onClick={handleClickClose}>Ok</Button>
                        </DialogActions>    
                    </Dialog>
                    
                    {/* group dropdown for experience */}
                    <FormControl sx={{ m:1, minWidth: 120 }} error={isHTMLgroupError}>
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
                        <FormHelperText>{HTMLgroupError}</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ m:1, minWidth: 120 }} error={isReactGroupError}>  
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
                        <FormHelperText>{reactGroupError}</FormHelperText>
                    </FormControl>

                    {/* terms and condition check box for true or false */}
                    <FormControl  error={isCheckedError}>
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
                        </FormGroup> 
                        <FormHelperText>{CheckedError}</FormHelperText>   
                    </FormControl> <br />

                    {/* date picker input of date submission */}
                    <TextField                        
                        name="date"
                        type='datetime-local'
                        value={date}
                        onChange={(event) => { onDateChange(event) }}
                        margin="normal"
                        error={isDateError}
                        helperText={dateError}
                    /> <br />

                    {/* btn to submit the form */}
                    <Button sx={{ my: 2 }} variant="contained" type="submit">Submit</Button>
                </form>
            </Container>
        </Box>
    )
}

export default Task_10;