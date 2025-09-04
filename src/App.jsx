
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router'

import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Footer from './pages/footer/Footer';
import AppLayout from './components/AppLayout';

const App = () => {
  const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children:[
      {
        index: true,
        element: <Home/>,
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
      {
        path: '/footer',
        element: <Footer/>,
      },
    ],
  },
]);

  return <RouterProvider router={router}/>;
};

export default App;
