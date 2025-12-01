import { CalendarDays, MapPin, Download } from "lucide-react";

export default function EventTicketCard() {
  return (
    <div className="w-full max-w-2xl bg-[#1E3A8A] text-white p-6 rounded-2xl shadow-lg flex flex-col gap-3 relative">

    
      <button className="absolute top-6 right-6 text-white/80 hover:text-white transition">
        <Download size={20} />
      </button>

    
      <h2 className="text-2xl font-semibold">
        Summer Music Festival 2026
      </h2>

     
      <p className="text-white/80 text-sm">
        VIP Access Pass
      </p>

      <div className="flex items-center gap-2 text-white/90 text-sm mt-1">
        <CalendarDays size={16} />
        <span>July 15, 2026 • 7:00 PM</span>
      </div>

 
      <div className="flex items-center gap-2 text-white/90 text-sm">
        <MapPin size={16} />
        <span>Anfa Park, Casablanca</span>
      </div>

    
      <div className="flex justify-end">
        <div className="text-right text-sm leading-tight">
          <p className="text-white/70">Ticket ID</p>
          <p className="font-semibold">#SMF2024-001</p>
        </div>
      </div>

    </div>
  );
}
