import { FaMapLocationDot } from 'react-icons/fa6';
import { mainLogo } from '../assets';

export default function Footer() {
  return (
    <>
      <footer className="footer bg-background text-secondary p-10">
        <nav>
          <h6 className="footer-title text-secondary font-bold text-xl">
            Company
          </h6>
          <a className="link link-hover hover:text-primary">About us</a>
          <a className="link link-hover hover:text-primary">Why choose us</a>
          <a className="link link-hover hover:text-primary flex items-center gap-3">
            Contact us <FaMapLocationDot />
          </a>
          <a className="link link-hover hover:text-primary">Trusted Clients</a>
        </nav>
        <nav>
          <h6 className="footer-title text-secondary font-bold text-xl">
            For Investors
          </h6>
          <a className="link link-hover hover:text-primary">Vision, Mission & Milestones</a>
          <a className="link link-hover hover:text-primary">Corporate Responsibility</a>
          <a className="link link-hover hover:text-primary">Career</a>
          <a className="link link-hover hover:text-primary">FAQ</a>
          <a className="link link-hover hover:text-primary">Feedback & Suggestions Form</a>
        </nav>
        <nav>
          <h6 className="footer-title text-secondary font-bold text-xl">
            Pricing
          </h6>
          <a className="link link-hover hover:text-primary">Membership Plans</a>
        </nav>
        <nav>
          <h6 className="footer-title text-secondary font-bold text-xl">
            Assistance
          </h6>
          <a className="link link-hover hover:text-primary">Legal</a>
          <a className="link link-hover hover:text-primary">Technical</a>
          <a className="link link-hover hover:text-primary">Financial</a>
          <a className="link link-hover hover:text-primary">Marketing</a>
          <a className="link link-hover hover:text-primary">Hiring</a>
        </nav>
        <nav>
          <h6 className="footer-title text-secondary font-bold text-xl">
            Quick Links
          </h6>
          <a className="link link-hover hover:text-primary">HSN Code & Duties </a>
          <a className="link link-hover hover:text-primary">Video Marketing & Live Streams</a>
          <a className="link link-hover hover:text-primary">Free Webinar</a>
          <a className="link link-hover hover:text-primary">Blogs</a>
          <a className="link link-hover hover:text-primary">Hiring</a>
        </nav>
        <nav>
          <h6 className="footer-title text-secondary font-bold text-xl">
            Business Hours
          </h6>
          <p className="link link-hover hover:text-primary">Monday - Saturday </p>
          <p className="link link-hover hover:text-primary">(10:00 am to 6:00 pm)</p>
          <p className="link link-hover hover:text-primary">Sunday: Closed</p>
        </nav>
        <nav>
          <h6 className="footer-title text-secondary font-bold text-xl">
            Contact us
          </h6>
          <p className="link link-hover hover:text-primary">ABC, xyz, Navi Mumbai - 400706</p>
          <p className="link link-hover hover:text-primary">+91 99999 99999</p>
          <p className="link link-hover hover:text-primary">info@list2Ship.com</p>
        </nav>
      </footer>
      <footer className="footer bg-background text-secondary border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <img src={mainLogo} className="w-40" />
          <p>
            List2Ship
            <br />
            Providing reliable service since 2025
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}
