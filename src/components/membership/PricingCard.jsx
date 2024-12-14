import { Check } from 'lucide-react';

// eslint-disable-next-line react/prop-types
export default function PricingCard({ title, price, features, isPopular }) {
  return (
    <div
      className={`bg-white p-8 rounded-xl shadow-lg border-2 ${
        isPopular ? 'border-[#f37a1f]' : 'border-gray-100'
      }`}
    >
      {isPopular && (
        <span className="bg-[#f37a1f] text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold text-[#393939] mt-4">{title}</h3>
      <div className="mt-4">
        <span className="text-4xl font-bold text-[#393939]">{price}</span>
        {price !== 'Free' && <span className="text-gray-600">/month</span>}
      </div>
      <ul className="mt-8 space-y-4">
        {/* eslint-disable-next-line react/prop-types */}
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <Check
              className={`w-5 h-5 ${
                feature.included ? 'text-[#f37a1f]' : 'text-gray-300'
              }`}
            />
            <span
              className={feature.included ? 'text-[#393939]' : 'text-gray-400'}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full mt-8 px-6 py-3 rounded-lg ${
          isPopular
            ? 'bg-[#f37a1f] text-white hover:bg-[#e06a10]'
            : 'bg-[#393939] text-white hover:bg-[#2a2a2a]'
        } transition-colors`}
      >
        Get Started
      </button>
    </div>
  );
}
