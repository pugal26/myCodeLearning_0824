import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
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




const TestingTaskTen = () => {

    const [code, setCode] = useState<{ code: string; label: string; phone: string } | null>(null);
    const [phone, setPhone] = useState<number>(0);
    const [hobby, setHobby] = useState<string[]>([]);
    const [language, setLanguage] = useState<string[]>([]);
    const [program, setProgram] = useState<string[]>([]);
    const [interested, setInterested] = useState<string[]>([]);
    const [workType, setWorkType] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false)
    const [experience, setexperience] = useState<string>('');
    const [opendialog, setOpenDialog] = useState<boolean>(false);
    const [HTMLgroup, setHTMLGroup] = useState<string>('');
    const [reactGroup, setReactGroup] = useState<string>('');
    

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
    };

    //phone function, input type number
    const onPhoneChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const phoneInput = Number(event.target.value)
        setPhone(phoneInput)
    }

    //hobbies function, input type dropdown checkbox
    const hobbies = ['Gardening', 'Painting', 'Reading Books', 'Playing Carrom', 'None of these'];

    const onhobbyChange = (event: SelectChangeEvent<typeof hobbies>) => {
        const { target: { value }, } = event;
        setHobby(typeof value === 'string' ? value.split(',') : value);
    }

    //lanuages function, input type dropdown chip
    const lanuages = ['Tamil', 'English', 'French', 'Malayalam', 'Hindi', 'Urudu', 'Kannadam', 'Telugu'];

    const onLanguageChange = (event: SelectChangeEvent<typeof lanuages>) => {
        const { target: {value}, } = event;
        setLanguage(typeof value === 'string' ? value.split(',') : value)
    }

    //programming function, input type dropdown placeholder
    const programmes = ['HTML', 'JavaScript', 'TypeScript', 'React', 'AngularJS']

    const onProgramChange = (event: SelectChangeEvent<typeof programmes>) => {
        const { target: {value}, } = event;
        setProgram(typeof value === 'string' ? value.split(',') : value)
    }

    //Interested ares function, input type native display
    const interestedAreas = ['Web Design', 'Web Development', 'React', 'Full-Stack', 'UI/UX', 'Back-end']
    
    const onInterestedChange = (event: SelectChangeEvent<string[]>) => {
        const selectedOptions = Array.from((event.target as unknown as HTMLSelectElement).options)
            .filter(option => option.selected)
            .map(option => option.value)
        setInterested(selectedOptions);
    } 


    //work type function, dropdown with button to open it.
    const OnWorkTypeChange = (event: SelectChangeEvent<typeof workType>) => {
        setWorkType(event.target.value)
    }

    //dropdown btn close function
    const handleClose = (_event: React.SyntheticEvent) => setOpen(false);

    //dropdown btn open function
    const handleOpen = (_event: React.SyntheticEvent) => setOpen(true);

    //year's experience 
    const onexperienceChange = (event: SelectChangeEvent<typeof experience>) => {
        setexperience(event.target.value)
    }

    //experience dialog box button open
    const handleClickOpen = () => setOpenDialog(true)

    //experience dialog box button close
    const handleClickClose = (_event: React.SyntheticEvent<unknown>, reason? : string) => {
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



    //form submit function
    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`
                Phone: ${code?.phone} ${phone}
                Hobbies: ${hobby}
                Languages: ${language}
                Program Know: ${program}
                Interested Area: ${interested}
                Preferred Work Type: ${workType}
                experience: ${experience}
                Components: ${HTMLgroup}, ${reactGroup}                
            `)
        setCode(null);
        setPhone(0);        
        setHobby([]);
        setLanguage([]);
        setProgram([]);
        setInterested([]);
        setWorkType('');
        setOpen(false);
        setexperience('');
        setOpenDialog(false);
        setHTMLGroup('');
        setReactGroup('');        
    }

    return (
        <Box>
            <Container>
                {/* Heading */}
                <Typography variant="h4" gutterBottom>
                    Fill the form and get the alert while submit the form.
                </Typography>
                <form onSubmit={(event) => { handleFormSubmit(event) }}>
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
                                <Box key={option.code} component="li" {...optionProps}>
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
                                    <InputLabel>experience</InputLabel>
                                    <Select
                                        native
                                        value={experience}
                                        onChange={(event) => {onexperienceChange(event)}}
                                        input={<OutlinedInput label='experience' id="demo-dialog-native" />}
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
                                        value={experience}
                                        onChange={(event) => {onexperienceChange(event)}}
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

                    {/* btn to submit the form */}
                    <Button variant="contained" type="submit">Submit</Button>
                </form>
            </Container>
        </Box>
    )
}

export default TestingTaskTen;