import { Box, Tooltip } from "@mui/material";
import ResumeIcon from "../Content/Images/resume-icon.png";
import GitHubLogo from "../Content/Images/github-logo.jpg";
import LinkedInLogo from "../Content/Images/linkedin-logo.png";
import Resume from "../Content/Documents/Resume.pdf";

function ResourceBox() {
  return (
    <Box sx={{ display: "flex", gap: "50px", justifyContent: "center" }}>
      <Tooltip title="View my resume" arrow>
        <a href={Resume} target="_blank" rel="noreferrer">
          <Box className="content-image" component="img" src={ResumeIcon}></Box>
        </a>
      </Tooltip>
      <Tooltip title="View my GitHub profile" arrow color="primary">
        <a
          href="https://github.com/raghavbali12"
          target="_blank"
          rel="noreferrer"
        >
          <Box className="content-image" component="img" src={GitHubLogo}></Box>
        </a>
      </Tooltip>
      <Tooltip title="View my LinkedIn profile" arrow color="primary">
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
  );
}

export default ResourceBox;
