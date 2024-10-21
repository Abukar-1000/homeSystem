import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import CodeIcon from '@mui/icons-material/Code';
import { Box } from "@mui/material";
import { useState } from "react";
import { useCommandLineMessageContext } from "./CommandLineMessageContext";

export default function CommandlineInputElement({ text }) {

    const [inputText, setInputText] = useState(text);
    const {state, dispatch} = useCommandLineMessageContext();
    return (
        <Box
            sx={{
                display: 'flex', 
                alignItems: 'flex-end',
                paddingBottom: "5px",
                width: "100%"
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
                disabled={text !== state.currentMessage}
                fullWidth={true}
                onChange={(event) => {
                    setInputText(prev => event.target.value);
                }}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        console.log("Enter fired,", event.target.value)
                        dispatch(prev => ({
                            allMesseges: [...prev.allMesseges, event.target.value],
                            currentMessage: ""
                        }));
                        setInputText("");
                    }
                }}
                sx={{
                    color: "#fff",
                    display: "block",
                    width: "90%",
                    marginBottom: "none",
                    paddingBottom: "none",
                    "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#fff",
                    }
                }}
            />
        </Box>
    );
}