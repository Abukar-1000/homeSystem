import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import CommandLineModal from './Components/Input/CommandLineModal';
import { CommandLineModalContextProvider } from './Components/Input/CommandLineModalContext';
import { CommandLineMessageContextProvider } from './Components/Input/CommandLineMessageContext';

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
    <CommandLineModalContextProvider>
      <CommandLineMessageContextProvider>
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
      </CommandLineMessageContextProvider>
    </CommandLineModalContextProvider>
  );
}

export default App;
