import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="section" sx={{ p: 2, backgroundColor: 'primary.main' }}>
      <Container>
        <Typography 
        variant="body2" 
        color='white'
            sx= {{ textAlign: 'center' }}
            >
            © 2025 Just A Shop
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;