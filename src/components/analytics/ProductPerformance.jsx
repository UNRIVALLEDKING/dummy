import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'LED Bulbs', views: 4000, revenue: 2400 },
  { name: 'Solar Panels', views: 3000, revenue: 1398 },
  { name: 'Power Banks', views: 2000, revenue: 9800 },
  { name: 'Smart Switches', views: 2780, revenue: 3908 },
  { name: 'CCTV Cameras', views: 1890, revenue: 4800 },
];

export default function ProductPerformance() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold text-[#393939] mb-6">
        Top Products Performance
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="views" fill="#f37a1f" />
            <Bar dataKey="revenue" fill="#393939" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
