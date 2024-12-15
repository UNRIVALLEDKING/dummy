import { mainLogo } from '../assets';

export default function Footer() {
  return (
    <footer className="bg-[#393939] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src={mainLogo}
                className="w-44 bg-white rounded-lg shadow-xl p-2 text-[#f37a1f]"
              />
            </div>
            <p className="text-[#d0d0c4]">
              Revolutionizing global trade and business networking.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-[#d0d0c4]">
              <li>
                <a href="/features" className="hover:text-[#f37a1f]">
                  Features
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#f37a1f]">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#f37a1f]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#f37a1f]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">For Investors</h4>
            <ul className="space-y-2 text-[#d0d0c4]">
              <li>
                <a href="/features" className="hover:text-[#f37a1f]">
                  Vision, Mission & Milestones
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#f37a1f]">
                  Corporate Responsibility
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#f37a1f]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#f37a1f]">
                  Feedback & Suggestions Form
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Assistance</h4>
            <ul className="space-y-2 text-[#d0d0c4]">
              <li>
                <a href="/features" className="hover:text-[#f37a1f]">
                  Legal
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#f37a1f]">
                  Technical
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#f37a1f]">
                  Financial
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#f37a1f]">
                  Marketing
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#f37a1f]">
                  Hiring
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Pricing</h4>
            <ul className="space-y-2 text-[#d0d0c4]">
              <li>
                <a href="/features" className="hover:text-[#f37a1f]">
                  Membership Plans
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#a4b6c2]/20 mt-8 pt-8 text-center text-[#d0d0c4]">
          <p>
            &copy; {new Date().getFullYear()} List2Ship. All rights reserved.
          </p>
        </div>
      </div>

      {/* <nav>
          <h6 className="footer-title text-secondary font-bold text-xl">
            Quick Links
          </h6>
          <a className="link link-hover hover:text-primary">
            HSN Code & Duties{' '}
          </a>
          <a className="link link-hover hover:text-primary">
            Video Marketing & Live Streams
          </a>
          <a className="link link-hover hover:text-primary">Free Webinar</a>
          <a className="link link-hover hover:text-primary">Blogs</a>
          <a className="link link-hover hover:text-primary">Hiring</a>
        </nav>
        
        <nav>
          <h6 className="footer-title text-secondary font-bold text-xl">
            Contact us
          </h6>
          <p className="link link-hover hover:text-primary">
            ABC, xyz, Navi Mumbai - 400706
          </p>
          <p className="link link-hover hover:text-primary">+91 99999 99999</p>
          <p className="link link-hover hover:text-primary">
            info@list2Ship.com
          </p>
        </nav> */}
    </footer>
  );
}
