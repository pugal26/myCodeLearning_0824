import { Outlet } from 'react-router-dom'

import { Box } from '@mui/material'

import RootLayout from '../Task_13/pages/RootLayout'
import NavBar from './Pages/NavBar'
// import RootLayout from '../Task_13/pages/RootLayout'


const Task_11 = () => {

  return (
    <Box sx={{ display: 'flex', mt:5 }}>
      <RootLayout />
      <Box>
        <NavBar />
        <Outlet />
      </Box>
    </Box>

  )
}

export default Task_11