import { useEffect, useState } from "react";
import productData from "../data/products.json";
import { useParams, useNavigate } from "react-router";

function ProductDetailPage() {
  const [productDetails, setProductDetails] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const data = productData.find((product) => product.id === parseInt(id));
    if (data) {
      setProductDetails(data);

      const relatedData = productData.filter(
        (product) =>
          product.category_id === data.category_id && product.id !== data.id
      );
      setRelatedProducts(relatedData);
    }
  }, [id]);

  if (!productDetails) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Breadcrumbs and Title */}
      <div className="mb-8">
        <p className="text-sm text-gray-500 mb-2">
          Home / {productDetails.category_name} / {productDetails.title}
        </p>
        <h1 className="text-4xl font-bold text-gray-800">
          {productDetails.title}
        </h1>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Image Gallery */}
        <div className="col-span-1">
          <div className="border border-gray-300 rounded-lg overflow-hidden mb-4 shadow-lg">
            <img
              src={productDetails.image}
              alt={productDetails.title}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((index) => (
              <img
                key={index}
                src={`https://via.placeholder.com/100x100?text=Image+${index}`}
                alt={`Thumbnail ${index}`}
                className="border border-gray-300 rounded-lg hover:shadow-md transition"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="col-span-2">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              ${productDetails.price}
            </h2>
            <p className="text-sm text-gray-500">(Inclusive of all taxes)</p>
          </div>
          <p className="text-gray-600 mb-6">
            {productDetails.description ||
              "This is a detailed description of the product, highlighting its features, quality, and benefits."}
          </p>
          <div className="mb-4">
            <p className="text-gray-700 font-medium">
              Available Stock: {productDetails.stock || "Out of Stock"}
            </p>
          </div>
          <div className="flex gap-4 mb-6">
            <button className="bg-primary text-white py-3 px-6 rounded-lg shadow hover:bg-primary-dark transition">
              Add to Cart
            </button>
            <button
              onClick={() => navigate("/chat")}
              className="bg-gray-100 text-gray-700 py-3 px-6 rounded-lg shadow hover:bg-gray-200 transition"
            >
              Contact Seller
            </button>
          </div>

          <div className="border-t border-gray-300 pt-4">
            <h3 className="text-lg font-bold mb-2">Specifications</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Material: High-quality cotton</li>
              <li>Weight: 500g</li>
              <li>Color: Black</li>
              <li>Dimensions: 20cm x 15cm x 5cm</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Seller Information */}
      <div className="mt-12 border-t border-gray-300 pt-8">
        <h3 className="text-xl font-bold mb-6">Seller Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-300 rounded-lg shadow">
            <h4 className="text-lg font-bold text-gray-800 mb-2">
              Seller Name
            </h4>
            <p className="text-gray-600">Location: New York, USA</p>
            <p className="text-gray-600">Rating: 4.5/5</p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg shadow">
            <h4 className="text-lg font-bold text-gray-800 mb-2">
              Contact Seller
            </h4>
            <p className="text-gray-600">Email: seller@example.com</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12 border-t border-gray-300 pt-8">
        <h3 className="text-xl font-bold mb-6">Related Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="mb-2 rounded-lg w-full h-40 object-cover"
              />
              <h4 className="text-gray-700 font-medium truncate">
                {item.title}
              </h4>
              <p className="text-primary font-bold">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
