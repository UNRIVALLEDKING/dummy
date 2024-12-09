import CompanySidebar from './CompanySidebar';
import Navbar from './Navbar';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <CompanySidebar />
        <main className="pt-16">{children}</main>
      </div>
    </>
  );
};

export default Layout;
