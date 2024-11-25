import { Outlet } from 'react-router-dom'
import RootLayout from './RootLayout'
import Box from '@mui/material/Box'

const Home = () => {
  return (
    <div>
        <Box sx={{ display: 'flex' }}>
            <RootLayout />            
            <Box component='main' sx={{ flexGrow: 1, p: 5 }}>               
                <h1>Test</h1>
            </Box>
            <Outlet />
        </Box>
    </div>
  )
}

export default Home