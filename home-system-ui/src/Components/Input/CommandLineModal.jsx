import { Container, Fade, Paper, Slide } from '@mui/material';
import Box from '@mui/material/Box';
import CommandlineInputElement from './CommandlineInputElement';
import CircleIcon from '@mui/icons-material/Circle';
import { useCommandLineModalContext } from './CommandLineModalContext';
import { CommandLineModalConfig } from './CommandLineModalHeaderCommands';
import { useCommandLineMessageContext } from './CommandLineMessageContext';

function HeaderNavButton({
    onClick,
    children
}) {
    return (
        <Box
            onClick={(e) => {
                onClick();
            }}
            sx={{
                cursor: "pointer"
            }}
        >
            { children }
        </Box>
    );
}

function CommandLineModalHeader({}) {

    const { commandLineModalState, dispatch } = useCommandLineModalContext();
    return (
        <Box>
            <Box
                top={"10px"}
                display={"flex"}
                justifyContent={"end"}
                alignContent={"end"}
                paddingRight={"1rem"}
                paddingTop={"0.5rem"}
                paddingBottom={"0.5rem"}
                gap={"1rem"}
            >
                <HeaderNavButton
                    onClick={() => dispatch(prev => ({...prev, isVisible: !prev.isVisible }))}
                >
                    <CircleIcon sx={{ color: "#FD5D55"}} />
                </HeaderNavButton>

                <HeaderNavButton
                    onClick={() => dispatch(prev => {
                        const newWidth = (
                            commandLineModalState.width === CommandLineModalConfig.width.mx?
                                CommandLineModalConfig.width.md
                            :commandLineModalState.width === CommandLineModalConfig.width.md?
                                CommandLineModalConfig.width.sm
                            : commandLineModalState.width === CommandLineModalConfig.width.sm?
                                CommandLineModalConfig.width.md
                            : CommandLineModalConfig.width.md
                        );
                        return {
                            ...prev, 
                            width: newWidth 
                        }
                    })}
                >
                    <CircleIcon sx={{ color: "#FDBB2D"}}/>
                </HeaderNavButton>

                <HeaderNavButton
                    onClick={() => dispatch(prev => ({...prev, width: CommandLineModalConfig.width.mx }))}
                >
                    <CircleIcon sx={{ color: "#25C73F"}}/>
                </HeaderNavButton>                
            </Box>
        </Box>
    );
}

export default function CommandLineModal({
    messages
}) {

    const { commandLineModalState, dispatch } = useCommandLineModalContext();
    const {
        state: commandLineMessageContextState,
        dispatch: dispatchCMDMsg
    } = useCommandLineMessageContext();
    
    return (
        <Slide
            timeout={300}
            direction={"up"}
            in={commandLineModalState.isVisible}
        >
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
            >
                <Paper
                    elevation={24}
                    sx={{
                        borderRadius: "10px",
                    }}
                >
                    {/* 
                        - hide scroll bar from user 
                    */}
                    <Box
                        sx={{
                            backgroundColor: "#000",
                            height: "60vh",
                            width: commandLineModalState.width,
                            borderRadius: "10px",
                            overflow: "scroll",
                            scrollBehavior: "smooth",
                            scrollbarColor: "transparent",
                            position: "sticky",
                            scrollbarWidth: "none", // Hide the scrollbar for firefox
                            '&::-webkit-scrollbar': {
                                display: 'none', // Hide the scrollbar for WebKit browsers (Chrome, Safari, Edge, etc.)
                            },
                            '&-ms-overflow-style:': {
                                display: 'none', // Hide the scrollbar for IE
                            }

                        }}
                    >
                        <CommandLineModalHeader />
                        <Container 
                            maxWidth = "xxl"
                        >
                            {
                                commandLineMessageContextState.allMesseges.map(msg => <CommandlineInputElement text={msg} />)
                            }
                            <CommandlineInputElement text={""} />
                        </Container>
                    </Box>
                </Paper>
            </Box>
        </Slide>
    );
}