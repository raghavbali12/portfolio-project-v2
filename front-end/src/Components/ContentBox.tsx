import { Box, Fade, Typography } from "@mui/material";
import React from "react";
import { useRef, useEffect, useState } from "react";
import IntroText from "./IntroText";
import BackgroundSection from "./BackgroundSection";

function ContentBox() {
    const [show, setShow] = useState<boolean>(false);

    const controlContentBox = () => {
        if (window.scrollY > 100) {
            setShow(true);
        }
        else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlContentBox);
        return () => {
            window.removeEventListener('scroll', controlContentBox);
        }
    }, []);

    return (
        <Fade in={show} appear={true} timeout={2000}>
            <Box className='content-box'>
                    <IntroText />
                    <BackgroundSection />
            </Box>
        </Fade>
    );
}

export default ContentBox;