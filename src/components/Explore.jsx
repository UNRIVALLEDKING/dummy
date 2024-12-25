'use client';
import { Headphones, Play, ChevronRight } from 'lucide-react';
import ServiceModal from './services/ServiceModal';
import { useState } from 'react';

export default function Explore() {
  const [title, setTitle] = useState(null);
  const items = [
    {
      type: 'podcast',
      title: 'The Future of B2B Trade',
      description: 'Exploring emerging trends in global commerce',
      image:
        'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=400&h=300',
      duration: '45 min',
    },
    {
      type: 'demo',
      title: 'SmartTrade Platform Demo',
      description: 'See our cutting-edge features in action',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=300',
      duration: '15 min',
    },
    {
      type: 'podcast',
      title: 'Navigating Global Supply Chains',
      description: 'Insights from industry experts on supply chain management',
      image:
        'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=400&h=300',
      duration: '60 min',
    },
    {
      type: 'demo',
      title: 'AI-Powered Matchmaking',
      description: 'Discover how our AI connects businesses',
      image:
        'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=400&h=300',
      duration: '20 min',
    },
  ];
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Explore Our Content
          </h2>
          <p className="text-secondary text-xl max-w-2xl mx-auto">
            Dive into our podcasts and product demos to learn more about global
            trade and our innovative solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative h-64 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="transition-transform object-fill w-full duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 left-4 bg-white/90 rounded-full px-3 py-1 text-sm font-semibold text-secondary">
                  {item.type === 'podcast' ? 'Podcast' : 'Demo'}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/90 text-sm flex items-center">
                      {item.type === 'podcast' ? (
                        <Headphones className="w-4 h-4 mr-2" />
                      ) : (
                        <Play className="w-4 h-4 mr-2" />
                      )}
                      {item.duration}
                    </span>
                    <button
                      onClick={() => handleClick(item.title)}
                      className="bg-primary text-white px-4 py-1 rounded-full text-xs flex items-center transition-colors hover:bg-primary/90"
                    >
                      {item.type === 'podcast' ? 'Listen Now' : 'Watch Demo'}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ServiceModal title={title || ''} onClose={handleClose} isOpen={!!title}>
        {getVideoData()}
      </ServiceModal>
    </section>
  );
}
