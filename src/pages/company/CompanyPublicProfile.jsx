import { useState, useEffect } from "react";

// Sample data (could come from an API in a real app)
const sampleCompanyData = {
  name: "Tech Innovators Inc.",
  description:
    "A leading technology company providing cutting-edge solutions that aim to revolutionize industries with state-of-the-art technology, driving innovation and efficiency.",
  location: "San Francisco, CA",
  contactEmail: "info@techinnovators.com",
  website: "https://www.techinnovators.com",
  logo: "https://static.vecteezy.com/system/resources/thumbnails/011/883/287/small_2x/modern-letter-c-colorful-logo-with-watter-drop-good-for-technology-logo-company-logo-dummy-logo-bussiness-logo-free-vector.jpg", // Add logo path
  backgroundImage: "/path/to/background.jpg", // Add background image
  socialLinks: {
    twitter: "https://twitter.com/techinnovators",
    linkedin: "https://www.linkedin.com/company/techinnovators",
    facebook: "https://facebook.com/techinnovators",
  },
  products: [
    {
      name: "AI Assistant",
      description: "A smart assistant that helps with daily tasks.",
      price: "$199",
    },
    {
      name: "Cloud Storage",
      description: "Secure cloud storage for businesses.",
      price: "$9.99/month",
    },
    {
      name: "Smart Home Devices",
      description: "Devices to make your home smarter and more efficient.",
      price: "$49.99",
    },
  ],
};

function CompanyPublicProfile() {
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    // Simulate fetching company data from an API or database
    setCompanyData(sampleCompanyData);
  }, []);

  if (!companyData) {
    return <div className="text-center text-xl font-semibold">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8 bg-background">
      {/* Company Info Section */}
      <div
        className="bg-cover bg-center rounded-lg mb-8"
        style={{
          backgroundImage: `url(${companyData.backgroundImage})`,
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <div className="flex items-center mb-6">
            <img
              src={companyData.logo}
              alt="Company Logo"
              className="h-16 w-16 rounded-full shadow-md mr-4"
            />
            <h1 className="text-4xl font-bold text-white">
              {companyData.name}
            </h1>
          </div>
          <p className="text-lg text-gray-200 mb-4">
            {companyData.description}
          </p>
          <div className="text-white">
            <p>
              <strong>Location:</strong> {companyData.location}
            </p>
            <p>
              <strong>Contact:</strong>{" "}
              <a
                href={`mailto:${companyData.contactEmail}`}
                className="text-primary hover:text-orange-600"
              >
                {companyData.contactEmail}
              </a>
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={companyData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-orange-600"
              >
                {companyData.website}
              </a>
            </p>
          </div>
          {/* Social Media Links */}
          <div className="flex space-x-6 mt-6">
            <a
              href={companyData.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M23 3a10.3 10.3 0 01-2.77.76A4.44 4.44 0 0022.42 2a8.83 8.83 0 01-2.8 1.07A4.43 4.43 0 0016.89.53c-2.49 0-4.51 2.02-4.51 4.51 0 .35.04.7.12 1.04-3.75-.19-7.07-1.99-9.29-4.73a4.48 4.48 0 00-.61 2.27c0 1.57.79 2.96 1.99 3.77a4.42 4.42 0 01-2.05-.57v.06c0 2.18 1.55 4.03 3.63 4.45a4.42 4.42 0 01-2.03.08c.57 1.78 2.24 3.08 4.22 3.11a8.87 8.87 0 01-5.48 1.89c-.35 0-.7-.02-1.04-.06A12.8 12.8 0 008.25 21c8.39 0 13.02-7.01 12.98-13.07l-.01-.29A9.55 9.55 0 0023 3z"
                />
              </svg>
            </a>
            <a
              href={companyData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 8a6 6 0 10-12 0 6 6 0 0012 0zm0 0v5M8 6v13m-4 0h8m4 0h-3.39M14 6h1.39A6.41 6.41 0 0022 12a6 6 0 00-6-6h-1.39M8 6a6 6 0 10-6 6 6 6 0 006-6z"
                />
              </svg>
            </a>
            <a
              href={companyData.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-800 transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M23 3a10.3 10.3 0 01-2.77.76A4.44 4.44 0 0022.42 2a8.83 8.83 0 01-2.8 1.07A4.43 4.43 0 0016.89.53c-2.49 0-4.51 2.02-4.51 4.51 0 .35.04.7.12 1.04-3.75-.19-7.07-1.99-9.29-4.73a4.48 4.48 0 00-.61 2.27c0 1.57.79 2.96 1.99 3.77a4.42 4.42 0 01-2.05-.57v.06c0 2.18 1.55 4.03 3.63 4.45a4.42 4.42 0 01-2.03.08c.57 1.78 2.24 3.08 4.22 3.11a8.87 8.87 0 01-5.48 1.89c-.35 0-.7-.02-1.04-.06A12.8 12.8 0 008.25 21c8.39 0 13.02-7.01 12.98-13.07l-.01-.29A9.55 9.55 0 0023 3z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-3xl font-semibold text-secondary mb-6">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyData.products.map((product, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl rounded-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="card-body">
                <h3 className="card-title text-2xl font-semibold text-primary">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg font-semibold text-secondary">
                  {product.price}
                </p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary text-white hover:bg-orange-600 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-forth shadow-lg rounded-lg p-6 mt-8">
        <h2 className="text-3xl font-semibold text-secondary mb-6">
          What Our Customers Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg text-gray-700">
              {`"Tech Innovators Inc. has completely transformed the way we do
              business. Their AI Assistant has saved us hours every day!"`}
            </p>
            <p className="text-right text-secondary mt-2">
              - John Doe, CEO of XYZ Corp
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg text-gray-700">
              {`"The Cloud Storage solution has been a game changer for us. It's
              secure, reliable, and incredibly cost-effective."`}
            </p>
            <p className="text-right text-secondary mt-2">
              - Jane Smith, CTO of ABC Ltd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyPublicProfile;
