// Define public routes accessible to all users
import Home from '../pages/Home/Home';
import TrendingMovies from '../pages/TrendingMovies/TrendingMovies';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';

const PublicRoute = [
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'trending',
        element: <TrendingMovies />,
      },
    ],
  },
];

export default PublicRoute;
