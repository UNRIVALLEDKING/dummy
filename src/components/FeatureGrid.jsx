import {
  Package,
  Search,
  Users,
  FileText,
  MessageCircle,
  Video,
  Scale,
  Building2,
  Bot,
  Star,
  BarChart3,
  Briefcase,
  Newspaper,
  GraduationCap,
  ShieldCheck,
  MapPin,
  LayoutDashboard,
  Film,
  Truck,
  Radio,
} from 'lucide-react';

const features = [
  {
    icon: Package,
    title: 'Product & Service Listings',
    description:
      'Detailed entries with descriptions, images, and pricing for maximum visibility',
  },
  {
    icon: Search,
    title: 'Advanced Search Filters',
    description:
      'Search by product type, supplier type, location, and industry',
  },
  {
    icon: Users,
    title: 'Category-Specific Listings',
    description:
      'Dedicated sections for importers, exporters, manufacturers, and more',
  },
  {
    icon: FileText,
    title: 'HSN Code',
    description: 'Access codes details for trade compliance',
  },
  {
    icon: MessageCircle,
    title: 'Live Enquiries Board',
    description: 'Real-time posting and response for trade inquiries',
  },
  {
    icon: Video,
    title: 'Video Marketing',
    description: 'Live product showcases and demos shared on social platforms',
  },
  {
    icon: Scale,
    title: 'Legal Assistance',
    description: 'Support for business registration and compliance',
  },
  {
    icon: Building2,
    title: 'Virtual Trade Shows',
    description: 'Online exhibitions to showcase products globally',
  },
  {
    icon: Bot,
    title: 'Multi-Language Support',
    description: 'AI-powered chatbots for enhanced accessibility',
  },
  {
    icon: Star,
    title: 'Ratings & Reviews',
    description: 'Build trust through user feedback and ratings',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Forecasting',
    description: 'Track performance and market trends in real-time',
  },
  {
    icon: Briefcase,
    title: 'Jobs & Internships',
    description: 'Career opportunities with trade companies',
  },
  {
    icon: Newspaper,
    title: 'News Portal',
    description: 'Stay updated with global trade news and trends',
  },
  {
    icon: GraduationCap,
    title: 'Training Resources',
    description: 'Access webinars and workshops on trade topics',
  },
  {
    icon: ShieldCheck,
    title: 'Verification Services',
    description: 'Ensure trust with verified suppliers and products',
  },
  {
    icon: MapPin,
    title: 'One District - Top Products',
    description: 'Showcase top products from various districts',
  },
  {
    icon: LayoutDashboard,
    title: 'Customizable Dashboards',
    description: 'Manage all business metrics in one place',
  },
  {
    icon: Film,
    title: 'Interactive Catalogs',
    description: 'Enhanced catalogs with videos and 360° views',
  },
  {
    icon: Truck,
    title: 'Logistics Support',
    description: 'End-to-end supply chain management',
  },
  {
    icon: Radio,
    title: 'Live Broadcasting',
    description: 'Direct engagement through live telecasting',
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#393939] mb-4">
            Powerful Features for Modern Trade
          </h2>
          <p className="text-xl text-[#393939]/80">
            Everything you need to succeed in global commerce
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-10 h-10 text-[#f37a1f] mb-4" />
              <h3 className="text-lg font-semibold text-[#393939] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#393939]/80 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
