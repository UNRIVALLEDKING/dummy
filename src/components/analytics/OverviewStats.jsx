import React from 'react';
import { TrendingUp, Users, Eye, MessageSquare } from 'lucide-react';

const stats = [
  {
    label: 'Total Revenue',
    value: '$124,592',
    change: '+12.5%',
    icon: TrendingUp,
    trend: 'up'
  },
  {
    label: 'Total Leads',
    value: '2,847',
    change: '+18.2%',
    icon: Users,
    trend: 'up'
  },
  {
    label: 'Product Views',
    value: '187,492',
    change: '+25.8%',
    icon: Eye,
    trend: 'up'
  },
  {
    label: 'Enquiries',
    value: '1,234',
    change: '+15.3%',
    icon: MessageSquare,
    trend: 'up'
  }
];

export default function OverviewStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <stat.icon className="w-8 h-8 text-[#f37a1f]" />
            <span className={`text-sm font-medium ${
              stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
            }`}>
              {stat.change}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#393939]">{stat.value}</h3>
          <p className="text-[#393939]/60">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}