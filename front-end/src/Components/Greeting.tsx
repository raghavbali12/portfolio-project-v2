import { Fade, Typography, Box  } from '@mui/material';
import { useEffect, useState } from 'react';

function Greeting() {
    const [showGreeting, setShowGreeting] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
        setShowGreeting(true);
        }, 1000);
    }, [])

    return (
        <Fade in={showGreeting} appear={false} timeout={3000}>
            <Box 
            display='flex' 
            justifyContent='center' 
            alignItems='center' 
            marginTop='30vh'>
                    <Typography 
                    className='greeting-text'
                    >
                        Welcome
                    </Typography>
                
            </Box>
        </Fade>
    )
        
}

export default Greeting;