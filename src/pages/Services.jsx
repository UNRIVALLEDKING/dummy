import { ArrowRight } from 'lucide-react';
import ServiceGrid from '../components/ServiceGrid';

export default function Services() {
  return (
    <div className="min-h-screen pt-10 bg-white">
      <main>
        <div className="pb-12">
          <div className="container mx-auto items-center grid grid-cols-2 px-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#393939] mb-4">
                Our Services
              </h1>
              <p className="text-xl text-[#393939]/80">
                Comprehensive business solutions to help you succeed in the
                global marketplace
              </p>
              <div className="flex mt-5 items-center space-x-4">
                <button className="bg-[#f37a1f] text-white px-8 py-3 rounded-full hover:bg-[#e06a10] transition-colors flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-[#a4b6c2] text-[#393939] px-8 py-3 rounded-full hover:bg-[#d0d0c4]/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div>
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/g9UT7rz6Qro`}
                  title="Home Products & Innovations"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
        <ServiceGrid />
      </main>
    </div>
  );
}
