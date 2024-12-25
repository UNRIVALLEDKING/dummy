import { MapPin, Link2, Lock, Truck, BarChart } from 'lucide-react';

export default function ProcessFlow() {
  const steps = [
    {
      number: '01',
      icon: <MapPin className="w-12 h-12" />,
      title: 'Discover Tailored Opportunities',
      description:
        'Find suppliers, buyers, and products that match your needs with advanced search tools and interactive catalogs.',
      position: 'bottom',
      color: 'text-blue-500',
      gradient: 'from-blue-500/20 to-blue-500/5',
    },
    {
      number: '02',
      icon: <Link2 className="w-12 h-12" />,
      title: 'Connect with the Right Partners',
      description:
        'Use intelligent filters to find and connect with the best partners, supported by detailed company profiles.',
      position: 'top',
      color: 'text-orange-500',
      gradient: 'from-orange-500/20 to-orange-500/5',
    },
    {
      number: '03',
      icon: <Lock className="w-12 h-12" />,
      title: 'Secure Transactions with Confidence',
      description:
        'Ensure safe transactions and manage orders with a secure payment system and centralized dashboard.',
      position: 'bottom',
      color: 'text-gray-500',
      gradient: 'from-gray-500/20 to-gray-500/5',
    },
    {
      number: '04',
      icon: <Truck className="w-12 h-12" />,
      title: 'Achieve Transparent Fulfillment',
      description:
        'Track orders in real-time and optimize deliveries with data-driven strategies for efficiency.',
      position: 'top',
      color: 'text-yellow-500',
      gradient: 'from-yellow-500/20 to-yellow-500/5',
    },
    {
      number: '05',
      icon: <BarChart className="w-12 h-12" />,
      title: 'Innovate and Scale with Intelligence',
      description:
        'Leverage analytics to identify growth opportunities and customize features to scale your business.',
      position: 'bottom',
      color: 'text-blue-500',
      gradient: 'from-blue-500/20 to-blue-500/5',
    },
  ];

  return (
    <section className="py-20 bg-background overflow-x-hidden">
      <div className="mx-auto px-4">
        <h2 className="text-4xl font-bold text-secondary text-center mb-20">
          SmartTrade Evolution Process
        </h2>

        <div className="relative mx-auto">
          {/* Central Line */}
          <div className="absolute left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-primary to-blue-500 top-1/2 -translate-y-1 rounded-full shadow-lg" />

          <div className="relative grid grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  step.position === 'top'
                    ? 'items-center mb-80'
                    : 'items-center mt-[25rem]'
                }`}
              >
                {/* Content Container */}
                <div
                  className={`flex flex-col items-center ${
                    step.position === 'top' ? 'order-1' : 'order-3'
                  } 
                    group transition-all duration-300 hover:-translate-y-2`}
                >
                  <div
                    className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.gradient} 
                    shadow-lg flex items-center justify-center mb-4 transform transition-all duration-300 
                    group-hover:shadow-xl group-hover:scale-110 relative`}
                  >
                    <div
                      className={`${step.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      {step.icon}
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </div>
                  <h3
                    className={`text-xl text-center font-bold mb-2 ${step.color}`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-secondary text-center text-sm max-w-[180px] opacity-80">
                    {step.description}
                  </p>
                </div>

                {/* Number */}
                <div
                  className={`order-2 relative ${
                    step.position === 'top' ? 'mt-8' : 'mb-8'
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center 
                    ${step.color} border-2 border-current transform transition-transform duration-300 hover:scale-110`}
                  >
                    <span className="text-2xl font-bold">{step.number}</span>
                  </div>
                  {/* Triangle Pointer */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 
                    border-current ${step.color} ${
                      step.position === 'top'
                        ? 'bottom-[-0.65rem] border-b border-r'
                        : 'top-[-0.65rem] border-t border-l'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Responsive Note */}
          <div className="md:hidden text-center mt-8 text-tri">
            <p>
              Please view on a larger screen for the complete timeline
              visualization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
