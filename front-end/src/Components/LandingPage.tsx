import { Box, Button, Fade, Typography } from "@mui/material";
import ResourceBox from "./ResourceBox";
import { useState, useEffect } from "react";

function LandingPage() {
  const [showLightButtons, setShowLightButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLightButtons(true);
    }, 3000);

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <div className="landing-page">
      <Box display="block">
        <Typography
          className="landing-page-text"
          paddingTop="5%"
          variant="h3"
          color="#09111b"
        >
          Hi, my name is Raghav Bali
        </Typography>
        <Typography
          className="landing-page-text"
          marginTop="2%"
          variant="h5"
          color="#09111b"
        >
          I'm a software developer from Madison, Wisconsin. <br />
          Learn more about me by exploring my website!
        </Typography>
        <Fade in={true} timeout={3000}>
          <div style={{ marginTop: "2%" }}>
            <ResourceBox />
          </div>
        </Fade>
        {showLightButtons && (
          <Fade in={true} timeout={3000}>
            <Box
              display="flex"
              justifyContent="space-evenly"
              marginLeft="20%"
              marginRight="20%"
              marginTop="2%"
            >
              <Button
                variant="contained"
                color="primary"
                className="light-button"
                sx={{ marginTop: "20%" }}
              >
                Background
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="light-button"
                sx={{ marginBottom: "20%" }}
              >
                Work Experience
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="light-button"
                sx={{ marginTop: "20%" }}
              >
                Hobbies
              </Button>
            </Box>
          </Fade>
        )}
      </Box>
    </div>
  );
}

export default LandingPage;
