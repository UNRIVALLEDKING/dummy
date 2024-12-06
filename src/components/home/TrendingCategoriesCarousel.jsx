import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper/modules";

const TrendingCategoriesCarousel = () => {
  const categories = [
    {
      name: "Common Medicines & Drugs",
      imageUrl:
        "https://tiimg.tistatic.com/categoryimg/v1/1/Common-Medicines-Drugs-455.png",
    },
    {
      name: "Medical, Diagnostic & Hospital Supplies",
      imageUrl:
        "https://tiimg.tistatic.com/categoryimg/v1/1/Medical-Diagnostic-Hospital-Supplies-464.png",
    },
    {
      name: "Personal Care Products",
      imageUrl:
        "	https://tiimg.tistatic.com/categoryimg/v1/1/Personal-Care-Products-466.png",
    },
    {
      name: "Solar Panels",
      imageUrl:
        "	https://tiimg.tistatic.com/categoryimg/v1/1/Solar-Panels-1808.png",
    },
    {
      name: "Human Hair & Accessories",
      imageUrl:
        "	https://tiimg.tistatic.com/categoryimg/v1/1/Human-Hair-Accessories-772.png",
    },
    {
      name: "Jackets",
      imageUrl: "https://tiimg.tistatic.com/categoryimg/v1/1/Jackets-41.png",
    },
    {
      name: "Fork Lift Trucks",
      imageUrl:
        "	https://tiimg.tistatic.com/categoryimg/v1/1/Fork-Lift-Trucks-1004.png",
    },
    {
      name: "Heaters",
      imageUrl: "https://tiimg.tistatic.com/categoryimg/v1/1/Heaters-300.png",
    },
    {
      name: "Blankets",
      imageUrl: "https://tiimg.tistatic.com/categoryimg/v1/1/Blankets-1109.png",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-primary mb-8 text-center">
        Trending Categories
      </h2>

      {/* Swiper Component */}
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        className="py-4"
        slidesPerView={6}
        loop={true}
        pagination={false}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide
            key={index}
            className="bg-white h-auto shadow-md  rounded-lg border  p-4 text-center "
          >
            {/* Image with Gradient Overlay */}
            <div className="relative  overflow-hidden rounded-lg mb-4">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="mx-auto w-full h-40 object-cover rounded-lg transition-transform transform hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-40"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              {category.name}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingCategoriesCarousel;
