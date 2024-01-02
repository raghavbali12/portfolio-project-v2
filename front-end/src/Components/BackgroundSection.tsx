import { Box, Fade, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useIsInViewport } from "../HelperFunctions/useIsInViewport";
import ChildhoodPicture from '../Content/Images/childhood-pic.jpg'
import IndiaPicture from '../Content/Images/india-pic.jpeg'
import ImageBox from "./ImageBox";


function BackgroundSection() {

    return (
        <div>
            <Box className="content-box-section">
            <Typography className="content-box-section-header content-text" variant="h3">Background</Typography>
            <Box className="content-flex-container">
                <ImageBox source={ChildhoodPicture} horizontalAlignment="left" />
                <Box>
                    <Typography 
                        variant="h5" 
                        className="content-text"
                    >
                    I was originally born in Bangalore in the south of India.
                    My dad worked as an executive for a number of global businesses,
                    so we would move a lot in my early childhood. My mum, dad, older sister
                    and I would move halfway across the world to Warsaw, Poland by the time I was
                    4 years old. <br />
                    I spent three years in Poland, where my family was part of a medium-sized
                    group of Indian expatriates. We bonded over our shared culture and the
                    trepidation of being far from home. <br />
                    When I was 7, my family moved once again to the United States; Manhattan to be
                    more precise. New York city was like a dreamland for a kid like me, and seemed 
                    like a wonderful concrete playground. I got used to the hustle and bustle
                    of the city and the rigid, but beautiful architecture. <br />
                    Two years later, my family moved again, this time back to Delhi, India: my homeland.
                    I spent the next ten years there growing up, going to school, making friends, and 
                    re-learning my native tongue. <br />
                    I lived in Delhi until 2014, at which point I went back to the United States to attend
                    college at Haverford College in Pennsylvania.
                    </Typography>
                </Box>
                <ImageBox source={IndiaPicture} horizontalAlignment="right" verticalAlignment="bottom" />
            </Box>
            </Box>
        </div>
    )
}

export default BackgroundSection;