import { Box, Container, Grid2, TextField, Typography } from "@mui/material";
import axios from "axios"
import React, { useState } from "react"

type UserData = {
    gender: string;
    name: { title: string; first: string; last: string };
    location: { street: { number: number; name: string }; city: string; state: string; country: string; postcode: number };
    email: string;
    dob: { date: string; age: number };
    phone: string;
    cell: string;
}

const Task_14 = () => {

    const baseUrl = 'https://randomuser.me/api/'

    const [user, setUser] = useState<UserData | null>(null)

    React.useEffect(() => {
        axios.get(baseUrl).then((response) => {
            const result = response.data.results[0];
            setUser(result)
        });
    }, []);

    if (!user) return <div>Loading...</div>

    return (
        <Box sx={{ width: 'fit-content', marginLeft: 42 }}>
            <Container>
                <Typography variant="h6" sx={{ textDecoration: 'underline', my:2 }}>
                    Fetch user data from randomuser API using <strong>React Axios</strong>
                </Typography>
                <Grid2 container spacing={7}>
                    <TextField
                        id="outlined-controlled"
                        label='Name:'
                        value={`${user.name.title} ${user.name.first} ${user.name.last}`}
                        margin="normal"
                    />
                    <TextField
                        id="outlined-controlled"
                        label='Gender:'
                        value={user.gender}
                        margin="normal"
                    />
                </Grid2>

                <Grid2 container spacing={7}>
                    <TextField
                        id="outlined-controlled"
                        label='DOB:'
                        value={user.dob.date}
                        margin="normal"
                    />
                    <TextField
                        id="outlined-controlled"
                        label='Age:'
                        value={user.dob.age}
                        margin="normal"
                    />
                </Grid2>

                <TextField
                    id="outlined-multiline-flexible"
                    label='Location:'
                    value={`
                            ${user.location.street.number}, ${user.location.street.name},
                            ${user.location.city}, ${user.location.state},
                            ${user.location.country}, ${user.location.postcode}.
                        `}
                    margin="normal"
                    multiline
                    rows={5}
                    fullWidth
                />

                <TextField
                    id="outlined-controlled"
                    label='E-mail:'
                    value={user.email}
                    margin="normal"
                    fullWidth
                />

                <Grid2 container spacing={7}>
                    <TextField
                        id="outlined-controlled"
                        label='Phone:'
                        value={user.phone}
                        margin="normal"
                    />
                    <TextField
                        id="outlined-controlled"
                        label='Cell:'
                        value={user.cell}
                        margin="normal"
                    />
                </Grid2>

            </Container>
        </Box>

    )
}

export default Task_14