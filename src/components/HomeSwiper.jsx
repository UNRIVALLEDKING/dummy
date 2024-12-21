import { Search, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80',
    title: 'Global Trading Hub',
    description:
      'Connect with verified manufacturers, suppliers, and buyers worldwide',
  },
  {
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80',
    title: 'Business Growth',
    description: 'Expand your business reach across international markets',
  },
  {
    image:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1920&q=80',
    title: 'Quality Products',
    description: 'Source high-quality products from verified suppliers',
  },
  {
    image:
      'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?auto=format&fit=crop&w=1920&q=80',
    title: 'Global Logistics',
    description: 'Seamless shipping and logistics solutions worldwide',
  },
  {
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80',
    title: 'Expert Support',
    description: 'Get expert guidance for international trade',
  },
];

export default function HomeSwiper() {
  return (
    <div className="relative h-[80vh] bg-gray-900">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container mx-auto px-6 text-center text-white">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8">
                    {slide.description}
                  </p>
                  <div className="max-w-2xl mx-auto">
                    <div className="relative mb-6">
                      <input
                        type="text"
                        placeholder="Search products, suppliers, or buyers..."
                        className="w-full p-4 pr-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#f37a1f]"
                      />
                      <Search className="absolute right-4 top-4 w-6 h-6 text-white/60" />
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      <button className="bg-[#f37a1f] text-white px-8 py-3 rounded-full hover:bg-[#e06a10] transition-colors flex items-center space-x-2">
                        <span>Start Trading</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                        Post Enquiry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
