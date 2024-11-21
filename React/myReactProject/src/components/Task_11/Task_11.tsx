import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import { Box } from '@mui/material'
import RootLayout from '../Task_13/pages/RootLayout'


const Task_11 = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      <RootLayout />
      <Routes>
        <Route path='/home' index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Box>

  )
}

export default Task_11