'use client';

import { useState } from 'react';
import { Play, Eye, Calendar, Heart } from 'lucide-react';
import ServiceModal from './services/ServiceModal';

const liveStreams = [
  {
    title: 'Next-Gen Industrial Robotics Demo',
    description:
      'Watch our live demonstration of cutting-edge industrial robotics in action.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=225',
    date: '2024-03-15T14:00:00Z',
    viewers: 1200,
    hearts: 3500,
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    title: 'Sustainable Packaging Solutions',
    description:
      'Join us for an in-depth look at eco-friendly packaging innovations.',
    image:
      'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80&w=400&h=225',
    date: '2024-03-18T10:00:00Z',
    viewers: 850,
    hearts: 2100,
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    title: 'Global Supply Chain Optimization',
    description:
      'Expert panel discusses strategies for streamlining international logistics.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400&h=225',
    date: '2024-03-20T16:00:00Z',
    viewers: 1500,
    hearts: 4200,
    youtubeId: 'dQw4w9WgXcQ',
  },
];

export default function LiveStreamShowcase() {
  const [title, setTitle] = useState(null);
  const handleClose = () => {
    setTitle(null);
  };
  const handleClick = (title) => {
    setTitle(title);
  };
  const getVideoData = () => {
    return (
      <>
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/g9UT7rz6Qro"
            title="Training Guide"
            allowFullScreen
          />
        </div>
      </>
    );
  };
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Live Product Showcases
          </h2>
          <p className="text-tri text-xl max-w-2xl mx-auto">
            Experience real-time product demonstrations, expert reviews, and
            interactive Q&A sessions. Showcase your offerings or discover
            cutting-edge solutions from global innovators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {liveStreams.map((stream, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={stream.image}
                  alt={stream.title}
                  width={400}
                  height={225}
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                  <span className="animate-pulse mr-1">●</span> LIVE
                </div>
                <button
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 group"
                  onClick={() => handleClick(stream.title)}
                >
                  <div className="bg-primary text-white p-4 rounded-full transform transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-8 h-8" />
                  </div>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2 line-clamp-1">
                  {stream.title}
                </h3>
                <p className="text-secondary mb-4 text-sm line-clamp-2">
                  {stream.description}
                </p>
                <div className="flex justify-between items-center text-sm text-secondary">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-primary" />
                    {new Date(stream.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <Eye className="w-4 h-4 mr-1 text-primary" />
                    {stream.viewers.toLocaleString()}
                  </span>
                  <span className="flex items-center">
                    <Heart className="w-4 h-4 mr-1 text-red-500" />
                    {stream.hearts.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/sellers-login"
            className="btn btn-primary btn-outline text-white transform transition-transform duration-300 hover:scale-105 hover:!text-white"
          >
            Start Your Live Stream
          </a>
        </div>
      </div>

      {/* <YouTubeModal
        videoId={activeVideo || ''}
        isOpen={!!activeVideo}
        onClose={() => setActiveVideo(null)}
      /> */}
      <ServiceModal title={title || ''} onClose={handleClose} isOpen={!!title}>
        {getVideoData()}
      </ServiceModal>
    </section>
  );
}
