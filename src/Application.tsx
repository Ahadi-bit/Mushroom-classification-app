import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './Layout/Layout';

const Application:FC<{}> = () => {

    return (
    <div>
        <Layout>
            <Routes>
                <Route  path={'/'} element={<Home/>}/>
            </Routes>
        </Layout>
    </div>
    )
};
export default Application;
