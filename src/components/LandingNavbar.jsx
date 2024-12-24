import React from 'react';
import {
  //  Ship,
  Menu,
  X,
} from 'lucide-react';
import { mainLogo } from '../assets';

export default function LandingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'Features', path: '/features' },
    { label: 'Services', path: '/services' },
  ];
  const openModal = () => {
    document.getElementById('login_modal').showModal();
  };
  const openModal2 = () => {
    document.getElementById('signup_modal').showModal();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-[#d0d0c4]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a className="flex text-teal-600" href="/">
            <img src={mainLogo} className="w-52" alt="Main Logo" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="text-[#393939] cursor-pointer hover:text-[#f37a1f] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              onClick={openModal}
              className="text-[#393939] cursor-pointer border border-primary rounded-full px-6 py-2 hover:text-[#f37a1f] transition-colors"
            >
              Login
            </a>
            <a
              onClick={openModal2}
              className="bg-[#f37a1f] cursor-pointer text-white px-6 py-2 rounded-full hover:bg-[#e06a10] transition-colors"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#393939]" />
            ) : (
              <Menu className="h-6 w-6 text-[#393939]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className="text-[#393939] hover:text-[#f37a1f] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="text-[#393939] border border-primary px-6 py-2 rounded-full hover:text-[#f37a1f] transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  openModal();
                }}
              >
                Login
              </a>
              <a
                onClick={() => {
                  setIsMenuOpen(false);
                  openModal2();
                }}
                className="bg-[#f37a1f] text-white px-6 py-2 rounded-full hover:bg-[#e06a10] transition-colors"
              >
                Sign up
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
