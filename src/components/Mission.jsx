export default function Mission() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
        alt="Team collaboration"
        className="absolute inset-0 object-cover w-full"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-secondary/50 flex items-center justify-center">
        <div className="max-w-4xl text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-white leading-relaxed">
            Empowering businesses globally through innovative, cost-effective
            solutions and cutting-edge technology, facilitating seamless trade
            and fostering unparalleled growth opportunities for enterprises of
            all sizes.
          </p>
          <button className="mt-8 btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-secondary">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
}
