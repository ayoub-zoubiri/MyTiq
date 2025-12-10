import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EventDetails from "../components/Events/EventDetails";
import PriceTicket from "../components/Events/PriceTicket";
import { useEvents } from '../context/EventContext';


export default function EventPage() {
  const { id } = useParams();
  const { events, fetchEvents, loading } = useEvents();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (events.length === 0) {
      fetchEvents();
    }
  }, [events.length, fetchEvents]);

  useEffect(() => {
    if (events.length > 0 && id) {
      const foundEvent = events.find(e => e.id.toString() === id);
      if (foundEvent) {
        setEvent(foundEvent);
      } else {
        // Handle not found
        // navigate('/404'); 
      }
    }
  }, [events, id]);

  if (loading || !event) {
    return (
      <div className="min-h-screen bg-[#050B16] text-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-400">Loading event...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050B16] text-white">
    

      {/* Hero Image */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = "/evnt.jpg"; }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-[#050B16]/60 to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 -mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column - Event Details */}
          <div className="lg:col-span-2">
            <EventDetails event={event} />
          </div>

          {/* Right Column - Price & Tickets */}
          <div className="lg:col-span-1">
            <PriceTicket event={event} />
          </div>

        </div>
      </div>

    
    </div>
  );
}
