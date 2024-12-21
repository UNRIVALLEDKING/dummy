import { Globe, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const regions = [
  {
    name: 'Asia Pacific',
    image:
      'https://images.unsplash.com/photo-1535139262971-c51845709a48?auto=format&fit=crop&w=800&q=80',
    description:
      'Fastest growing region with diverse manufacturing capabilities',
    countries: ['China', 'Japan', 'South Korea', 'India', 'Australia'],
  },
  {
    name: 'Europe',
    image:
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',
    description: 'High-quality products and advanced technology solutions',
    countries: ['Germany', 'France', 'Italy', 'UK', 'Netherlands'],
  },
  {
    name: 'North America',
    image:
      'https://images.unsplash.com/photo-1422464804701-7d8356b3a42f?auto=format&fit=crop&w=800&q=80',
    description: 'Innovation hub with strong consumer market',
    countries: ['USA', 'Canada', 'Mexico'],
  },
  {
    name: 'Middle East',
    image:
      'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=800&q=80',
    description: 'Growing market with focus on technology and infrastructure',
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Bahrain'],
  },
  {
    name: 'South America',
    image:
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80',
    description: 'Rich in natural resources and agricultural products',
    countries: ['Brazil', 'Argentina', 'Chile', 'Colombia'],
  },
  {
    name: 'Africa',
    image:
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80',
    description: 'Emerging markets with vast growth potential',
    countries: ['South Africa', 'Nigeria', 'Egypt', 'Kenya'],
  },
  {
    name: 'Southeast Asia',
    image:
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    description: 'Dynamic economies with strong manufacturing base',
    countries: ['Singapore', 'Thailand', 'Vietnam', 'Indonesia'],
  },
  {
    name: 'Oceania',
    image:
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80',
    description: 'Advanced economies with focus on sustainability',
    countries: ['Australia', 'New Zealand', 'Fiji', 'Papua New Guinea'],
  },
];

export default function RegionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-2">
            <Globe className="w-8 h-8 text-[#f37a1f]" />
            <div>
              <h2 className="text-3xl font-bold text-[#393939]">
                Trade by Region
              </h2>
              <p className="text-[#393939]/60 mt-2">
                Explore business opportunities across global markets
              </p>
            </div>
          </div>
          <button className="flex items-center space-x-2 text-[#f37a1f] hover:text-[#e06a10]">
            <span>View All Regions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          pagination={{ clickable: true }}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="!pb-12"
        >
          {regions.map((region) => (
            <SwiperSlide key={region.name}>
              <div className="bg-white h-full rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] relative">
                  <img
                    src={region.image}
                    alt={region.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-semibold">
                        {region.name}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#393939]/80 mb-4 line-clamp-2">
                    {region.description}
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium text-[#393939]">Key Markets:</p>
                    <div className="flex flex-wrap gap-2">
                      {region.countries.map((country) => (
                        <span
                          key={country}
                          className="px-3 py-1 bg-[#f37a1f]/10 rounded-full text-sm text-[#f37a1f]"
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
