export default function EventDetails({ event }) {
  if (!event) return null;

  const formatDate = (dateString) => {
    if (!dateString) return "TBA";
    return new Date(dateString).toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="w-full text-white space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-bold leading-tight">{event.title}</h1>

      {/* Info row */}
      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 bg-[#111827] p-4 rounded-xl border border-gray-800">

        <div className="flex items-center gap-2">
          <span className="text-blue-400 text-lg">📅</span>
          <span className="font-medium">{formatDate(event.date)}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-blue-400 text-lg">⏰</span>
          <span className="font-medium">{event.time || "Time TBA"}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-blue-400 text-lg">📍</span>
          <span className="font-medium">{event.location || "Location TBA"}</span>
        </div>

      </div>

      
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">About This Event</h2>

        <div className="text-gray-300 leading-relaxed space-y-4 text-lg">
          <p>
            {event.description || "No description available for this event."}
          </p>
        </div>
      </div>

      <div className="flex gap-3 flex-wrap">
        {event.category && (
             <span className="bg-[#1F2937] px-4 py-1.5 rounded-full text-sm border border-gray-700 text-blue-300 font-medium">
             {event.category}
           </span>
        )}
       
        <span className="bg-[#1F2937] px-4 py-1.5 rounded-full text-sm border border-gray-700 text-gray-300">
          Live Performance
        </span>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">Event Location</h2>

       
        <div className="bg-[#0d1422] border border-gray-800 rounded-xl p-6 space-y-4">

          <div className="flex items-start gap-3">
            <span className="text-blue-400 text-2xl">📍</span>
            <div>
              <p className="font-semibold text-lg">{event.location || "Location TBA"}</p>
              <p className="text-gray-400 text-sm">
                {event.address || event.location}
              </p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed text-sm">
            Join us at this amazing venue for an unforgettable experience.
          </p>

          <div className="flex items-center justify-between text-sm text-blue-400 pt-4 border-t border-gray-800 mt-4">
            <button className="flex items-center gap-2 hover:underline hover:text-blue-300 transition">
              <span>🧭</span> Get Directions
            </button>

            <button className="flex items-center gap-2 hover:underline hover:text-blue-300 transition">
              <span>🔗</span> Share Location
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
