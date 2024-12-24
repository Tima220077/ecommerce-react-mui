import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2E3B55', marginTop: 'auto' }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
          <Typography variant="body1" sx={{ color: '#E6A23C' }}>
            © {new Date().getFullYear()} Not a Company. All rights belong to me.
          </Typography>
          <Box>
            <Tooltip title="GitHub">
              <IconButton color="inherit" href="https://github.com/Tima220077">
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Telegram">
              <IconButton color="inherit" href="https://t.me/whyrw">
                <TelegramIcon />
              </IconButton>
            </Tooltip>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
