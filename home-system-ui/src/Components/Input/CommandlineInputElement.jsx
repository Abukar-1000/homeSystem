import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import CodeIcon from '@mui/icons-material/Code';
import { Box } from "@mui/material";
import { useState } from "react";

export default function CommandlineInputElement({ text }) {

    const [inputText, setInputText] = useState(text);
    return (
        <Box
            sx={{
                display: 'flex', 
                alignItems: 'flex-end',
                paddingBottom: "5px"
            }}    
        >
            <CodeIcon
                sx={{
                    color: "#fff",
                    width: "fit-content",
                    paddingRight: "10px",
                }}
            />
            <Input
                id="input-with-icon-adornment"
                value={inputText}
                onChange={(event) => {
                    setInputText(prev => event.target.value);
                }}
                sx={{
                    color: "#fff",
                    display: "block",
                    width: "90%",
                    marginBottom: "none",
                    paddingBottom: "none",
                }}
            />
        </Box>
    );
}