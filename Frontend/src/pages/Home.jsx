import React, { useEffect } from 'react';
import Herosection from '../components/Home/Herosection';
import CardEvent from '../components/Home/CardEvent';
import Newsletter from '../components/Home/Newsletter';
import { useEvents } from '../context/EventContext';

function Home() {
  const { events, fetchEvents, loading, error } = useEvents();

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Herosection />

      {/* Trending Events Section */}
      <section className="bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-white text-3xl font-bold">Trending Events</h2>
              <p className="text-gray-400 mt-2">Don't miss out on these popular experiences</p>
            </div>
            
            {/* View All Link */}
            <a href="/events" className="text-gray-400 hover:text-white transition flex items-center gap-1">
              View All <span className="text-sm">➜</span>
            </a>
          </div>

          {/* Loading/Error State */}
          {loading && <p className="text-white text-center">Loading events...</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}

          {/* Events Grid */}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {events.length > 0 ? (
                events.slice(0, 6).map((event) => (
                  <CardEvent key={event.id} event={event} />
                ))
              ) : (
                <p className="text-gray-400 col-span-full">No events found.</p>
              )}
            </div>
          )}

        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </>
  );
}

export default Home;
