
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router'

import Home from './pages/home/Home';

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
      
      
    ]
  },
]);

  return <RouterProvider router={router}/>;
};

export default App;
