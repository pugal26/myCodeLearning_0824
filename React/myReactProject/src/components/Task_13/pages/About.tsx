import Box from '@mui/material/Box'
import RootLayout from '../RootLayout'

const About = () => {
  return (
    <div>
        <Box sx={{ display: 'flex' }}>    
            <RootLayout />           
            <Box component='main' sx={{ flexGrow: 1, p: 3 }}>               
                <h1>About</h1>
            </Box>
        </Box>
    </div>
  )
}

export default About