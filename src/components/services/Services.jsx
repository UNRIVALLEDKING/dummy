import {
  FileText,
  TrendingUp,
  Briefcase,
  DollarSign,
  Code,
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Technical Assistance',
    description:
      'Expert support for website development, SEO optimization, and digital presence.',
  },
  {
    icon: TrendingUp,
    title: 'Marketing Support',
    description:
      'Comprehensive marketing solutions including video, podcasts, and social media.',
  },
  {
    icon: FileText,
    title: 'Documentation Support',
    description:
      'Guidance for GST, IEC codes, FSSAI registration, and essential business documents.',
  },
  {
    icon: Briefcase,
    title: 'Hiring Assistance',
    description:
      'End-to-end recruitment services to find and retain top talent.',
  },
  {
    icon: DollarSign,
    title: 'Financial Support',
    description: 'Access to low-interest loans and custom financing solutions.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Business Services
          </h2>
          <p className="text-xl text-gray-600">
            Supporting your business growth at every step
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
