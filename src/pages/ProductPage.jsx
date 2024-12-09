import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import productsData from "../data/products.json";
import categoriesData from "../data/categories.json";
import { useNavigate } from "react-router";

export default function ProductPage() {
  // const products = Array.from({ length: 12 }, (_, i) => ({
  //   id: i + 1,
  //   title: `Product ${i + 1}`,
  //   unit: "500ml",
  //   price: `$${(i + 1) * 5}`,
  //   seller: `Seller ${String.fromCharCode(65 + (i % 4))}`,
  //   image: `https://via.placeholder.com/150?text=Product+${i + 1}`,
  // }));

  const [products, setProducts] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter products based on the selected category
  const filterProductsByCategory = (categoryId) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
      setProducts(productsData);
    } else {
      setSelectedCategory(categoryId);
      setProducts(
        productsData.filter((product) => product.category_id === categoryId)
      );
    }
  };

  const navigate = useNavigate();
  function handleGoTo(id) {
    navigate(`/product/${id}`);
  }

  return (
    <div className="container mx-auto ">
      <div className="flex  flex-col lg:flex-row gap-6 p-6  min-h-screen ">
        {/* Filter Menu */}
        <aside className="w-full lg:w-1/5 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-xl font-bold text-primary flex items-center gap-2 mb-6">
            <FiFilter /> Filters
          </h2>

          {/* Filter Categories */}
          <div className="space-y-6">
            {/* Category Filter */}
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Categories
              </h3>
              <div className="form-control space-y-2">
                {categoriesData.map((category) => (
                  <div
                    key={category.id}
                    className={`p-2 cursor-pointer rounded-md flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? "bg-primary text-white"
                        : "text-secondary"
                    }`}
                    onClick={() => filterProductsByCategory(category.id)}
                  >
                    <img
                      src={category.imageUrl}
                      alt={category.name}
                      className="w-8 h-8 rounded-md"
                    />
                    <span>{category.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Brands
              </h3>
              <div className="form-control space-y-2">
                <label className="label cursor-pointer">
                  <span className="label-text text-secondary">Brand A</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text text-secondary">Brand B</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text text-secondary">Brand C</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </label>
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Price Range
              </h3>
              <input
                type="range"
                min="0"
                max="100"
                className="range range-primary"
              />
              <div className="text-sm flex justify-between text-secondary mt-2">
                <span>$0</span>
                <span>$100</span>
              </div>
            </div>

            {/* Ratings Filter */}
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Ratings
              </h3>
              <div className="form-control space-y-2">
                <label className="label cursor-pointer">
                  <span className="label-text text-secondary">
                    4 Stars & Up
                  </span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text text-secondary">
                    3 Stars & Up
                  </span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text text-secondary">
                    2 Stars & Up
                  </span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </label>
              </div>
            </div>

            {/* Sort By */}
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Sort By
              </h3>
              <select className="select select-bordered w-full border-tri">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="flex-1  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => handleGoTo(product.id)}
              className="bg-white cursor-pointer h-fit rounded-lg shadow-lg hover:shadow-xl transition border border-gray-200 overflow-hidden"
            >
              <div className="p-4   ">
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
                <button className="mt-4 flex items-center justify-center bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-secondary hover:text-white transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
