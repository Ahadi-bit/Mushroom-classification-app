import { FC } from 'react';
import { Nav, Footer } from '../components';
import Container from '@mui/material/Container';
import { Paper} from '@mui/material/';

import './Layout.css';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Nav />
      <Container
        className="body-container"
        maxWidth="lg"
        sx={{ mr: 1, display: 'flex', marginLeft: 'auto', marginRight: 'auto',marginTop:'20px'}}
      >
        <Paper sx={{ width: '100%' }}>
          {children}
        </Paper>
      </Container>
    </>
  );
};

export default Layout;
