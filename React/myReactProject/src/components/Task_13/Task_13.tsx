import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Task_1 from '../Task_1/Task_1'
import Task_2 from '../Task_2/Task_2'

const Task_13 = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/task_1' element={<Task_1 />}></Route>
                <Route path='/task_2' element={<Task_2 />}></Route>
            </Routes>
        </Router>
    </>
  )
}

export default Task_13