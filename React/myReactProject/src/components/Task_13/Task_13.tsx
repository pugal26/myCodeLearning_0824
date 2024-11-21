import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Task_1 from '../Task_1/Task_1'
import Task_2 from '../Task_2/Task_2'
import Task_3 from '../Task_3/Task_3'
import Task_4 from '../Task_4/Task_4'
import Task_5 from '../Task_5/Task_5'
import Task_6 from '../Task_6/Task_6'
import Task_7 from '../Task_7/Task_7'
import Task_8 from '../Task_8/Task_8'
import Task_9 from '../Task_9/Task_9'
import Task_10 from '../Task_10/Task_10'
import Task_11 from '../Task_11/Task_11'

const Task_13 = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/task_1' element={<Task_1 />}></Route>
                <Route path='/task_2' element={<Task_2 />}></Route>
                <Route path='/task_3' element={<Task_3 />}></Route>
                <Route path='/task_4' element={<Task_4 />}></Route>
                <Route path='/task_5' element={<Task_5 />}></Route>
                <Route path='/task_6' element={<Task_6 />}></Route>
                <Route path='/task_7' element={<Task_7 />}></Route>
                <Route path='/task_8' element={<Task_8 />}></Route>
                <Route path='/task_9' element={<Task_9 />}></Route>
                <Route path='/task_10' element={<Task_10 />}></Route>
                <Route path='/task_11' element={<Task_11 />}></Route>
            </Routes>
        </Router>
    </>
  )
}

export default Task_13