

import { createBrowserRouter,RouterProvider } from 'react-router'

import Home from './pages/home/Home';

import AppLayout from './components/AppLayout';
import SingleProduct from './pages/home/SingleProduct';

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
        path:"/shop/:id",
        element: <SingleProduct/>
      }
      
      
    ]
  },
]);

  return <RouterProvider router={router}/>;
};

export default App;
