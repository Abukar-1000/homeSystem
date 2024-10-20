import { Container, Fade, Paper, Slide } from '@mui/material';
import Box from '@mui/material/Box';
import CommandlineInputElement from './CommandlineInputElement';
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from 'react';

function HeaderNavButton({
    modalVisible,
    children
}) {
    return (
        <Box
            onClick={(e) => {
                modalVisible(false)
            }}
            sx={{
                cursor: "pointer"
            }}
        >
            { children }
        </Box>
    );
}
function CommandLineModalHeader({
    modalVisible
}) {

    return (
        <Box>
            <Box
                position={"sticky"}
                display={"flex"}
                justifyContent={"end"}
                alignContent={"end"}
                gap={"1rem"}
                paddingRight={"1rem"}
                paddingTop={"0.5rem"}
                paddingBottom={"0.5rem"}
            >
                <HeaderNavButton
                    modalVisible={modalVisible}
                >
                    <CircleIcon sx={{ color: "#FD5D55"}} />
                </HeaderNavButton>

                <HeaderNavButton
                    modalVisible={modalVisible}
                >
                    <CircleIcon sx={{ color: "#FDBB2D"}}/>
                </HeaderNavButton>

                <HeaderNavButton
                    modalVisible={modalVisible}
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

    const [modalVisible, setModalVisible] = useState(true);
    return (
        <Slide
            timeout={300}
            direction={"up"}
            in={modalVisible}
        >
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
            >
                <Paper
                    elevation={24}
                    sx={{
                        borderRadius: "10px"
                    }}
                >
                    {/* 
                        - hide scroll bar from user 
                    */}
                    <Box
                        sx={{
                            backgroundColor: "#000",
                            height: "60vh",
                            width: "90vw",
                            borderRadius: "10px",
                            overflow: "scroll",
                            scrollBehavior: "smooth",
                            scrollbarColor: "transparent",
                        }}
                    >
                        <CommandLineModalHeader modalVisible={setModalVisible}/>
                        <Container 
                            maxWidth = "lg"
                        >
                            {
                                messages.map(msg => <CommandlineInputElement text={msg} />)
                            }
                        </Container>
                    </Box>
                </Paper>
            </Box>
        </Slide>
    );
}