import {FC} from 'react'
import {Header,Nav,Footer} from '../components';
import Container from '@mui/material/Container';


const Layout:FC = ({children}) => {
  return (
    <>
      <Header/>
      <Nav/>
        <Container maxWidth="sm">
          {children}
        </Container>
      <Footer />
    </>
  )
}

export default Layout
