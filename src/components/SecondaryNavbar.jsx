import {
  Layers,
  Star,
  Lightbulb,
  Home,
  MapPin,
  MessageSquare,
  Video,
  HelpCircle,
} from 'lucide-react';

const categories = [
  { icon: Layers, label: 'All Categories', path: '/categories' },
  { icon: Star, label: 'Featured Categories', path: '/categories/featured' },
  {
    icon: Lightbulb,
    label: 'Innovative Categories',
    path: '/categories/innovative',
  },
  { icon: Home, label: 'Homemade Creations', path: '/categories/homemade' },
  { icon: MapPin, label: 'ODOP', path: '/odop' },
  { icon: MessageSquare, label: 'Live Enquiries', path: '/enquiries' },
  { icon: Video, label: 'Live Streamings', path: '/live' },
  { icon: HelpCircle, label: 'Help Station', path: '/help' },
];

export default function SecondaryNav() {
  return (
    <div className="bg-white border-b border-[#d0d0c4]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center overflow-x-auto hide-scrollbar">
          {categories.map((category) => (
            <a
              key={category.path}
              href="/products"
              className="flex items-center space-x-2 px-4 py-3 text-sm text-[#393939] hover:text-[#f37a1f] whitespace-nowrap transition-colors"
            >
              <category.icon className="w-4 h-4" />
              <span>{category.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
