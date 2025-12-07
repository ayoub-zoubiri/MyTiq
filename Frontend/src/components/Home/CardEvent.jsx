import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  if (!event) return null;

  // Helper to format date safely
  const formatDate = (dateString) => {
    if (!dateString) return "TBA";
    try {
      return new Date(dateString).toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch (e) {
      return dateString;
    }
  };

  return (
    // Card Container - Removed fixed width to allow grid control
    <div className="w-full bg-[#121212] rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300 group">
      
      {/* Event Image */}
      <div className="w-full h-[200px] overflow-hidden relative ">
        {/* <img
          src={event.image ? `http://localhost:8000/storage/${event.image}` : "/ENT1.jpg"} // Use event image or fallback
          alt={event.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {e.target.src = "/ENT1.jpg"}} // Fallback on error
        /> */}

           <img
  src={event.image}
  alt={event.title}
  className="w-full h-full object-cover"
  //  onError={(e) => { e.target.src = "/evnt.jpg"; }}
/>
        {/* Category Tag Overlay */}
        <div className="absolute top-3 left-3">
             <span className="inline-block text-xs font-medium px-3 py-1 bg-[#2A2A35]/90 backdrop-blur-sm text-[#A78BFA] rounded-full">
              {event.category || "Event"}
            </span>
        </div>
      </div>

      {/* Event Details */}
      <div className="p-5 space-y-4">

        {/* Event Title */}
        <h2 className="text-white font-bold text-xl leading-tight line-clamp-2 h-[3.5rem]">
          {event.title}
        </h2>

        {/* Date and Time */}
        <div className="flex items-center gap-4 text-gray-400 text-sm">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            <span>{event.time || "8:00 PM"}</span>
          </div>
        </div>

        {/* Price and Details Button */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5 mt-2">
          <p className="text-white font-bold text-2xl">
            {event.price}<span className="text-base font-normal text-gray-400">MAD</span>
            <span className="text-gray-500 text-xs font-normal ml-1">/ticket</span>
          </p>

          <Link to={`/events/${event.id}`}>
            <button className="bg-white text-black px-6 py-2 rounded-xl font-semibold text-sm hover:bg-gray-200 transition-colors">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
