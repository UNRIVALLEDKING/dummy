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
  FiBriefcase,
} from 'react-icons/fi';
import FeaturedProducts from '../components/home/FeaturedProducts';
import TrendingCategoriesCarousel from '../components/home/TrendingCategoriesCarousel';

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
      icon: <FiBriefcase className="h-8 w-8 text-primary" />,
      title: 'Enterprise Solutions',
      description: 'Tailored services for large-scale businesses.',
    },
    {
      icon: <FiGift className="h-8 w-8 text-forth" />,
      title: 'Exclusive Offers',
      description: 'Unlock premium benefits with our membership.',
    },
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
        <div className="col-span-12 sm:col-span-6 space-y-6">
          {/* Banner */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-lg shadow-md p-6 text-white">
            <h2 className="text-2xl font-bold">Unlock Business Efficiency</h2>
            <p className="mt-2 text-gray-100">
              With the all-new American Express® Platinum Corporate Card.
            </p>
            <button className="mt-4 bg-white text-primary font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-100 transition">
              Apply Now
            </button>
          </div>

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
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="font-bold text-lg text-secondary">
                  {`Section Title ${index + 1}`}
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

      {/* Trending Categories Carousel */}
      <TrendingCategoriesCarousel />

      {/* Featured Products */}
      <FeaturedProducts />

      <FeaturedProducts title={'Air Cleaning Equipment'} />
    </div>
  );
}
