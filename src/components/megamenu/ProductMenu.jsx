import companyData from "../../data/company.json";
import { useState } from "react";
import {
  Users,
  ShoppingCart,
  BarChart,
  FileText,
  TrendingUp,
} from "lucide-react";

export default function ProductMenu() {
  const categories = [
    {
      name: "Electronics",
      link: "/products?category=electronics",
      icon: <ShoppingCart className="text-secondary h-6 w-6" />,
    },
    {
      name: "Beauty",
      link: "/products?category=beauty",
      icon: <Users className="text-secondary h-6 w-6" />,
    },
    {
      name: "Sports",
      link: "/products?category=sports",
      icon: <BarChart className="text-secondary h-6 w-6" />,
    },
    {
      name: "Home Appliances",
      link: "/products?category=home-appliances",
      icon: <FileText className="text-secondary h-6 w-6" />,
    },
    {
      name: "Books",
      link: "/products?category=books",
      icon: <TrendingUp className="text-secondary h-6 w-6" />,
    },
  ];

  const featuredProducts = [
    {
      name: "New Electronics",
      link: "/products?category=electronics&featured=true",
      icon: <ShoppingCart className="text-secondary h-6 w-6" />,
    },
    {
      name: "Trending Beauty",
      link: "/products?category=beauty&featured=true",
      icon: <Users className="text-secondary h-6 w-6" />,
    },
    {
      name: "Popular Sports Gear",
      link: "/products?category=sports&featured=true",
      icon: <BarChart className="text-secondary h-6 w-6" />,
    },
    {
      name: "Latest Home Appliances",
      link: "/products?category=home-appliances&featured=true",
      icon: <FileText className="text-secondary h-6 w-6" />,
    },
    {
      name: "Best-Selling Books",
      link: "/products?category=books&featured=true",
      icon: <TrendingUp className="text-secondary h-6 w-6" />,
    },
  ];

  const [topCompanies] = useState(companyData);

  return (
    <div className="absolute left-0 hidden w-[60vw] bg-white shadow-lg group-hover:block z-50 rounded-md">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Product Categories */}
          <div className="space-y-6">
            <h3 className="font-semibold text-2xl text-primary mb-4">
              Categories
            </h3>
            <div className="space-y-4">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href={category.link}
                  className="flex items-center space-x-3 p-4 bg-gray-50 hover:bg-primary hover:text-white rounded-lg shadow-md transition-all duration-300"
                >
                  {category.icon}
                  <span className="text-lg font-medium">{category.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Featured Products */}
          <div className="space-y-6">
            <h3 className="font-semibold text-2xl text-primary mb-4">
              Featured Products
            </h3>
            <div className="space-y-4">
              {featuredProducts.map((product, index) => (
                <a
                  key={index}
                  href={product.link}
                  className="flex items-center space-x-3 p-4 bg-gray-50 hover:bg-primary hover:text-white rounded-lg shadow-md transition-all duration-300"
                >
                  {product.icon}
                  <span className="text-lg font-medium">{product.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Top Companies */}
          <div className="space-y-6">
            <h3 className="font-semibold text-2xl text-primary mb-4">
              Top Companies
            </h3>
            <div className="space-y-4">
              {topCompanies.map((company, index) => (
                <a
                  key={index}
                  href={company.link || "#"}
                  className="flex items-center space-x-3 p-4 bg-gray-50 hover:bg-primary hover:text-white rounded-lg shadow-md transition-all duration-300"
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src={company.imageUrl}
                    alt={company.name}
                  />
                  <span className="text-lg font-medium">{company.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Explore Button */}
        <div className="flex justify-center mt-8">
          <a
            href="/products"
            className="bg-primary hover:bg-secondary text-white py-2 px-8 rounded-full text-xl shadow-lg hover:scale-105 transition-all duration-300"
          >
            Explore All Products
          </a>
        </div>
      </div>
    </div>
  );
}
