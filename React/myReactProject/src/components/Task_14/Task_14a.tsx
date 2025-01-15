import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useState } from 'react'


interface UserData {
    gender: string;
    name: { title: string; first: string; last: string };
    location: {
        zip: number;
        street: { number: number; name: string }; city: string;
        state: string; country: string; postcode: number
    };
    email: string;
    dob: { date: string; age: number };
    phone: string;

}

const Task_14a = () => {

    const baseUrl = 'https://randomuser.me/api/0.8/?results=10'

    const [users, setUsers] = useState<UserData[] | null>(null);

    React.useEffect(() => {
        axios.get(baseUrl).then((response) => {
            const result = response.data.results.map((item: { user: UserData }) => item.user);
            setUsers(result)
            // console.log(result);
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
                spacing={8}
                justifyContent="center"
                columns={3}
            >
                {users.map((user, index) => (
                    <Grid2 key={index}>
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
                                <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>
                                    {user.name.title} {user.name.first} {user.name.last}
                                </Typography>
                                <Divider sx={{ marginY: 1 }} />
                                <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
                                    Age: {user.dob.age} / Gender: {user.gender}
                                </Typography>
                                <Divider sx={{ marginY: 1 }} />
                                <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                                    Location:
                                    <br />
                                    {`${user.location.street}, ${user.location.street},`}
                                    <br />
                                    {`${user.location.city}, ${user.location.state}.`}
                                    <br />
                                    {`Zip Code - ${user.location.zip}`}
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