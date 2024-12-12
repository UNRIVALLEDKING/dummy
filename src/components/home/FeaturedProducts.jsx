/* eslint-disable react/prop-types */
import { FiSend } from "react-icons/fi";
import productsData from "../../data/products.json";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function FeaturedProducts({ title }) {
  const [products, setProducts] = useState(productsData.slice(0, 6));

  const navigate = useNavigate();
  const handleGoTo = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="py-10 px-4 ">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-extrabold text-secondary mb-8">
          {title ? title : "Featured Products"}
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition border flex flex-col"
            >
              <div className="flex-grow p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold text-secondary mt-4">
                  {product.title}
                </h3>
                <p className="text-tri text-sm">{product.unit}</p>
                <p className="text-primary font-bold text-lg">
                  {product.price}
                </p>
                <p className="text-fourth text-sm mt-2">{product.seller}</p>
              </div>
              <button
                onClick={() => handleGoTo(product.id)}
                className="mt-auto mb-4 flex items-center mx-3 justify-center bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-secondary hover:text-white transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
