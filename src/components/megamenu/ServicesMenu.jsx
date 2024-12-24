import {
  Code,
  TrendingUp,
  FileText,
  Briefcase,
  DollarSign,
} from "lucide-react";

export default function ServicesMenu() {
  const services = [
    {
      icon: Code,
      title: "Technical Assistance",
      description:
        "Expert support for website development, SEO optimization, and digital presence.",
    },
    {
      icon: TrendingUp,
      title: "Marketing Support",
      description:
        "Comprehensive marketing solutions including video, podcasts, and social media.",
    },
    {
      icon: FileText,
      title: "Documentation Support",
      description:
        "Guidance for GST, IEC codes, FSSAI registration, and essential business documents.",
    },
    {
      icon: Briefcase,
      title: "Hiring Assistance",
      description:
        "End-to-end recruitment services to find and retain top talent.",
    },
    {
      icon: DollarSign,
      title: "Financial Support",
      description:
        "Access to low-interest loans and custom financing solutions.",
    },
  ];

  return (
    <div
      className={`dropdown-content menu bg-white shadow-lg z-50 rounded-md w-[60vw] absolute left-0 top-full`}
    >
      <div className="container mx-auto px-4 py-6">
        {/* Title Section with Subtitle and View All Button */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="font-semibold text-2xl text-primary">
              Our Services
            </h3>
            <p className="text-lg text-[#393939]/70">
              Explore our wide range of services designed to help your business
              grow.
            </p>
          </div>
          <div className="text-sm cursor-pointer font-semibold text-primary hover:text-secondary transition-all duration-300">
            View All Services
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#f37a1f] text-white rounded-full mb-4">
                <service.icon className="w-8 h-8" />
              </div>
              <p className="font-semibold text-xl text-[#393939]">
                {service.title}
              </p>
              <p className="text-sm text-[#393939]/70 mt-2 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
