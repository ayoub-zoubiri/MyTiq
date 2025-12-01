
import { Search, ChevronDown } from "lucide-react";
import EventTicketCard from "../components/Tickes/EventTicketCard";



import React from "react";

export default function Tickete() {
  return (
    <div className="flex h-screen bg-[#0F172A] text-white">

     
      <aside className="w-64 bg-[#0B1220] border-r border-white/5 p-6 flex flex-col justify-between">
        <div>
         
          <h1 className="text-2xl font-bold mb-10">MyTiq</h1>

        
          <nav className="space-y-2">
            <button className="w-full text-left px-4 py-2 rounded-lg bg-[#1E293B]">
              My Tickets
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg text-white/70 hover:bg-[#1E293B]">
              Profile
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg text-white/70 hover:bg-[#1E293B]">
              Settings
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
            <p className="text-white/60 text-sm">Manage and view your purchased event tickets</p>
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
          <p className="text-white/60 text-sm">You have 4 active tickets</p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 bg-[#1E293B] px-3 py-2 rounded-lg cursor-pointer">
            <span>All Events</span>
            <ChevronDown size={16} />
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-semibold">
            + Buy Tickets
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-6">
          <EventTicketCard />
          <EventTicketCard />
          <EventTicketCard />
          <EventTicketCard />
        </div>

      
        <div className="flex justify-between items-center mt-8 text-white/70 text-sm">
          <p>Showing 4 of 4 tickets</p>

          <div className="flex items-center gap-2">
            <button className="px-3 py-1 bg-[#1E293B] rounded-lg">Previous</button>
            <button className="px-3 py-1 bg-blue-600 rounded-lg font-bold text-white">1</button>
            <button className="px-3 py-1 bg-[#1E293B] rounded-lg">Next</button>
          </div>
        </div>

      </main>
    </div>
  );
}
