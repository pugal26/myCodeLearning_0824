import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import { useLocation } from 'react-router-dom'
import CardHeader from '@mui/material/CardHeader'


const MoreDetails = () => {

    const location = useLocation();
    const user = location.state?.user;

    if (!user) return <div>No user data available.</div>;

    return (
        <Box>
            <Container sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                <Card sx={{ maxWidth: 475, background:'#f5f5f5' }}>
                    <CardHeader
                        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                        title='Additional Information'
                        action={
                            <div>
                                <img
                                    src={user.picture.thumbnail}
                                    alt='thumbnail'
                                    style={{ borderRadius: '50%', width: '40px', height: '40px' }} />
                            </div>
                        }
                    />

                    <CardContent>
                        <Typography variant='body1' sx={{ textTransform: 'capitalize' }}>
                            {`Age: ${user.dob.age} / Gender: ${user.gender}`}
                        </Typography>
                        <Divider sx={{ marginY: 1 }} />
                        <Typography variant='body1'>
                            Location:
                            <br />
                            {`${user.location.street.number}, ${user.location.street.name},`}
                            <br />
                            {`${user.location.city}, ${user.location.state}.`}
                            <br />
                            {`Zip Code - ${user.location.postcode}`}
                        </Typography>
                        <Divider sx={{ marginY: 1 }} />
                        <Typography variant='body1'>
                            {`Time Zone: ${user.location.timezone.description}`}
                        </Typography>
                        <Divider sx={{ marginY: 1 }} />
                        <Typography variant='body1'>
                            Login Credentials:
                            <br />
                            {`User Name: ${user.login.username}`}
                            <br />
                            {`Password: ${user.login.password}`}
                        </Typography>
                        <Divider sx={{ marginY: 1 }} />
                        <Typography variant='body1'>
                            {`ID: ${user.id.name} / Registered Date: ${user.registered.date}`}
                        </Typography>
                        <Divider sx={{ marginY: 1 }} />
                        <Typography variant='body1'>
                            {`Contact Cell : ${user.cell}`}
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    )
}

export default MoreDetails