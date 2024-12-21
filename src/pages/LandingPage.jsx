// import { ArrowRight } from 'lucide-react';

import ServiceButtons from '../components/services/ServiceButtons';

import {
  Globe,
  Users,
  BarChart,
  Video,
  Shield,
  Headphones,
} from 'lucide-react';
import Membership from '../components/membership/Membership';
import Services from '../components/services/Services';
import VideoShowcase from '../components/videos/VideoShowcase';
import HomeSwiper from '../components/HomeSwiper';
import RegionSection from '../components/RegionSection';
import CountrySection from '../components/CountrySection';
import ProductShowcase from '../components/products/productShowcase';
import BusinessCounselling from '../components/BusinessCounselling';

export default function LandingPage() {
  const features = [
    {
      icon: Globe,
      title: 'Global Marketplace',
      description:
        'Connect with verified suppliers and buyers worldwide through our comprehensive trading platform.',
    },
    {
      icon: Video,
      title: 'Live Broadcasting',
      description:
        'Showcase products through live streams, interactive demos, and virtual trade shows.',
    },
    {
      icon: Shield,
      title: 'Verified Partners',
      description:
        'All suppliers and products undergo thorough verification for secure trading.',
    },
    {
      icon: Users,
      title: 'Business Network',
      description:
        'Build lasting relationships with importers, exporters, manufacturers, and distributors.',
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description:
        'Track performance, market trends, and business insights in real-time.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description:
        'Access multilingual support and assistance whenever you need it.',
    },
  ];

  return (
    <main>
      <HomeSwiper />
      <ServiceButtons />
      <RegionSection />
      <CountrySection />
      <ProductShowcase
        title="Innovative Products"
        subtitle="Discover cutting-edge solutions and unique offerings"
        type="innovative"
      />
      <ProductShowcase
        title="Featured Products"
        subtitle="Hand-picked quality products from verified sellers"
        type="featured"
      />
      <ProductShowcase
        title="Trending Products"
        subtitle="Most sought-after products in the market"
        type="trending"
      />
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#393939] mb-4">
              Powerful Features for Modern Trade
            </h2>
            <p className="text-xl text-[#393939]/80">
              Everything you need to succeed in global commerce
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 border border-[#d0d0c4] rounded-xl hover:shadow-lg transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-[#f37a1f] mb-4" />
                <h3 className="text-xl font-semibold text-[#393939] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#393939]/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BusinessCounselling />
      {/* <Membership /> */}
      <Services />
      <VideoShowcase />
    </main>
  );
}
