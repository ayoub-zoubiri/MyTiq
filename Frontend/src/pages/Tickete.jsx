
import { Search, ChevronDown } from "lucide-react";
import EventTicketCard from "../components/Tickes/EventTicketCard";
import { useTickets } from "../context/TicketContext";

export default function Tickete() {
  const { tickets, loading } = useTickets(); 

  if (loading) {
    return <p className="text-white p-8">Chargement des tickets...</p>;
  }

  return (
    <div className="flex h-screen bg-[#0F172A] text-white">

     
      <aside className="w-64 bg-[#0B1220] border-r border-white/5 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-10">MyTiq</h1>

          <nav className="space-y-2">
            <button className="w-full text-left px-4 py-2 rounded-lg bg-[#1E293B]">
              My Tickets
            </button>
          
          </nav>
        </div>

        <div className="flex items-center gap-3 p-4 bg-[#1E293B] rounded-xl mt-10">
          <img
            src="https://ui-avatars.com/api/?name=LATIFA&background=0f172a&color=fff"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">LATIFA</p>
            <p className="text-xs text-white/60">Premium User</p>
          </div>
        </div>
      </aside>

   
      <main className="flex-1 p-8 overflow-y-auto">

        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">My Tickets</h2>
            <p className="text-white/60 text-sm">
              Manage and view your purchased event tickets
            </p>
          </div>

          <div className="w-56 flex items-center bg-[#1E293B] px-3 py-2 rounded-lg">
            <Search size={18} className="text-white/50" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent ml-2 outline-none text-sm w-full"
            />
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Purchased Tickets</h3>
          <p className="text-white/60 text-sm">
            You have {tickets.length} active tickets
          </p>
        </div>

        
        <div className="grid grid-cols-2 gap-6">

          {tickets.length > 0 ? (
            tickets.map(ticket => (
              <EventTicketCard key={ticket.id} ticket={ticket} />
            ))
          ) : (
            <p className="text-white/60">Aucun ticket trouvé.</p>
          )}

        </div>

      </main>
    </div>
  );
}
