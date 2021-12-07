import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Typography } from '@mui/material/';
import Layout from './Layout/Layout';
import {pages} from './routes'

import './Application.css';


// Entry point to the Application
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
