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
        {keywords.map((keyword, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div>
              <h3 className="font-medium text-[#393939]">{keyword.term}</h3>
              <p className="text-sm text-[#393939]/60">
                Search Volume: {keyword.volume}
              </p>
            </div>
            <span
              className={`text-sm font-medium ${
                keyword.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {keyword.trend === 'up' ? '↑' : '↓'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
