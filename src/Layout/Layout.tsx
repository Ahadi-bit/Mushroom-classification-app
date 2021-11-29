import { FC } from 'react';
import { Nav, Footer } from '../components';
import Container from '@material-ui/core/Container';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Nav />
      <Container maxWidth="sm">{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
