import React from 'react'

import { Calendar, Clock, MapPin, Ticket } from "lucide-react";
export default function PriceTicket() {
  return (
    <div className="w-[340px] bg-[#0B1221] text-white p-6 rounded-2xl shadow-xl space-y-5">
      
      
      <div>
        <h1 className="text-3xl font-bold">89 MAD</h1>
        <p className="text-sm text-gray-400 line-through">120 MAD</p>
        <p className="text-green-400 text-sm">Early Bird Special - Save 31 MAD</p>
      </div>

 
      <div className="flex items-center justify-between border-b border-gray-700 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-300">Date</span>
        </div>
        <span className="text-sm">July 15, 2026</span>
      </div>

      
      <div className="flex items-center justify-between border-b border-gray-700 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-300">Time</span>
        </div>
        <span className="text-sm">7:00 PM - 11:00 PM</span>
      </div>

     
      <div className="flex items-center justify-between border-b border-gray-700 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-300">Location</span>
        </div>
        <span className="text-sm">Anfa Park</span>
      </div>

     
      <div className="flex items-center justify-between border-b border-gray-700 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-300">Tickets Left</span>
        </div>
        <span className="text-sm text-orange-400">47 remaining</span>
      </div>

    
      <div>
        <p className="text-sm mb-2 text-gray-300">Number of Tickets</p>
        <div className="flex items-center bg-[#111829] border border-gray-700 w-32 justify-between rounded-lg py-2 px-3">
          <span className="text-xl text-gray-300">-</span>
          <span className="text-lg font-semibold">1</span>
          <span className="text-xl text-gray-300">+</span>
        </div>
      </div>

      
      <button className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-xl py-3 text-center font-semibold">
        Buy Ticket - 89 MAD
      </button>
    </div>
  );
}

