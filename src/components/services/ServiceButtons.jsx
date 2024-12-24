import { useState } from 'react';
import {
  Users,
  Scale,
  Briefcase,
  MessageCircle,
  BarChart,
  ShoppingCart,
  Bell,
  Calendar,
  Globe,
  Video,
  Shield,
  Headphones,
  Code,
  TrendingUp,
  FileText,
  DollarSign,
} from 'lucide-react';
import ServiceButton from './ServiceButton';
import ServiceModal from './ServiceModal';
import {
  TrustedClients,
  LegalAssistance,
  BuyingSelling,
  Communication,
  Analytics,
  BestDeals,
  NewsAlerts,
  Events,
  GlobalMarketplace,
  LiveBroadcasting,
  VerifiedPartners,
  BusinessNetwork,
  AnalyticsDashboard,
  Support24x7,
  TechnicalAssistance,
  MarketingSupport,
  DocumentationSupport,
  HiringAssistance,
  FinancialSupport,
} from './ServiceContent';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
  { icon: Users, title: 'Trusted Clients', content: TrustedClients },
  {
    icon: Scale,
    title: 'Legal Assistance',
    content: LegalAssistance,
  },
  { icon: ShoppingCart, title: 'Buying & Selling', content: BuyingSelling },
  { icon: MessageCircle, title: 'Communication', content: Communication },
  { icon: BarChart, title: 'Analytics', content: Analytics },
  { icon: Briefcase, title: 'Best Deals', content: BestDeals },
  { icon: Bell, title: 'News & Alerts', content: NewsAlerts },
  { icon: Calendar, title: 'Events', content: Events },
  { icon: Globe, title: 'Global Marketplace', content: GlobalMarketplace },
  { icon: Video, title: 'Live Broadcasting', content: LiveBroadcasting },
  { icon: Shield, title: 'Verified Partners', content: VerifiedPartners },
  { icon: Users, title: 'Business Network', content: BusinessNetwork },
  { icon: BarChart, title: 'Analytics Dashboard', content: AnalyticsDashboard },
  { icon: Headphones, title: '24/7 Support', content: Support24x7 },
  {
    icon: Code,
    title: 'Technical Assistance',
    content: TechnicalAssistance,
  },
  {
    icon: TrendingUp,
    title: 'Marketing Support',
    content: MarketingSupport,
  },
  {
    icon: FileText,
    title: 'Documentation Support',
    content: DocumentationSupport,
  },
  {
    icon: Briefcase,
    title: 'Hiring Assistance',
    content: HiringAssistance,
  },
  {
    icon: DollarSign,
    title: 'Financial Support',
    content: FinancialSupport,
  },
];

export default function ServiceButtons() {
  const [selectedService, setSelectedService] = useState(null);

  const handleClick = (service) => {
    setSelectedService(service);
  };

  const handleClose = () => {
    setSelectedService(null);
  };

  const getServiceContent = () => {
    const service = services.find((s) => s.title === selectedService);
    return service?.content ? <service.content /> : null;
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto px-6">
        <div className="mb-12">
          <div className="text-center space-x-2">
            <h2 className="text-3xl font-bold text-[#393939]">Our Services</h2>
            <p className="text-[#393939]/60 mt-2">
              Explore our wide range of services designed to help your business
              grow
            </p>
          </div>
        </div>

        {/* Swiper for Services */}
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          navigation={true}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          modules={[Navigation, Autoplay]}
          className="!pb-12 swiper-button-disabled"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="w-full max-w-[300px]">
                <ServiceButton
                  icon={service.icon}
                  title={service.title}
                  onClick={() => handleClick(service.title)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Service Modal */}
      <ServiceModal
        isOpen={!!selectedService}
        onClose={handleClose}
        title={selectedService || ''}
      >
        {getServiceContent()}
      </ServiceModal>
    </section>
  );
}
