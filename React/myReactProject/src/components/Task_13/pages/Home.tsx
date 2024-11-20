import RootLayout from '../RootLayout'
import Box from '@mui/material/Box'

const Home = () => {
  return (
    <div>
        <Box sx={{ display: 'flex' }}>
            <RootLayout />            
            <Box component='main' sx={{ flexGrow: 1, p: 3 }}>               
                <h1>Home</h1>
            </Box>
        </Box>
    </div>
  )
}

export default Home