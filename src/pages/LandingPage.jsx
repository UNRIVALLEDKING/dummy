import { ArrowRight } from 'lucide-react';

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
      <div className="relative pb-20 pt-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <h1 className="text-5xl font-bold text-secondary leading-tight">
                Revolutionizing Global Trade & Business Networking
              </h1>
              <p className="text-xl text-[#393939]/80">
                Connect with verified suppliers, streamline operations, and grow
                your business globally with List2Ship&apos;s comprehensive
                platform.
              </p>
              <div className="flex items-center space-x-4">
                <button className="bg-[#f37a1f] text-white px-8 py-3 rounded-full hover:bg-[#e06a10] transition-colors flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-[#a4b6c2] text-[#393939] px-8 py-3 rounded-full hover:bg-[#d0d0c4]/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1681949287382-052ea3954a51"
                alt="Global Trade Network"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <ServiceButtons />
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
      <Membership />

      <Services />

      <VideoShowcase />
    </main>
  );
}
