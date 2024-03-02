import { Box, Button, Fade, Typography } from "@mui/material";
import ResourceBox from "./ResourceBox";
import { useState, useEffect } from "react";
import ProfilePicture from "./ProfilePicture";

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
        <Fade in={true} timeout={4000}>
          <div style={{ marginTop: "1%" }}>
            <ProfilePicture />
          </div>
        </Fade>
        <Typography
          className="landing-page-text"
          marginTop="1%"
          variant="h5"
          color="#09111b"
        >
          I'm a software developer from Madison, Wisconsin. <br />
          Learn more about me by exploring my website!
        </Typography>
        <Fade in={true} timeout={3000}>
          <div style={{ marginTop: "1%" }}>
            <ResourceBox />
          </div>
        </Fade>
        {showLightButtons && (
          <Fade in={true} timeout={3000}>
            <div>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginTop="3%"
              >
                <Button
                  variant="contained"
                  color="primary"
                  className="light-button"
                >
                  Work Experience
                </Button>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                marginTop="2%"
              >
                <Button
                  variant="contained"
                  color="primary"
                  className="light-button"
                >
                  Background
                </Button>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                marginTop="2%"
              >
                <Button
                  variant="contained"
                  color="primary"
                  className="light-button"
                >
                  Hobbies
                </Button>
              </Box>
            </div>
          </Fade>
        )}
      </Box>
    </div>
  );
}

export default LandingPage;
