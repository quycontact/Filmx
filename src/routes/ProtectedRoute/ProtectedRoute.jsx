import { Outlet } from 'react-router-dom';
import './ProtectedRoute.scss';
import { MovieProvider } from '../../provider/pageContext';
import Navigation from '../../components/common/Navigation/Navigation';
import Footer from '../../components/common/Footer/Footer';

export const ProtectedRoute = () => {
  return (
    <MovieProvider>
      <Navigation />
      <Outlet />
      <Footer />
    </MovieProvider>
  );
};
