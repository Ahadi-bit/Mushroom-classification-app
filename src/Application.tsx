import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './Layout/Layout';
import Typography from '@material-ui/core/Typography';
import './Application.css';

const Application: FC<{}> = () => {
  return (
    <Typography variant="body2" component="div">
      <Layout>
        <Routes>
          <Route path={'/'} element={<Home />} />
        </Routes>
      </Layout>
    </Typography>
  );
};
export default Application;
