

import React, { useState } from "react";

export default function PriceTicket({ event }) {
  const [ticketCount, setTicketCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!event) return null;

  const handleIncrement = () => setTicketCount(prev => prev + 1);
  const handleDecrement = () => setTicketCount(prev => (prev > 1 ? prev - 1 : 1));

  const totalPrice = (event.price || 0) * ticketCount;


  const handleBuyTicket = async () => {
    setLoading(true);
    setMessage("");

    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:8000/api/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          event_id: event.id,
          quantity: ticketCount
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Erreur lors de l'achat.");
      } else {
        setMessage("🎉 Ticket acheté avec succès !");
        console.log("Ticket acheté:", data);
      }

    } catch (error) {
      console.error(error);
      setMessage("Erreur serveur.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:w-[340px] bg-[#0B1221] text-white p-6 rounded-2xl shadow-xl space-y-6 border border-gray-800 sticky top-24">

      <div>
        <h1 className="text-3xl font-bold">{event.price} MAD</h1>
        <p className="text-green-400 text-sm mt-1">Available Now</p>
      </div>

      <div className="flex items-center justify-between border-b border-gray-700 pb-3">
        <span className="text-sm text-gray-300">Date</span>
        <span className="text-sm font-medium">
          {new Date(event.starts_at).toLocaleDateString()}
        </span>
      </div>

      <div className="flex items-center justify-between border-b border-gray-700 pb-3">
        <span className="text-sm text-gray-300">Location</span>
        <span className="text-sm font-medium truncate max-w-[150px]">
          {event.location}
        </span>
      </div>

      <div>
        <p className="text-sm mb-2 text-gray-300">Number of Tickets</p>
        <div className="flex items-center bg-[#111829] border border-gray-700 w-full justify-between rounded-lg py-2 px-4">
          <button onClick={handleDecrement} className="text-xl text-gray-400 hover:text-white transition">-</button>
          <span className="text-lg font-semibold">{ticketCount}</span>
          <button onClick={handleIncrement} className="text-xl text-gray-400 hover:text-white transition">+</button>
        </div>
      </div>

      <button
        onClick={handleBuyTicket}
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-xl py-3 text-center font-semibold text-white shadow-lg shadow-blue-900/20"
      >
        {loading ? "Processing..." : `Buy Ticket - ${totalPrice} MAD`}
      </button>

      {message && (
        <p className="text-center text-sm mt-2 text-yellow-300">{message}</p>
      )}
    </div>
  );
}
