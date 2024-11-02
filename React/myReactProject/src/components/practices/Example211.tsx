import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FormEvent, useState } from "react";

interface LoginFormProps {
    onSubmit: (email: string, password: string) => void;
}

const Example211: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(email, password);
    };


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <form onSubmit={handleSubmit}>
                <TextField 
                    label='Email'
                    type="email"
                    variant="outlined"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />

                <TextField 
                    label='Password'
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />

                <Button variant="outlined" color="secondary" type="submit">Login</Button>
            </form>
        </Box>
    )
}

export default Example211;