import { MessageSquare, Clock, CheckCircle, XCircle } from 'lucide-react';

const enquiryStats = [
  {
    label: 'Total Enquiries',
    value: '1,234',
    icon: MessageSquare,
    color: 'text-blue-500',
  },
  {
    label: 'Pending Response',
    value: '45',
    icon: Clock,
    color: 'text-yellow-500',
  },
  {
    label: 'Resolved',
    value: '1,156',
    icon: CheckCircle,
    color: 'text-green-500',
  },
  {
    label: 'Unresolved',
    value: '33',
    icon: XCircle,
    color: 'text-red-500',
  },
];

export default function EnquiryAnalytics() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold text-[#393939] mb-6">
        Enquiry Analytics
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {enquiryStats.map((stat, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <stat.icon className={`w-8 h-8 ${stat.color} mb-2`} />
            <h3 className="text-2xl font-bold text-[#393939]">{stat.value}</h3>
            <p className="text-sm text-[#393939]/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
