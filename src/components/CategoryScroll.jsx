'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import {
  ShoppingBag,
  Lightbulb,
  Stethoscope,
  Building2,
  Briefcase,
  Cpu,
  FlaskRoundIcon as Flask,
  Shield,
  Car,
  Gift,
  Sun,
  Zap,
  Coffee,
  Syringe,
  Microscope,
  Dog,
  Truck,
  Plane,
  Ship,
  Warehouse,
  Factory,
  Package,
  PenToolIcon as Tools,
  Smartphone,
  Watch,
  Camera,
  Printer,
  Headphones,
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const categories = [
  { icon: ShoppingBag, name: 'Personal Care' },
  { icon: Lightbulb, name: 'Lights & Lighting' },
  { icon: Stethoscope, name: 'Health Care' },
  { icon: Building2, name: 'Construction' },
  { icon: Briefcase, name: 'Office Supplies' },
  { icon: Cpu, name: 'Electronics' },
  { icon: Flask, name: 'Chemicals' },
  { icon: Shield, name: 'Security' },
  { icon: Car, name: 'Vehicles' },
  { icon: Gift, name: 'Gifts & Crafts' },
  { icon: Sun, name: 'Renewable Energy' },
  { icon: Zap, name: 'Electrical' },
  { icon: Coffee, name: 'Food & Beverage' },
  { icon: Syringe, name: 'Medical Devices' },
  { icon: Microscope, name: 'Testing Equipment' },
  { icon: Dog, name: 'Pet Supplies' },
  { icon: Truck, name: 'Logistics' },
  { icon: Plane, name: 'Air Freight' },
  { icon: Ship, name: 'Sea Freight' },
  { icon: Warehouse, name: 'Storage' },
  { icon: Factory, name: 'Manufacturing' },
  { icon: Package, name: 'Packaging' },
  { icon: Tools, name: 'Industrial Tools' },
  { icon: Smartphone, name: 'Mobile Accessories' },
  { icon: Watch, name: 'Timepieces' },
  { icon: Camera, name: 'Photography' },
  { icon: Printer, name: 'Office Equipment' },
  { icon: Headphones, name: 'Audio & Video' },
];

export default function CategoryScroller() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-secondary mb-8">
          Browse Categories
        </h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={2}
          navigation
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 4 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 8 },
          }}
          className="category-swiper"
        >
          {categories.map((Category, index) => (
            <SwiperSlide key={index}>
              <div className="card h-32 flex flex-col items-center justify-center p-4 hover:border-primary transition-colors cursor-pointer group">
                <Category.icon className="w-8 h-8 mb-2 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-xs text-center text-secondary group-hover:text-primary transition-colors">
                  {Category.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
