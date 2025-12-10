export default function EventDetails({ event }) {
  if (!event) return null;

  const formatDate = (dateString) => {
    if (!dateString) return "TBA";
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString) => {
    if (!dateString) return "TBA";
    const date = new Date(dateString);
    const startTime = date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
    // Assume 3 hour event duration
    const endDate = new Date(date.getTime() + 3 * 60 * 60 * 1000);
    const endTime = endDate.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
    return `${startTime} - ${endTime}`;
  };

  const formatShortDate = (dateString) => {
    if (!dateString) return "TBA";
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Default tags if not provided
  const tags = event.tags || ['Music', 'Outdoor', 'Festival', 'Live Performance'];

  return (
    <div className="w-full text-white space-y-8">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        {event.title}
      </h1>

      {/* Meta Info Bar */}
      <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-300">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">📅</span>
          <span>{formatShortDate(event.starts_at)}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">⏰</span>
          <span>{formatTime(event.starts_at)}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">📍</span>
          <span>{event.location || "Location TBA"}</span>
        </div>
      </div>

      {/* About This Event */}
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">About This Event</h2>
        <div className="text-gray-300 leading-relaxed space-y-4">
          <p>
            {event.description || "No description available for this event."}
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex gap-3 flex-wrap">
        {(Array.isArray(tags) ? tags : []).map((tag, index) => (
          <span 
            key={index}
            className="bg-transparent px-4 py-1.5 rounded-full text-sm border border-gray-600 text-gray-300 hover:border-gray-500 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Event Location */}
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">Event Location</h2>

        <div className="bg-[#0B1221] border border-gray-800 rounded-xl p-5 space-y-4">
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-400 text-sm">📍</span>
            </div>
            <div>
              <p className="font-semibold text-white">{event.venue || "Central Park"}</p>
              <p className="text-gray-400 text-sm mt-0.5">
                {event.address || `${event.location}, Morocco 10023`}
              </p>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            {event.venue_description || "The heart of Manhattan's cultural scene, offering a beautiful outdoor venue for this spectacular event."}
          </p>

          <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-700">
            <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
              <span>🧭</span> Get Directions
            </button>

            <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
              <span>🔗</span> Share Location
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
