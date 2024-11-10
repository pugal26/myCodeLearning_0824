import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import TextField from "@mui/material/TextField";


const AutoExample = () => {

    const [code, setCode] = useState<{ code: string; label: string; phone: string } | null>(null);

    const countriesCode = [
        { code: 'IN', label: 'India', phone: '+91' },
        { code: 'US', label: 'United States', phone: '+1' },
        { code: 'FR', label: 'France', phone: '+33' },
        { code: 'RU', label: 'Russia', phone: '+7' },
    ];

    const onCodeChange = (
        event: React.SyntheticEvent,
        value: { code: string; label: string; phone: string } | null
    ) => {
        setCode(value);
    };


    return (
        <Autocomplete
            id="country-select-demo"
            sx={{ width: 210, my: 1 }}
            options={countriesCode}
            value={code}
            onChange={onCodeChange}
            getOptionLabel={(option) => `${option.label} (${option.phone})`}
            renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                    <Box key={key} component="li" {...optionProps}>
                        {option.label} ({option.code}) {option.phone}
                    </Box>
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a Country Code"
                />
            )}
        />
    )
} 

export default AutoExample;