import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Task_15 from './Task_15'
import MoreDetails from './MoreDetails'

const Task_15Route = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Task_15 />} />
                <Route path='/more-details' element={<MoreDetails />}/>
            </Routes>
        </Router>
    )
}

export default Task_15Route