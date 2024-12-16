import { TrendingDown, TrendingUp } from 'lucide-react';

const keywords = [
  { term: 'Solar Energy Solutions', volume: '15.2K', trend: 'up' },
  { term: 'LED Manufacturing', volume: '12.8K', trend: 'up' },
  { term: 'Smart Home Devices', volume: '10.5K', trend: 'up' },
  { term: 'Industrial Automation', volume: '9.7K', trend: 'down' },
  { term: 'Green Technology', volume: '8.9K', trend: 'up' },
];

export default function KeywordAnalysis() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold text-[#393939] mb-6">
        Top Performing Keywords
      </h2>
      <div className="space-y-4">
        {keywords.map(({ term, volume, trend }, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            {/* Keyword Details */}
            <div>
              <h3 className="font-medium text-[#393939]">{term}</h3>
              <p className="text-sm text-[#393939]/60">
                Search Volume: {volume}
              </p>
            </div>

            {/* Trend Icon */}
            <span
              className={`flex items-center text-xl font-medium text-white py-2 rounded-full px-2 ${
                trend === 'up' ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              {trend === 'up' ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
