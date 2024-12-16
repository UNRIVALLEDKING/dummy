import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';

const data = [
  { name: 'North America', value: 35 },
  { name: 'Europe', value: 25 },
  { name: 'Asia', value: 20 },
  { name: 'Middle East', value: 15 },
  { name: 'Others', value: 5 },
];

const COLORS = ['#f37a1f', '#393939', '#a4b6c2', '#d0d0c4', '#e06a10'];

export default function RegionalTraffic() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold text-[#393939] mb-6">
        Regional Traffic Distribution
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
