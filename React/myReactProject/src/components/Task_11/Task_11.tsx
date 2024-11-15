import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import Login from './Pages/Login'


const Task_11 = () => {
  return (
    <Router>
      <Box sx={{ display:'flex', justifyContent:'space-around', alignItems:'center' , my: 3 }}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/login'><Button variant='outlined'>Login</Button></Link>
      </Box><hr />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default Task_11