import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage'
import MainLayout from '../RootLayouts/MainLayout';
import Apps from '../pages/Apps';
import Installation from '../pages/Installation';
import AppDetails from '../pages/AppDetails';
import NotFound from '../pages/NotFound';
const router = createBrowserRouter([
  {
      path: '/',
    element: <MainLayout />,
     errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
        
            {
        index: true,
        Component: Home,
      },
      {
        path: '/apps',
        element: <Apps />,
      },
      {
        path: '/installation',
        element: <Installation />,
      },
      {
        path: '/appDetails/:id',
        element: <AppDetails />,
      },
      {
        path :'/notFound',
        element: <NotFound/>
      }

        
    ]
  },
]);
export default router