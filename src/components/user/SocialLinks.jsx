import { Globe, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function SocialLinks() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-[#393939] mb-4">
        Online Presence
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href="#"
          className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Globe className="w-5 h-5 text-[#f37a1f]" />
          <span className="text-[#393939]">www.techcraft.com</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Facebook className="w-5 h-5 text-[#f37a1f]" />
          <span className="text-[#393939]">TechCraft Electronics</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Linkedin className="w-5 h-5 text-[#f37a1f]" />
          <span className="text-[#393939]">techcraft-electronics</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Instagram className="w-5 h-5 text-[#f37a1f]" />
          <span className="text-[#393939]">@techcraft_electronics</span>
        </a>
      </div>
    </section>
  );
}
