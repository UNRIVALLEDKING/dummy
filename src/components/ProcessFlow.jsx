import {
  Search,
  CheckSquare,
  CreditCard,
  Package,
  Settings,
} from 'lucide-react';

export default function ProcessFlow() {
  const steps = [
    {
      icon: <Search className="w-6 h-6 text-primary" />,
      title: 'Search for matches',
      description:
        'Search and filter from millions of product and supplier offerings to find the matching ones for your business.',
    },
    {
      icon: <CheckSquare className="w-6 h-6 text-primary" />,
      title: 'Identify the right one',
      description:
        'Compare products, verify suppliers, and choose the perfect match for your needs.',
    },
    {
      icon: <CreditCard className="w-6 h-6 text-primary" />,
      title: 'Pay with confidence',
      description:
        'Secure payment options with buyer protection for peace of mind.',
    },
    {
      icon: <Package className="w-6 h-6 text-primary" />,
      title: 'Fulfill with transparency',
      description:
        'Track your order from production to delivery with real-time updates.',
    },
    {
      icon: <Settings className="w-6 h-6 text-primary" />,
      title: 'Manage with ease',
      description:
        'Streamlined order management and support throughout the process.',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-secondary text-center mb-12">
          Streamline ordering from search to fulfillment, all in one place
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative">
            <div className="absolute w-0.5 bg-primary/20 top-0 bottom-0 left-6 -ml-px"></div>
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center relative z-10">
                    {step.icon}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-secondary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-tri">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="sticky top-24 space-y-8">
              <img
                src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80"
                alt="Product search"
                width={500}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
