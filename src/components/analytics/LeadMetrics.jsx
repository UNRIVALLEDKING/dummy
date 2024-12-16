import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', leads: 65, conversions: 45 },
  { name: 'Feb', leads: 78, conversions: 52 },
  { name: 'Mar', leads: 90, conversions: 61 },
  { name: 'Apr', leads: 81, conversions: 56 },
  { name: 'May', leads: 95, conversions: 70 },
  { name: 'Jun', leads: 110, conversions: 85 },
];

export default function LeadMetrics() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold text-[#393939] mb-6">
        Lead Generation & Conversion Trends
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="leads"
              stroke="#f37a1f"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="conversions"
              stroke="#393939"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
