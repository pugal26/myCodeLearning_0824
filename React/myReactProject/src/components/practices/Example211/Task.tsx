import Delete from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

interface TaskProps {
    id: number;
    title: string;
    description: string;
    onDelete: (id:number) => void;
}

const Task: React.FC<TaskProps> = ({ id, title, description, onDelete }) => {

    return (
        <div>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="h5">{description}</Typography>
            <Button onClick={() => onDelete(id)} variant="contained" color="error">
                Delete
            </Button>
        </div>
    )
}

export default Task;