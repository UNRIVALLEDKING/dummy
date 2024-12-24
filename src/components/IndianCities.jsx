'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const cities = [
  {
    name: 'Delhi',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5',
    description: 'Capital Region',
  },
  {
    name: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f',
    description: 'Financial Hub',
  },
  {
    name: 'Kolkata',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255',
    description: 'Cultural Capital',
  },
  {
    name: 'Ahmedabad',
    image:
      'https://media.istockphoto.com/id/485030940/vector/ahmedabad-skyline-vector-illustration-linear.jpg?s=1024x1024&w=is&k=20&c=Bc9ajZ6HRi3a1aJfHDQHTYpN9ILVK4GEnA25FuJwHUw=',
    description: 'Industrial Center',
  },
  {
    name: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2',
    description: 'Tech Hub',
  },
  {
    name: 'Chennai',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220',
    description: 'Automotive Hub',
  },
  {
    name: 'Hyderabad',
    image:
      'https://media.istockphoto.com/id/2168524178/photo/group-of-people-in-front-of-building.jpg?s=1024x1024&w=is&k=20&c=dF0kaF9mDTlZrzUNMz3a9ppzmqp6qmb6yzOv4HWMw-Q=',
    description: 'Pearl City',
  },
  {
    name: 'Pune',
    image:
      'https://images.unsplash.com/photo-1601039913996-d74e58095333?q=80&w=2000&auto=format&fit=crop',
    description: 'Education Hub',
  },
];

export default function IndianCities() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-secondary">
            Sellers by Cities
          </h2>
          <button className="btn btn-ghost text-primary hover:text-primary/80">
            View All <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.2}
          navigation
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 4.2 },
          }}
          className="cities-swiper"
        >
          {cities.map((city, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={city.image}
                  alt={city.name}
                  className="group-hover:scale-110 transition-transform duration-300 object-cover object-fill"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{city.name}</h3>
                  <p className="text-sm text-white/80">{city.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
