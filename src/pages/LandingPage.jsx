import {
  FiHeart,
  FiShoppingCart,
  FiBox,
  FiGift,
  FiBook,
  FiPhone,
  FiCpu,
  FiGlobe,
} from 'react-icons/fi';

export default function LandingPage() {
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

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto grid grid-cols-12 gap-6">
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
        </div>
      </div>
    </div>
  );
}
