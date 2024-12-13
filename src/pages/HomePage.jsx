import {
  FiHeart,
  FiShoppingCart,
  FiBox,
  FiGift,
  FiBook,
  FiPhone,
  FiCpu,
  FiGlobe,
  FiTrendingUp,
} from 'react-icons/fi';
import FeaturedProducts from '../components/home/FeaturedProducts';
import TrendingCategoriesCarousel from '../components/home/TrendingCategoriesCarousel';
import { FaUserFriends } from 'react-icons/fa';

export default function HomePage() {
  const categories = [
    {
      name: 'Health & Beauty',
      icon: <FiHeart className="h-6 w-6 text-primary" />,
    },
    {
      name: 'Apparel & Fashion',
      icon: <FiShoppingCart className="h-6 w-6 text-tri" />,
    },
    { name: 'Chemicals', icon: <FiBox className="h-6 w-6 text-secondary" /> },
    {
      name: 'Gifts & Crafts',
      icon: <FiGift className="h-6 w-6 text-forth" />,
    },
    {
      name: 'Education Supplies',
      icon: <FiBook className="h-6 w-6 text-primary" />,
    },
    {
      name: 'Electronics',
      icon: <FiPhone className="h-6 w-6 text-secondary" />,
    },
    {
      name: 'Technology',
      icon: <FiCpu className="h-6 w-6 text-primary" />,
    },
    {
      name: 'Global Trade',
      icon: <FiGlobe className="h-6 w-6 text-tri" />,
    },
  ];

  const highlights = [
    {
      icon: <FiTrendingUp className="h-8 w-8 text-secondary" />,
      title: 'Business Growth',
      description: 'Boost your sales with our advanced tools.',
    },
    {
      icon: <FaUserFriends className="h-8 w-8 text-primary" />,
      title: 'Your Business Buddy',
      description: 'Find Best Customers for your products',
    },
    {
      icon: <FiGift className="h-8 w-8 text-forth" />,
      title: 'Exclusive Offers',
      description: 'Unlock premium benefits with our membership.',
    },
  ];

  const SectionTiles = [
    {
      title: 'Custom Duties & Clearance',
    },
    {
      title: 'TAX Assistance',
    },
    { title: 'Marketing Assistance' },
    { title: 'Technical Assitance' },
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Menu */}
        <div className="col-span-12 sm:col-span-3 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-secondary mb-4">
            Top Categories
          </h2>
          <ul className="space-y-3">
            {categories.map((category, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 cursor-pointer transition"
              >
                {category.icon}
                <span className="text-gray-700 font-medium">
                  {category.name}
                </span>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="block text-primary mt-6 font-semibold hover:underline text-center"
          >
            View all Categories
          </a>
        </div>

        {/* Main Content */}
        <div className="col-span-12 sm:col-span-9 space-y-6">
          <div className="relative overflow-hidden rounded-lg shadow-md text-white">
            {/* Background Image with Light Gradient Overlay */}
            <div
              className="absolute bg-left inset-0 bg-cover z-0"
              style={{
                backgroundImage:
                  'url("https://www.ust.com/content/dam/ust/images/people/event-banner-image.jpg")',
              }}
            />
            <div className="absolute inset-0 bg-cover bg-center w-ful h-full opacity-50 bg-gradient-to-r from-primary to-secondary" />

            <div className="relative z-10 p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-4">
                One-Stop Global Trade Platform
              </h2>
              <p className="text-lg mb-6 text-gray-100 max-w-2xl">
                List2Ship: Connect, Trade, Grow. Your comprehensive marketplace
                bridging Manufacturers, Suppliers, Importers, Exporters, and
                Distributors worldwide. Simplify your global business
                connections.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-primary font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition">
                  Join Now
                </button>
                <button className="border border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white/10 transition">
                  Learn More
                </button>
              </div>

              {/* Small feature highlights */}
              <div className="mt-8 flex space-x-6 text-gray-100">
                <div className="flex items-center space-x-2">
                  <FiGlobe className="h-5 w-5" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiCpu className="h-5 w-5" />
                  <span>Smart Connections</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiBox className="h-5 w-5" />
                  <span>Diverse Industries</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-4 gap-4 grid grid-cols-12">
            <div className="col-span-12 sm:col-span-9 space-y-6">
              {/* Banner */}

              {/* Highlights Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 hover:shadow-lg transition"
                  >
                    {highlight.icon}
                    <div>
                      <h3 className="font-bold text-lg text-secondary">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Sections */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {SectionTiles.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
                  >
                    <h3 className="font-bold text-lg text-secondary">
                      {item.title}
                    </h3>
                    <p className="text-primary font-medium mt-2 hover:underline cursor-pointer">
                      Learn more
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Right Section */}
            <div className="col-span-12 sm:col-span-3 space-y-6">
              <div className="bg-yellow-50 rounded-lg shadow-md p-6 text-secondary">
                <h3 className="font-bold text-lg">Looking for a Product?</h3>
                <button className="mt-4 bg-primary text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-secondary transition">
                  Post Buy Requirement
                </button>
              </div>

              <div className="bg-red-50 rounded-lg shadow-md p-6 text-secondary">
                <h3 className="font-bold text-lg">
                  Want to grow your business 10X Faster?
                </h3>
                <button className="mt-4 bg-secondary text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-secondary transition">
                  Sell on Lift To Ship
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Categories Carousel */}
      <TrendingCategoriesCarousel />

      {/* Featured Products */}
      <FeaturedProducts />

      <FeaturedProducts title={'Air Cleaning Equipment'} />
    </div>
  );
}
