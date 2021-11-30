import { FC } from 'react';
import { Nav, Footer } from '../components';
import Container from '@mui/material/Container';
import "./Layout.css"

const Layout: FC = ({ children }) => {
  return (
    <>
      <Nav />
      <Container className="body-container" maxWidth="sm" sx={{ mr: 2, display:"flex",marginLeft:"auto",marginRight:"auto"}}>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
