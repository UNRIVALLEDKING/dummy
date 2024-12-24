export default function Vision() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
        alt="Global network visualization"
        className="absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center justify-center">
        <div className="max-w-4xl text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Vision
          </h2>
          <p className="text-xl md:text-2xl text-white leading-relaxed">
            Transforming the global business landscape with an innovative
            platform that seamlessly connects buyers and sellers, driving
            unprecedented growth and economic opportunities worldwide.
          </p>
          <button className="mt-8 btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
