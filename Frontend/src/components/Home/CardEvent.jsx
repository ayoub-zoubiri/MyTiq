export default function EventCard() {
  return (
    <div className="w-[260px] bg-[#0B0B0E] rounded-2xl overflow-hidden shadow-lg border border-white/5">
      
      
      <div className="w-full h-[160px]">
        <img
          src="public/ENT1.jpg"
          alt="Event Banner"
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="p-4 space-y-3">

       
        <span className="text-xs px-3 py-1 bg-purple-200/20 text-purple-300 rounded-full">
          Music
        </span>

       
        <h2 className="text-white font-semibold text-lg">
          Electronic Music Festival
        </h2>

      
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>📅</span> Dec 15, 2024
          <span className="mx-1">•</span>
          <span>⏰ 8:00 PM</span>
        </div>

        
        <div className="flex items-center justify-between mt-3">
          <p className="text-white font-bold text-xl">
            98<span className="text-sm ml-1">MAD</span>
            <span className="text-gray-400 text-xs"> /ticket</span>
          </p>

          <button className="bg-white text-black px-4 py-1.5 rounded-lg font-medium hover:bg-gray-200 transition">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

