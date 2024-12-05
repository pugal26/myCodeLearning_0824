import { Box, Card, CardContent, Divider, Grid2, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

type UserData = {
    gender: string;
    name: { title: string; first: string; last: string };
    location: {
        street: { number: number; name: string }; city: string;
        state: string; country: string; postcode: number
    };
    email: string;
    dob: { date: string; age: number };
    phone: string;
    cell: string;
}


const Task_14a = () => {

    const baseUrl = 'https://randomuser.me/api/0.8/?results=10'

    const [users, setUsers] = useState<UserData[] | null>(null);

    React.useEffect(() => {
        axios.get(baseUrl).then((response) => {
            const result = response.data.results.map((item: any) => item.user);
            setUsers(result)
            console.log(result);
        });
    }, []);

    if (!users) return <div>Loading...</div>

    return (
        <Box sx={{ padding: 2 }}>
            <Typography
                variant="h6"
                sx={{
                    textDecoration: "underline",
                    marginBottom: 2,
                    textAlign: "center",
                }}
            >
                Fetch User Data from RandomUser API using <strong>React Axios</strong>
            </Typography>

            <Grid2
                container
                spacing={2}
                justifyContent="center"
            >
                {users.map((user, index) => (
                    <Grid2 key={index} xs={12} sm={6} md={4} lg={3}>
                        <Card
                            variant="outlined"
                            sx={{
                                width: "100%",
                                padding: 2,
                                borderRadius: 2,
                                boxShadow: 2,
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6">
                                    {user.name.title} {user.name.first} {user.name.last}
                                </Typography>
                                <Divider sx={{ marginY: 1 }} />
                                <Typography variant="body1">
                                    Age: {user.dob.age} / Gender: {user.gender}
                                </Typography>
                                <Divider sx={{ marginY: 1 }} />
                                <Typography variant="body2">
                                    Address:
                                    <br />
                                    {`${user.location.street.number}, ${user.location.street.name},`}
                                    <br />
                                    {`${user.location.city}, ${user.location.state},`}
                                    <br />
                                    {`${user.location.country} - ${user.location.postcode}`}
                                </Typography>
                                <Divider sx={{ marginY: 1 }} />
                                <Typography variant="body2">
                                    Phone: {user.phone}
                                    <br />
                                    Cell: {user.cell}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    )
}

export default Task_14a