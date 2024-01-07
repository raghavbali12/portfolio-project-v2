import { Box, Typography } from "@mui/material";

function LandingPage() {
  return (
    <div className="landing-page">
        <Box display='block'>
            <Typography className="landing-page-text" paddingTop="7%" variant="h3" color="#09111b">
                Hi, my name is Raghav Bali
            </Typography>
            <Typography className="landing-page-text" marginTop="2%" variant="h5" color="#09111b">
                I'm a software developer from Madison, Wisconsin. <br />
                Learn more about me by exploring my website!
            </Typography>
        </Box>
    </div>
  );
}

export default LandingPage;