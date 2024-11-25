import { Box, Button } from "@mui/material"
import { NavLink, useNavigate } from "react-router-dom"

const NavBar = () => {

    const navigate = useNavigate();

  return (
    <div>
        <Box sx={{ mt:5, display:'flex', justifyContent:'space-between', alignItems:'center', mx:5 }}>
          <Box sx={{ display:'flex', gap:25}}>
            <NavLink to='home'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='contact'>Contact</NavLink>
            <Button variant="contained" onClick={() =>navigate('login')}>Login</Button>
          </Box>
      </Box><hr />
    </div>
  )
}

export default NavBar