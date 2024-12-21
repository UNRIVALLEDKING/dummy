// import { useMemo } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import Flag from 'react-world-flags';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
// import countryList from 'react-select-country-list';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const topCountries = [
  { code: 'US', name: 'United States', trade: '$4.2T' },
  { code: 'CN', name: 'China', trade: '$4.6T' },
  { code: 'DE', name: 'Germany', trade: '$3.2T' },
  { code: 'JP', name: 'Japan', trade: '$1.6T' },
  { code: 'GB', name: 'United Kingdom', trade: '$1.2T' },
  { code: 'FR', name: 'France', trade: '$1.1T' },
  { code: 'IN', name: 'India', trade: '$1.0T' },
  { code: 'IT', name: 'Italy', trade: '$1.0T' },
  { code: 'KR', name: 'South Korea', trade: '$1.1T' },
  { code: 'CA', name: 'Canada', trade: '$0.9T' },
  { code: 'SG', name: 'Singapore', trade: '$0.8T' },
  { code: 'AE', name: 'UAE', trade: '$0.7T' },
];

export default function CountrySection() {
  //   const countries = useMemo(() => countryList().getData(), []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-2">
            <MapPin className="w-8 h-8 text-[#f37a1f]" />
            <div>
              <h2 className="text-3xl font-bold text-[#393939]">
                Top Trading Countries
              </h2>
              <p className="text-[#393939]/60 mt-2">
                Connect with leading global markets
              </p>
            </div>
          </div>
          <button className="flex items-center space-x-2 text-[#f37a1f] hover:text-[#e06a10]">
            <span>View All Countries</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          navigation={true}
          loop
          next
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Navigation, Autoplay]}
          className="!pb-12 swiper-button-disabled"
        >
          {topCountries.map((country) => (
            <SwiperSlide key={country.code}>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-12 relative overflow-hidden rounded-lg">
                    <Flag
                      code={country.code}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#393939]">
                      {country.name}
                    </h3>
                    <p className="text-sm text-[#393939]/60">
                      Annual Trade: {country.trade}
                    </p>
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
