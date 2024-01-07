import { Box, AppBar, Toolbar, IconButton, Typography, Button, Fade } from '@mui/material';
import PDFLogo from '../Content/Images/pdf-logo.png';
import GitHubLogo from '../Content/Images/github-logo.jpg';
import LinkedInLogo from '../Content/Images/linkedin-logo.png';
import { useEffect, useState } from 'react';

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
                    <AppBar position="absolute" style={{ backgroundColor: '#09111b' }}>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            ></IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Raghav Bali
                            </Typography>
                            <Box sx={{ display: 'flex', gap: '8px' }}>
                                <Box
                                    className="content-image"
                                    component="img"
                                    src={PDFLogo}
                                ></Box>
                                <Box
                                    className="content-image"
                                    component="img"
                                    src={GitHubLogo}
                                ></Box>
                                <Box
                                    className="content-image"
                                    component="img"
                                    src={LinkedInLogo}
                                ></Box>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Fade>
            )}
        </Box>
    );
}

export default Navbar;