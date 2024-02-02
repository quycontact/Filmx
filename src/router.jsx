import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
// import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import NotFound from './pages/Notfound/Notfound';
import Navigation from './components/common/Navigation/Navigation';

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Outlet />,
      errorElement: <NotFound />,
      children: [...PublicRoute],
    },
  ]);

  return (
    <>
      <Navigation />
      <RouterProvider router={router} />
    </>
  );
};

export default Routes;
