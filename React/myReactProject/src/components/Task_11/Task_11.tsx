import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import RootRoute from './Pages/RootRoute'
import { Box } from '@mui/material'
import RootLayout from '../Task_13/pages/RootLayout'


const Task_11 = () => {

  const router = createBrowserRouter(createRoutesFromElements(
      <Route path='/' element={<RootRoute />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
      </Route>
    )
  );

  return (
    <Box>
      <RootLayout />
      <RouterProvider router={ router }></RouterProvider>
    </Box>
    
  )
}

export default Task_11