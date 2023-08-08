import React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';

const Footer = () => {
  return (
    <Box>
      <Paper elevation={3} style={{ background: '#FF0000', color: '#FFFFFF' }}>
        <BottomNavigation>
          <Grid sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px'}}>
            <Typography
              sx={{
                fontFamily: 'impact',
                letterSpacing: '.1rem',
                fontSize: '26px',
              }}
            >
              <Link to="/" style={{ color: '#FF2625', opacity:"80%", textDecoration: 'none' }}>
                Fitness Friend
              </Link>
            </Typography>
          </Grid>
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Footer;
