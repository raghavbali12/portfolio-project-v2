import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Fade,
  Tooltip,
} from "@mui/material";
import PDFLogo from "../Content/Images/pdf-logo.png";
import GitHubLogo from "../Content/Images/github-logo.jpg";
import LinkedInLogo from "../Content/Images/linkedin-logo.png";
import Resume from "../Content/Documents/Resume.pdf";
import { useEffect, useState } from "react";

function Navbar() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {isLoaded && (
        <Fade in={true} timeout={5000}>
          <AppBar position="absolute" style={{ backgroundColor: "#09111b" }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
              <Typography
                className="navbar-text"
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Raghav Bali
              </Typography>
              <Box sx={{ display: "flex", gap: "8px" }}>
                <Tooltip title="View my resume" arrow>
                  <a href={Resume} target="_blank" rel="noreferrer">
                    <Box
                      className="content-image"
                      component="img"
                      src={PDFLogo}
                    ></Box>
                  </a>
                </Tooltip>
                <Tooltip title="View my GitHub profile" arrow>
                  <a
                    href="https://github.com/raghavbali12"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Box
                      className="content-image"
                      component="img"
                      src={GitHubLogo}
                    ></Box>
                  </a>
                </Tooltip>
                <Tooltip title="View my LinkedIn profile" arrow>
                  <a
                    href="https://www.linkedin.com/in/raghav-bali/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Box
                      className="content-image"
                      component="img"
                      src={LinkedInLogo}
                    ></Box>
                  </a>
                </Tooltip>
              </Box>
            </Toolbar>
          </AppBar>
        </Fade>
      )}
    </Box>
  );
}

export default Navbar;
