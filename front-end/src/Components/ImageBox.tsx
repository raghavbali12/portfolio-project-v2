import { Box, Fade } from "@mui/material";
import ChildhoodPic from "../Content/Images/childhood-pic.jpg";
import { isVisible } from "@testing-library/user-event/dist/utils";
import { useRef } from "react";
import { useIsInViewport } from "../HelperFunctions/useIsInViewport";

function ImageBox(props: {source: string}) {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIsInViewport(ref);

    return (
        <div ref={ref}>
            <Fade in={isVisible} appear={true} timeout={5000}>
                <Box 
                    className="content-image"
                    component="img" 
                    src={props.source}
                    >
                </Box>
            </Fade>
        </div>
    )
}

export default ImageBox;