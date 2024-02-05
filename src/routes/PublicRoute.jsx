// Define public routes accessible to all users
import Home from '../pages/Home/Home';

const PublicRoute = [
  {
    path: '',
    element: <Home />,
  },
  {
    path: 'home',
    element: <Home />,
  },
  {
    path: 'service',
    children: [
      {
        path: 'log',
        element: <div>Blog</div>,
      },
    ],
  },
  {
    path: 'about-us',
    element: <div>About Us</div>,
  },
];

export default PublicRoute;
