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
} from 'lucide-react';
import ServiceButton from './ServiceButton';
import ServiceModal from './ServiceModal';
import {
  TrustedClients,
  LegalAssistance,
  BuyingSelling,
} from './ServiceContent';

const services = [
  { icon: Users, title: 'Trusted Clients', content: TrustedClients },
  {
    icon: Scale,
    title: 'Legal & Technical Assistance',
    content: LegalAssistance,
  },
  { icon: ShoppingCart, title: 'Buying & Selling', content: BuyingSelling },
  { icon: MessageCircle, title: 'Communication', content: null },
  { icon: BarChart, title: 'Analytics', content: null },
  { icon: Briefcase, title: 'Best Deals', content: null },
  { icon: Bell, title: 'News & Alerts', content: null },
  { icon: Calendar, title: 'Events', content: null },
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
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {services.map((service, index) => (
            <ServiceButton
              key={index}
              icon={service.icon}
              title={service.title}
              onClick={() => handleClick(service.title)}
            />
          ))}
        </div>
      </div>
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
