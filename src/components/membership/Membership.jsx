import PricingCard from './PricingCard';

const plans = [
  {
    title: 'Free',
    price: 'Free',
    features: [
      { text: 'Basic product listings', included: true },
      { text: 'Limited search access', included: true },
      { text: 'Community support', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Live broadcasting', included: false },
      { text: 'Priority support', included: false },
    ],
  },
  {
    title: 'Premium',
    price: '$49',
    features: [
      { text: 'Unlimited product listings', included: true },
      { text: 'Advanced search features', included: true },
      { text: 'Priority support', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Live broadcasting', included: true },
      { text: 'Verified seller badge', included: true },
    ],
    isPopular: true,
  },
  {
    title: 'Enterprise',
    price: '$199',
    features: [
      { text: 'Custom solutions', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'API access', included: true },
      { text: 'White-label options', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'Advanced security', included: true },
    ],
  },
];

export default function Membership() {
  return (
    <section id="membership" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#393939] mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600">
            Select the perfect plan for your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
