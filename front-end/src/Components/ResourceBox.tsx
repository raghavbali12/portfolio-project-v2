import { Box, Fade, Tooltip } from "@mui/material";
import PDFLogo from "../Content/Images/pdf-logo.png";
import LinkedInLogo from "../Content/Images/linkedin-logo.png";
import GitHubLogo from "../Content/Images/github-logo.jpg";
import { useEffect, useState } from "react";
import Resume from "../Content/Documents/Resume.pdf"

function ResourceBox() {
    const [show, setShow] = useState<boolean>(false);
    
    useEffect(() => {
        setTimeout(() => {
        setShow(true);
        }, 3500);
    }, [])

    return (
        <Fade in={show} appear={false} timeout={3000}>
            <Box 
            className='resource-box'>
                <Tooltip title="View my resume" arrow>
                    <a href={Resume} target="_blank">
                        <Box 
                            component="img" 
                            className="resource-icon"
                            src={PDFLogo}
                            >
                        </Box>
                    </a>
                </Tooltip>
                <Tooltip title="View my LinkedIn profile" arrow>
                    <a href="https://www.linkedin.com/in/raghav-bali/" target="_blank">
                        <Box 
                            component="img" 
                            className="resource-icon"
                            src={LinkedInLogo}
                            >
                        </Box>
                    </a>
                </Tooltip>
                <Tooltip title="View my GitHub profile" arrow>
                    <a href="https://github.com/raghavbali12" target="_blank">
                        <Box 
                            component="img" 
                            className="resource-icon"
                            src={GitHubLogo}
                            >
                        </Box>
                    </a>
                </Tooltip>
            </Box>
        </Fade>
    )
}

export default ResourceBox;