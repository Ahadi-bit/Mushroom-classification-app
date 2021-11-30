import Home from './pages/Home';
import About from './pages/About';

export const pages = [
  {
    name: 'Home',
    path: '/',
    page: <Home />,
  },
  {
    name: 'Reports',
    path: '/reports',
    page: <About />,
  },
];
