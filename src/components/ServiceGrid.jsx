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

export default function ServiceGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="w-12 h-12 text-[#f37a1f] mb-4" />
              <h3 className="text-xl font-semibold text-[#393939] mb-2">
                {service.title}
              </h3>
              <p className="text-[#393939]/80">{service.description}</p>
              <button className="mt-6 text-[#f37a1f] font-medium hover:text-[#e06a10] transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
