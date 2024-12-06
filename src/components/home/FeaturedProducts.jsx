/* eslint-disable react/prop-types */
import { FiSend } from "react-icons/fi";

export default function FeaturedProducts({ title }) {
  const products = [
    {
      image:
        "https://tiimg.tistatic.com/fp/1/009/099/designer-printed-bandhani-suit-material-008.jpg",
      title: "Designer Printed Bandhani Suit Material",
      price: "500 INR (Approx.)",
      unit: "Piece/Pieces",
      seller: "JAYSHREE BANDHEJ",
    },
    {
      image:
        "https://tiimg.tistatic.com/fp/2/008/513/polyelectrolyte-flocculant-chemical-804.jpg",
      title: "Polyelectrolyte Flocculant Chemical",
      price: "210 INR (Approx.)",
      unit: "Kilograms/Kilograms",
      seller: "CHEMTEX SPECIALITY LTD.",
    },
    {
      image:
        "https://tiimg.tistatic.com/fp/4/001/223/c-type-power-press-machine-683.jpg",
      title: "C Type Power Press Machine",
      price: "300000.00 INR (Approx.)",
      unit: "Piece/Pieces",
      seller: "JAY SHAKTI MACHINE TOOLS",
    },
    {
      image:
        "https://tiimg.tistatic.com/fp/1/002/052/briquette-crusher-416.jpg",
      title: "Briquette Crusher",
      price: "1100000 INR (Approx.)",
      unit: "Piece/Pieces",
      seller: "ECOMAN",
    },
    {
      image: "https://tiimg.tistatic.com/fp/1/009/027/dowel-pins-760.jpg",
      title: "Rust Free Round Dowel Pins",
      price: "Contact for Price",
      unit: "Piece/Pieces",
      seller: "MECHCON ENGINEERING",
    },
    {
      image:
        "https://tiimg.tistatic.com/fp/2/008/533/laundry-liquid-detergent-500ml-728.jpg",
      title: "Blue Laundry Liquid Detergent - 500ML",
      price: "45.00 INR (Approx.)",
      unit: "Liter/Liters",
      seller: "TRUE ESSENCE FOODS AND CARE",
    },
  ];

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
              <button className="mt-auto mb-4 flex items-center mx-3 justify-center bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-secondary hover:text-white transition">
                Send Inquiry
                <FiSend className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
