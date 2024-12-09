import { useLocation } from 'react-router';
import {
  FaChartBar,
  FaBox,
  FaClipboardList,
  FaEnvelope,
  FaBullhorn,
  FaProductHunt,
} from 'react-icons/fa';

export default function CompanySidebar() {
  const location = useLocation();
  const activeLink = location.pathname;

  // Check if the URL includes "company-dashboard"
  if (!activeLink.includes('company-dashboard')) {
    return null;
  }

  const sidebarItems = [
    {
      path: '/company-dashboard',
      label: 'Company Dashboard',
      icon: <FaBox />,
    },
    {
      path: '/company-dashboard/analytics',
      label: 'Analytics',
      icon: <FaChartBar />,
    },
    {
      path: '/company-dashboard/products',
      label: 'Products',
      icon: <FaProductHunt />,
    },
    {
      path: '/company-dashboard/orders',
      label: 'Orders',
      icon: <FaClipboardList />,
    },
    {
      path: '/chat',
      label: 'Chat',
      icon: <FaEnvelope />,
    },
    {
      path: '/company-dashboard/advertisements',
      label: 'Advertisements',
      icon: <FaBullhorn />,
    },
  ];

  return (
    <div className="col-span-2 bg-background shadow-md text-secondary fixed top-20 h-fit">
      <div className="flex flex-col space-y-2 p-4">
        {sidebarItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className={`flex items-center p-3 rounded-lg hover:scale-105 duration-300 ${
              activeLink === item.path ? 'bg-primary text-white' : ''
            }`}
          >
            {item.icon}
            <span className="ml-2">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
