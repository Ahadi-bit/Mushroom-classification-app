import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Typography from '@material-ui/core/Typography';
import './Application.css';
import {pages} from './routes'

const Application: FC<{}> = () => {
  return (
    <Typography variant="body2" component="div">
      <Layout>
        <Routes>
          {pages.map((page) => (
            <Route key={page.name} path={page.path} element={page.page}/>
          ))}
        </Routes>
      </Layout>
    </Typography>
  );
};
export default Application;
