import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import productsData from "../../data/products.json";
import { useNavigate } from "react-router";

function CompanyProducts() {
  const [products, setProducts] = useState(productsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    setProducts([...products, { id: products.length + 1, ...currentProduct }]);
    setCurrentProduct(null);
    setIsModalOpen(false);
  };

  const handleEditProduct = (e) => {
    e.preventDefault();
    setProducts(
      products.map((product) =>
        product.id === currentProduct.id ? currentProduct : product
      )
    );
    setCurrentProduct(null);
    setIsModalOpen(false);
  };

  const openAddModal = () => {
    setCurrentProduct({ name: "", description: "", price: "", image: "" });
    setIsModalOpen(true);
  };

  const openEditModal = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const navigate = useNavigate();
  const handleGoTo = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="grid grid-cols-10 px-5 sm:px-10 bg-background min-h-screen">
      {/* Main content area */}
      <div className="col-span-12 lg:col-span-10 lg:ml-[200px] p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-primary"> Products</h1>
          <button
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition"
            onClick={openAddModal}
          >
            Add Product
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden relative flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <div>
                  <h2 className="text-lg font-semibold text-secondary mb-2">
                    {product.title}
                  </h2>
                  <p className="text-tri text-sm mb-4">{product.description}</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-primary font-bold">
                    {product.price}
                  </span>
                  <button
                    onClick={() => handleGoTo(product.id)}
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition"
                  >
                    Details
                  </button>
                </div>
              </div>
              <button
                className="absolute top-3 right-3 bg-white text-primary p-2 rounded-full shadow-md border border-gray-200 hover:shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-110"
                onClick={() => openEditModal(product)}
              >
                <FaRegEdit size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg w-96 shadow-xl p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes />
            </button>
            <h2 className="text-2xl font-bold text-center text-primary mb-4">
              {currentProduct?.id ? "Edit Product" : "Add New Product"}
            </h2>
            <form
              onSubmit={
                currentProduct?.id ? handleEditProduct : handleAddProduct
              }
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  name="title"
                  value={currentProduct.title}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={currentProduct.description}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-primary focus:border-primary"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  value={currentProduct.price}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  type="text"
                  name="image"
                  value={currentProduct.image}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition"
              >
                {currentProduct?.id ? "Save Changes" : "Add Product"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompanyProducts;
