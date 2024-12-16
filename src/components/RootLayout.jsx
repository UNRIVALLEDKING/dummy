import CompanySidebar from './CompanySidebar';
import LandingNavbar from './LandingNavbar';
import Navbar from './Navbar';
import { useLocation } from 'react-router';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const location = useLocation();

  // Define an array of landing page paths
  const landingPagePaths = ['/', '/sellers-login', '/features', '/services'];

  // Check if the current path is in the array
  const isLandingPage = landingPagePaths.includes(location.pathname);
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
