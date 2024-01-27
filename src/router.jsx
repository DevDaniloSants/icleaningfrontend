import { createBrowserRouter } from 'react-router-dom';

// PAGES
import RootLayout from './pages/RootLayout';
import Home from './pages/Home/Home';
import Customers from './pages/Customers/Customers';
import Register from './pages/Register/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/customers',
        element: <Customers />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

export default router;
