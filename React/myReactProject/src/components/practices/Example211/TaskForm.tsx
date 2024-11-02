import { Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";

interface TaskFormProps {
    onSubmit: (title:string, description:string) => void;
    task?:{ title:string; description:string };
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, task }) => {

    const [title, setTitle] = useState(task ? task.title : '');
    const [description, setDescription] = useState(task ? task.description : '');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(title, description);
        setTitle('')
        setDescription('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField 
                label='Title'
                name="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                fullWidth
                margin="normal"
            />

            <TextField
                label='Description'
                name="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                fullWidth
                margin="normal" 
            />

            <Button 
                type="submit"
                variant="outlined"
                color="secondary"
            >   
                Submit
            </Button>
        </form>
    );
}

export default TaskForm;