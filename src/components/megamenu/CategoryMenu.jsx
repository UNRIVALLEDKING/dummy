import { useState } from "react";
import categories from "../../data/categories.json";

export default function CategoryMenu() {
  const [categoriesData] = useState(categories);
  return (
    <div className="absolute left-0 hidden w-[60vw] bg-white shadow-lg group-hover:block z-50 rounded-md max-h-[450px] overflow-y-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Render Categories with Images */}
          {categoriesData.map((category) => (
            <div
              key={category.id}
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-48 object-cover transition-transform transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white text-lg font-semibold text-center px-4">
                  {category.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
