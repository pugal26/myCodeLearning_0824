import { Box, Button } from "@mui/material"
import { NavLink, useNavigate } from "react-router-dom"

const NavBar = () => {

    const navigate = useNavigate();

  return (
    <div>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', my: 3 }}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <Button variant="contained" onClick={() =>navigate('/login')}>Login</Button>
      </Box><hr />
    </div>
  )
}

export default NavBar