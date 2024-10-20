import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import CommandLineModal from './Components/Input/CommandLineModal';

function App() {

    const messages = [
      "Rihanna is so beautiful",
      "Your looking for a reason to be mad",
      "Dont be mad",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Your looking for a reason to be mad",
      "Dont be mad",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Your looking for a reason to be mad",
      "Dont be mad",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Your looking for a reason to be mad",
      "Dont be mad",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
      "Rihanna is so beautiful",
  ];


  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignContent={"center"}
      gap={"1rem"}
      width={"100dvw"}
      height={"100dvh"}
    >
      <CommandLineModal messages={messages}/>
    </Box>
  );
}

export default App;
