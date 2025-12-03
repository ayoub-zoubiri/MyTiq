import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Ticket } from "lucide-react";

export default function PriceTicket({ event }) {
  const [ticketCount, setTicketCount] = useState(1);

  if (!event) return null;

  const handleIncrement = () => setTicketCount(prev => prev + 1);
  const handleDecrement = () => setTicketCount(prev => (prev > 1 ? prev - 1 : 1));

  const totalPrice = (event.price || 0) * ticketCount;

  return (
    <div className="w-full lg:w-[340px] bg-[#0B1221] text-white p-6 rounded-2xl shadow-xl space-y-6 border border-gray-800 sticky top-24">
      
      
      <div>
        <h1 className="text-3xl font-bold">{event.price} MAD</h1>
        {/* <p className="text-sm text-gray-400 line-through">120 MAD</p> */}
        <p className="text-green-400 text-sm mt-1">Available Now</p>
      </div>

 
      <div className="flex items-center justify-between border-b border-gray-700 pb-3">
        <div className="flex items-center gap-2">
            <Calendar size={16} className="text-gray-400"/>
          <span className="text-sm text-gray-300">Date</span>
        </div>
        <span className="text-sm font-medium">{new Date(event.date).toLocaleDateString()}</span>
      </div>

      
      <div className="flex items-center justify-between border-b border-gray-700 pb-3">
        <div className="flex items-center gap-2">
             <Clock size={16} className="text-gray-400"/>
          <span className="text-sm text-gray-300">Time</span>
        </div>
        <span className="text-sm font-medium">{event.time || "TBA"}</span>
      </div>

     
      <div className="flex items-center justify-between border-b border-gray-700 pb-3">
        <div className="flex items-center gap-2">
            <MapPin size={16} className="text-gray-400"/>
          <span className="text-sm text-gray-300">Location</span>
        </div>
        <span className="text-sm font-medium truncate max-w-[150px]">{event.location || "TBA"}</span>
      </div>

     
      <div className="flex items-center justify-between border-b border-gray-700 pb-3">
        <div className="flex items-center gap-2">
            <Ticket size={16} className="text-gray-400"/>
          <span className="text-sm text-gray-300">Tickets Left</span>
        </div>
        <span className="text-sm text-orange-400 font-medium">{event.available_tickets || "Limited"} remaining</span>
      </div>

    
      <div>
        <p className="text-sm mb-2 text-gray-300">Number of Tickets</p>
        <div className="flex items-center bg-[#111829] border border-gray-700 w-full justify-between rounded-lg py-2 px-4">
          <button onClick={handleDecrement} className="text-xl text-gray-400 hover:text-white transition">-</button>
          <span className="text-lg font-semibold">{ticketCount}</span>
          <button onClick={handleIncrement} className="text-xl text-gray-400 hover:text-white transition">+</button>
        </div>
      </div>

      
      <button className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-xl py-3 text-center font-semibold text-white shadow-lg shadow-blue-900/20">
        Buy Ticket - {totalPrice} MAD
      </button>
    </div>
  );
}
