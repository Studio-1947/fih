'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

interface EventCard {
  _id: string;
  title: string;
  description: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
    hotspot?: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
  };
  date: string;
}

interface SelectedEvent extends EventCard {
  _id: string;
}

export default function EventsSection() {
  const [events, setEvents] = useState<EventCard[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<SelectedEvent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const query = `*[_type == "event"] | order(date desc) {
          _id,
          title,
          description,
          image,
          date
        }`;
        
        const data = await client.fetch(query);
        setEvents(data);
      } catch (err) {
        setError('Failed to fetch events');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-black/10 border-t-black"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return null;
  }

  if (events.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8 lg:mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <span className="h-[3px] w-5 sm:w-6 bg-primary" />
                <span className="h-[3px] w-5 sm:w-8 bg-black" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/80 [font-family:var(--font-heading)]">
                Events
              </p>
            </div>

            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem] [font-family:var(--font-heading)]">
              <span className="text-[#202020]">Upcoming </span>
              <span className="text-black/40">Events & </span>
              <br />
              <span className="text-black/40">Workshops</span>
            </h2>
          </div>
        </div>

        {/* Scrollable Cards Container */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 md:gap-8 min-w-min">
            {events.map((event) => (
              <button
                key={event._id}
                onClick={() => setSelectedEvent(event)}
                className="flex-shrink-0 w-80 group cursor-pointer text-left transition-transform hover:scale-105"
              >
                {/* Image Container */}
                <div className="relative h-64 w-full rounded-[1.5rem] overflow-hidden bg-black/5 mb-4">
                  {event.image?.asset ? (
                    <Image
                      src={urlFor(event.image).url()}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-black/10 to-black/5 flex items-center justify-center">
                      <span className="text-black/20 text-sm">No Image</span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold leading-snug text-black line-clamp-2 [font-family:var(--font-heading)] group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-sm leading-[1.6] text-black/60 line-clamp-3 [font-family:var(--font-body)]">
                    {event.description}
                  </p>

                  {event.date && (
                    <div className="text-xs font-semibold text-black/40 [font-family:var(--font-heading)]">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            className="relative w-full max-w-2xl rounded-[2rem] bg-white max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-6 right-6 z-10 rounded-full bg-black/5 p-2 hover:bg-black/10 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal Image */}
            {selectedEvent.image?.asset && (
              <div className="relative h-80 w-full">
                <Image
                  src={urlFor(selectedEvent.image).url()}
                  alt={selectedEvent.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Modal Content */}
            <div className="p-8 sm:p-10">
              {selectedEvent.date && (
                <div className="mb-4 inline-block rounded-full bg-[#FEF8E6] px-3.5 py-1.5 text-[11px] font-bold text-[#D0A015] [font-family:var(--font-heading)]">
                  {new Date(selectedEvent.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
              )}

              <h2 className="mb-6 text-3xl font-bold text-black [font-family:var(--font-heading)]">
                {selectedEvent.title}
              </h2>

              <p className="text-base leading-[1.8] text-black/70 [font-family:var(--font-body)] whitespace-pre-wrap">
                {selectedEvent.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
