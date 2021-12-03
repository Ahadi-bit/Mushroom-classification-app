import {FC} from 'react'
import { Button, Paper, Typography, Container } from '@mui/material/';


interface TextProps {
  heading: string;
  subtitle?: string;
}


export const Text:FC<TextProps> = ({heading,subtitle}) => {
  return (
    <div>
      <Typography
          variant="h4"
          component="div"
          sx={{
            display: 'flex',
            marginTop: '15px',
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: '15px',
          }}
        >
          {heading}
        </Typography>
        {subtitle &&
          <Typography
          variant="subtitle1"
          component="div"
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            textAlign: 'center',
          }}>
            {subtitle}
          </Typography>
        }
    </div>
  )
}

