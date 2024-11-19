import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../../Task_11/Pages/Home"
import About from "../../Task_11/Pages/About"
import Contact from "../../Task_11/Pages/Contact"
import Login from "../../Task_11/Pages/Login"
import Index from "./Index"


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                index: true,
                element: <Index />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]        
    },
    {
        path:'/login',
        element: <Login />
    }
])

const RoutePractice = () => {
  
    return <RouterProvider router={router} />
}

export default RoutePractice