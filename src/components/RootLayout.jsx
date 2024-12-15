import CompanySidebar from './CompanySidebar';
import LandingNavbar from './LandingNavbar';
import Navbar from './Navbar';
import { useLocation } from 'react-router';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const location = useLocation();

  // Check if the current path is the root index (`LandingPage`)
  const isLandingPage =
    location.pathname === '/' || location.pathname === '/sellers-login';
  console.log('isLandingPage', isLandingPage);
  return (
    <>
      {isLandingPage ? <LandingNavbar /> : <Navbar />}
      <div className="container mx-auto">
        <CompanySidebar />
        <main className="pt-16">{children}</main>
      </div>
    </>
  );
};

export default Layout;
