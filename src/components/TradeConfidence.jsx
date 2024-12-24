import { CheckCircle, Shield, Play } from 'lucide-react';

export default function TradeConfidence() {
  return (
    <section className="relative pt-80 pb-40 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
        alt="Background"
        className="absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Trade with confidence from production quality to purchase protection
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Verified Supplier Card */}
          <div className="card bg-white/10 backdrop-blur-md border-0">
            <div className="card-body p-8">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
                <h3 className="text-2xl font-bold text-white">
                  Verified Supplier
                </h3>
              </div>
              <p className="text-white/90 mb-8">
                Connect with a variety of suppliers with third-party-verified
                credentials and capabilities. Look for the &quot;Verified&quot;
                logo to begin sourcing with experienced suppliers your business
                could rely on.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-outline btn-sm text-white hover:bg-white/20">
                  <Play className="w-4 h-4 mr-2" /> Watch video
                </button>
                <button className="btn btn-link btn-sm text-white hover:text-primary">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Trade Assurance Card */}
          <div className="card bg-white/10 backdrop-blur-md border-0">
            <div className="card-body p-8">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-10 h-10 text-[#FFD700]" />
                <h3 className="text-2xl font-bold text-white">
                  Trade Assurance
                </h3>
              </div>
              <p className="text-white/90 mb-8">
                Source confidently with access to secure payment options,
                protection against product or shipping issues, and mediation
                support for any purchase-related concerns when you order and pay
                on List2Ship.com.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-outline btn-sm text-white hover:bg-white/20">
                  <Play className="w-4 h-4 mr-2" /> Watch video
                </button>
                <button className="btn btn-link btn-sm text-white hover:text-primary">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
