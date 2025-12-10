import React, { useState } from "react";

export default function PriceTicket({ event }) {
  const [ticketCount, setTicketCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!event) return null;

  const handleIncrement = () => setTicketCount(prev => prev + 1);
  const handleDecrement = () => setTicketCount(prev => (prev > 1 ? prev - 1 : 1));

  const totalPrice = (event.price || 0) * ticketCount;

  // Calculate remaining tickets
  const ticketsRemaining = event.capacity - (event.tickets_count || 0);
  const originalPrice = Math.round(event.price * 1.35); // Show a "was" price for early bird
  const savings = originalPrice - event.price;

  const formatDate = (dateString) => {
    if (!dateString) return "TBA";
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
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
    const endDate = new Date(date.getTime() + 3 * 60 * 60 * 1000);
    const endTime = endDate.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
    return `${startTime} - ${endTime}`;
  };

  const handleBuyTicket = async () => {
    setLoading(true);
    setMessage("");

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setMessage("Please login to purchase tickets.");
        setLoading(false);
        return;
      }

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
        setMessage(data.message || "Error processing purchase.");
      } else {
        setMessage("🎉 Ticket purchased successfully!");
        console.log("Ticket purchased:", data);
      }

    } catch (error) {
      console.error(error);
      setMessage("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#0B1221] text-white p-6 rounded-2xl border border-gray-800 sticky top-24 space-y-5">

      {/* Price Section */}
      <div>
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-bold text-white">{event.price} MAD</span>
          <span className="text-gray-500 line-through text-lg">{originalPrice} MAD</span>
        </div>
        <p className="text-green-400 text-sm mt-1">
          Early Bird Special - Save {savings} MAD
        </p>
      </div>

      {/* Event Info */}
      <div className="space-y-4">
        {/* Date */}
        <div className="flex items-center justify-between py-3 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <span className="text-gray-400">📅</span>
            <span className="text-sm text-gray-400">Date</span>
          </div>
          <span className="text-sm font-medium text-white">
            {formatDate(event.starts_at)}
          </span>
        </div>

        {/* Time */}
        <div className="flex items-center justify-between py-3 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <span className="text-gray-400">⏰</span>
            <span className="text-sm text-gray-400">Time</span>
          </div>
          <span className="text-sm font-medium text-white">
            {formatTime(event.starts_at)}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center justify-between py-3 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <span className="text-gray-400">📍</span>
            <span className="text-sm text-gray-400">Location</span>
          </div>
          <span className="text-sm font-medium text-blue-400">
            {event.location || "TBA"}
          </span>
        </div>

        {/* Tickets Left */}
        <div className="flex items-center justify-between py-3 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <span className="text-gray-400">🎟️</span>
            <span className="text-sm text-gray-400">Tickets Left</span>
          </div>
          <span className="text-sm font-medium text-green-400">
            {ticketsRemaining} remaining
          </span>
        </div>
      </div>

      {/* Ticket Counter */}
      <div>
        <p className="text-sm mb-3 text-gray-400">Number of Tickets</p>
        <div className="flex items-center bg-[#111827] border border-gray-700 rounded-lg overflow-hidden">
          <button 
            onClick={handleDecrement} 
            className="px-5 py-3 text-xl text-gray-400 hover:text-white hover:bg-gray-700 transition"
          >
            −
          </button>
          <span className="flex-1 text-center text-lg font-semibold">{ticketCount}</span>
          <button 
            onClick={handleIncrement} 
            className="px-5 py-3 text-xl text-gray-400 hover:text-white hover:bg-gray-700 transition"
          >
            +
          </button>
        </div>
      </div>

      {/* Buy Button */}
      <button
        onClick={handleBuyTicket}
        disabled={loading || ticketsRemaining <= 0}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition rounded-xl py-3.5 text-center font-semibold text-white flex items-center justify-center gap-2"
      >
        <span>🎟️</span>
        {loading ? "Processing..." : `Buy Ticket - $${totalPrice}`}
      </button>

      {/* Message */}
      {message && (
        <p className={`text-center text-sm ${message.includes('🎉') ? 'text-green-400' : 'text-yellow-400'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
