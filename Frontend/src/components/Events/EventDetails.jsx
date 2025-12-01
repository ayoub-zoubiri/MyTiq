export default function EventDetails() {
  return (
    <div className="w-full max-w-3xl mx-auto text-white px-6 py-10 space-y-8">

      {/* Title */}
      <h1 className="text-3xl font-bold">Summer Music Festival 2026</h1>

      {/* Info row */}
      <div className="flex items-center gap-6 text-sm text-gray-300">

        <div className="flex items-center gap-2">
          <span className="text-blue-400">📅</span>
          July 15, 2026
        </div>

        <div className="flex items-center gap-2">
          <span className="text-blue-400">⏰</span>
          7:00 PM - 11:00 PM
        </div>

        <div className="flex items-center gap-2">
          <span className="text-blue-400">📍</span>
          Anfa Park, Casablanca
        </div>

      </div>

      
      <div>
        <h2 className="text-xl font-semibold mb-3">About This Event</h2>

        <p className="text-gray-300 leading-relaxed mb-4">
          Join us for an unforgettable evening of music under the stars at the Summer Music Festival 2024.
          This year's lineup features some of the most talented artists from around the world, bringing you 
          a diverse mix of genres that will keep you dancing all night long.
        </p>

        <p className="text-gray-300 leading-relaxed mb-4">
          Experience live performances from Grammy-winning artists, emerging talents, and local favorites in a 
          stunning outdoor setting. The festival offers multiple stages, food vendors, craft beer gardens, and 
          interactive art installations.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Whether you're a music enthusiast or just looking for a great night out, this event promises to 
          deliver an exceptional experience for all attendees. Come early to explore the venue and stay late 
          to catch every amazing performance.
        </p>
      </div>

      <div className="flex gap-3 flex-wrap">
        <span className="bg-[#111827] px-4 py-1 rounded-full text-sm border border-gray-700">
          Music
        </span>
        <span className="bg-[#111827] px-4 py-1 rounded-full text-sm border border-gray-700">
          Outdoor
        </span>
        <span className="bg-[#111827] px-4 py-1 rounded-full text-sm border border-gray-700">
          Festival
        </span>
        <span className="bg-[#111827] px-4 py-1 rounded-full text-sm border border-gray-700">
          Live Performance
        </span>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Event Location</h2>

       
        <div className="bg-[#0d1422] border border-gray-800 rounded-xl p-5 space-y-4">

          <div className="flex items-start gap-3">
            <span className="text-blue-400 text-lg">📍</span>
            <div>
              <p className="font-semibold">Central Park</p>
              <p className="text-gray-400 text-sm">
                Anfa Park , Casablanca, Morocco 10023
              </p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed text-sm">
            The heart of Manhattan’s cultural scene, offering a beautiful outdoor venue for this spectacular 
            music festival.
          </p>

          <div className="flex items-center justify-between text-sm text-blue-400 pt-2 border-t border-gray-800">
            <button className="flex items-center gap-2 hover:underline">
              <span>🧭</span> Get Directions
            </button>

            <button className="flex items-center gap-2 hover:underline">
              <span>🔗</span> Share Location
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
