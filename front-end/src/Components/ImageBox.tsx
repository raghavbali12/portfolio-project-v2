import { Box, Fade } from "@mui/material";
import { useRef } from "react";
import { useIsInViewport } from "../HelperFunctions/useIsInViewport";

function ImageBox(props: {source: string, horizontalAlignment?: string, verticalAlignment?: string}) {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIsInViewport(ref);

    return (
        <div className={`${props.verticalAlignment === "bottom" ? 'content-image-bottom' : ''}`}>
            <Fade in={isVisible} appear={true} timeout={5000}>
                <Box 
                    ref={ref}
                    className=
                    {`content-image 
                    ${props.horizontalAlignment === "left" ? 'content-image-left' : props.horizontalAlignment === "right" ? 'content-image-right' : ''}`}
                    component="img" 
                    src={props.source}
                    >
                </Box>
            </Fade>
        </div>
    )
}

export default ImageBox;