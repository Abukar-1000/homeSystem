import { createContext, useContext, useState } from "react"


const CommandLineMessageContextState = {
    allMesseges: [],
    currentMessage: "",
}

const CommandLineMessageContext = createContext(CommandLineMessageContextState);

export function CommandLineMessageContextProvider({ children }) {
    const [state, dispatch] = useState(CommandLineMessageContextState);
    return (
        <CommandLineMessageContext.Provider value={{
            state: state, 
            dispatch: dispatch
        }} >
            { children }
        </CommandLineMessageContext.Provider>
    )
}

export function useCommandLineMessageContext() {
    return useContext(CommandLineMessageContext);
}