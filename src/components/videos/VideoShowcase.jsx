const videos = [
  {
    title: 'Start Your List2Ship Journey',
    description: 'A step-by-step guide to getting started',
    videoId: '_bB3BQmrECQ',
  },
  {
    title: 'Key Benefits of List2Ship',
    description: 'Discover how we can help your business grow',
    videoId: 'MnEeP7eVCFo',
  },
  {
    title: 'Home Products & Innovations',
    description: 'Learn how to ship your home products globally',
    videoId: 'g9UT7rz6Qro',
  },
];

export default function VideoShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#393939] mb-4">
            Learn More About List2Ship
          </h2>
          <p className="text-xl text-[#393939]/80">
            Watch our guides and tutorials
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="space-y-4">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  allowFullScreen
                />
              </div>
              <h3 className="text-xl font-semibold text-[#393939]">
                {video.title}
              </h3>
              <p className="text-[#393939]/80">{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
