import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export const Header = () => {
  return (
    <header>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" color="textPrimary">
          Mushroom Classification App
        </Typography>
      </Box>
    </header>
  );
};
