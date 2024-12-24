import { CheckCircle, TrendingUp, Users, Lightbulb } from 'lucide-react';

export default function Milestones() {
  const milestones = [
    {
      year: 2025,
      text: 'Onboard 1 Million Global Users : Successfully onboard 1 million businesses globally (buyers, sellers, and service providers) to List2Ship.com by the end of 2025.',
      icon: <Users className="w-12 h-12" />,
    },
    {
      year: 2025,
      text: 'Achieve 500,000 Active Users : Attain 500,000 active users across the platform, with consistent engagement and growth in daily activities.',
      icon: <TrendingUp className="w-12 h-12" />,
    },
    {
      year: 2025,
      text: 'Support 100,000 Users with Innovative Solutions : Provide exceptional support and value-added services to 100,000 users, leveraging innovative features and tailored business solutions to enhance their experience and success.',
      icon: <Lightbulb className="w-12 h-12" />,
    },
  ];

  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-secondary text-center">
          Our Milestones - 2025
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>

          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'
                }`}
              >
                <div className="bg-white shadow-lg rounded-lg p-6 inline-block">
                  <div className="text-primary mb-4">{milestone.icon}</div>
                  <h3 className="text-2xl font-semibold text-secondary mb-2">
                    {milestone.year}
                  </h3>
                  <p className="text-secondary text-lg">{milestone.text}</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
