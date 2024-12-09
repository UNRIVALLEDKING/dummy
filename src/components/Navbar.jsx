import { useEffect, useState } from 'react';
import { mainLogo } from '../assets';
import LocaleSelect from './locale/LocaleSelect';
import { useNavigate } from 'react-router';
import { getRandomProfileImage } from '../constants/functions';

export default function Navbar() {
  const [selectedSearch, setSelectedSearch] = useState('Products');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileRedirect, setProfileRedirect] = useState('');

  const navigate = useNavigate();
  const openModal = () => {
    document.getElementById('login_modal').showModal();
  };

  const handleSearch = () => {
    navigate(`/products?query=${searchQuery}`);
  };

  useEffect(() => {
    // Check localStorage for userData or companyData
    const userData = localStorage.getItem('userData');
    const companyData = localStorage.getItem('companyData');
    if (userData) {
      setIsLoggedIn(true);
      setProfileRedirect('/profile');
    } else if (companyData) {
      setIsLoggedIn(true);
      setProfileRedirect('/company-dashboard');
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <header className="bg-background sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <a className="block text-teal-600" href="/">
              <img src={mainLogo} className="w-52" alt="Main Logo" />
            </a>
          </div>

          {/* Search Section */}
          <div className="hidden xl:flex items-center space-x-2 pr-2 min-w-[500px] bg-background text-secondary border border-secondary rounded-full">
            <select
              value={selectedSearch}
              onChange={(e) => setSelectedSearch(e.target.value)}
              className="select w-[150px] rounded-l-full bg-inherit text-inherit px-3 border-r border-secondary"
            >
              <option value="Products">Products</option>
              <option value="Manufacturers">Manufacturers</option>
              <option value="Suppliers">Suppliers</option>
              <option value="Importers">Importers</option>
              <option value="Exporters">Exporters</option>
            </select>
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input min-w-72 flex-1 p-0 m-0 bg-inherit text-inherit rounded-r-full px-5 focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white shadow"
            >
              Search
            </button>
          </div>

          {/* Actions Section */}
          <div className="flex items-center space-x-4">
            <LocaleSelect />
            <div className="hidden sm:flex space-x-4">
              {isLoggedIn ? (
                <a
                  className="rounded-full font-medium text-white shadow"
                  href={profileRedirect}
                >
                  <img
                    src={getRandomProfileImage()}
                    alt="profile"
                    className="w-14 rounded-full"
                  />
                </a>
              ) : (
                <>
                  <a
                    className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="#"
                    onClick={openModal}
                  >
                    Login
                  </a>
                  <a
                    className="border rounded-full border-primary text-secondary px-5 py-2.5 text-sm font-medium"
                    href="/sellers-login"
                  >
                    Become Seller
                  </a>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
