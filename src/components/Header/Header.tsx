import {FC} from 'react';
import { Typography,Box } from '@mui/material/';

export const Header:FC = () => {
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
