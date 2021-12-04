import {FC} from 'react'
import { Typography } from '@mui/material/';


interface TextProps {
  heading: string;
  subtitle?: string;
}


export const Text:FC<TextProps> = ({heading,subtitle}) => {
  return (
    <div style={{marginBottom:"25px"}}>
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
        <hr/>
    </div >
  )
}

