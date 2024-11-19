import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import RootLayout from './Pages/RootLayout'


const Task_11 = () => {

  const router = createBrowserRouter(createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={ router }></RouterProvider>
  )
}

export default Task_11