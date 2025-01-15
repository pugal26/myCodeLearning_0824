import './task_15.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import OpenInNew from '@mui/icons-material/OpenInNew'
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/joy/IconButton';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

interface UserData {
    gender: string;
    name: { title: string; first: string; last: string };
    location: { street: { number: number; name: string }; city: string; state: string; country: string; postcode: number };
    email: string;
    dob: { date: string; age: number };
    phone: string;
    cell: string;
    picture: { large: string };
}


const Task_15 = () => {

    const baseUrl = 'https://randomuser.me/api/'
    const [user, setUser] = useState<UserData | null>(null);
    const navigate = useNavigate();


    useEffect(() => {
        getUserInput();
    }, []);

    const getUserInput = async () => {
        try {
            let response = await axios.get(baseUrl)
            setUser(response.data.results[0]);
        } catch (error) {
            console.log(error)
        }
    }

    if (!user) return <Box  sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '100vh',
                            }}>
                            <CircularProgress size="5rem" />
                        </Box>

    // console.log(user.email)

    const goToMoreDetails = () => {
        navigate('/more-details', { state: { user } });
    }

    return (
        <Box>
            <Container sx={{ width: '720px', mt: 15 }}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100px',
                                background: 'lightgrey'
                            }}
                        >
                            <div className='profile_image_div'><img src={user.picture.large} alt='profileImg' className='profile_image'></img></div>
                        </CardMedia>

                        <CardContent sx={{ mt: '60px' }}>
                            <Typography gutterBottom variant='h5' component='div' sx={{ textAlign: 'center' }}>
                                {`${user.name.title}. ${user.name.first} ${user.name.last}`}
                            </Typography>
                            <Typography variant='body2' sx={{ color: 'text.secondary', textAlign: 'center' }}>
                                {user.email}
                            </Typography>
                            <Typography variant='body2' sx={{ color: 'text.secondary', textAlign: 'center' }}>
                                {user.phone}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Box>
                            <IconButton
                                aria-label="Open in new tab"
                                onClick={goToMoreDetails}
                                sx={{ textDecoration: 'none' }}
                            >
                                For More Details..
                                <OpenInNew />
                            </IconButton>
                        </Box>
                    </CardActions>
                </Card>
            </Container>
        </Box>
    )
}

export default Task_15