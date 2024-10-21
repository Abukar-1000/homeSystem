import { createContext, useContext, useState } from "react";
import { CommandLineModalConfig } from "./CommandLineModalHeaderCommands";


const CommandLineModalContextMetaData = {
    width: CommandLineModalConfig.width.md,
    height: CommandLineModalConfig.height.md,
    isVisible: true,
    transitionDirection: "up",
}

const CommandLineModalContext = createContext(CommandLineModalContextMetaData);

export function CommandLineModalContextProvider({ children }) {

    const [commandLineModalState, dispatch] = useState(CommandLineModalContextMetaData);
    return (
        <CommandLineModalContext.Provider value={{
            commandLineModalState: commandLineModalState,
            dispatch: dispatch
        }}>
            {children}
        </CommandLineModalContext.Provider>
    );
}

export function useCommandLineModalContext() {
    return useContext(CommandLineModalContext);
}