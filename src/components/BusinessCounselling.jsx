import { Briefcase, Users, FileText, Globe } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Market Entry Strategy',
    description:
      'Expert guidance on entering new markets and expanding your business globally',
  },
  {
    icon: Users,
    title: 'Partner Matchmaking',
    description:
      'Connect with verified distributors, agents, and business partners',
  },
  {
    icon: FileText,
    title: 'Trade Documentation',
    description: 'Assistance with export/import documentation and compliance',
  },
  {
    icon: Globe,
    title: 'Global Trade Advisory',
    description:
      'Professional advice on international trade regulations and practices',
  },
];

export default function BusinessCounselling() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#393939]">
            Business Counselling
          </h2>
          <p className="text-[#393939]/60 mt-2">
            Expert guidance for your international trade journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.title} className="p-6 bg-gray-50 rounded-xl">
              <service.icon className="w-10 h-10 text-[#f37a1f] mb-4" />
              <h3 className="font-semibold text-[#393939] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#393939]/60">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
