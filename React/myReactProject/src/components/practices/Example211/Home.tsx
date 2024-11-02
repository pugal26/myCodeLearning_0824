import { useState } from "react"
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";


const Home = () => {
       
    const [tasks, setTasks] = useState ([
        { id: 1, title: 'Task 1', description: 'This is task 1' },
        { id: 2, title: 'Task 2', description: 'This is task 2' }
    ]); 

    const addTask = (title:string, description:string) => {
        setTasks([...tasks, { id: tasks.length + 1, title, description }])
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            <TaskList tasks={tasks} onDelete={deleteTask} />
            <TaskForm onSubmit={addTask} />
        </div>
    )
}

export default Home