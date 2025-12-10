import { CalendarDays, MapPin, Download } from "lucide-react";
import { useState } from "react";

export default function EventTicketCard({ ticket }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const token = localStorage.getItem("token");
      
      const response = await fetch(`http://localhost:8000/api/tickets/${ticket.id}/download`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || "Failed to download ticket");
        return;
      }

      // Create a blob from the PDF response
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      // Create a temporary link and click it to trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = `ticket-${ticket.code}.pdf`;
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download ticket. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "TBA";
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  return (
    <div className="w-full max-w-2xl bg-[#1E3A8A] text-white p-6 rounded-2xl shadow-lg flex flex-col gap-3 relative">

      <button 
        onClick={handleDownload}
        disabled={downloading}
        className="absolute top-6 right-6 text-white/80 hover:text-white transition disabled:opacity-50"
        title="Download Ticket PDF"
      >
        {downloading ? (
          <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
        ) : (
          <Download size={20} />
        )}
      </button>

      <h2 className="text-2xl font-semibold pr-10">
        {ticket.event?.title || "Event"}
      </h2>

      <p className="text-white/80 text-sm">
        Ticket Code: <span className="font-mono font-semibold">{ticket.code}</span>
      </p>

      <div className="flex items-center gap-2 text-white/90 text-sm mt-1">
        <CalendarDays size={16} />
        <span>{formatDate(ticket.event?.starts_at)}</span>
      </div>

      <div className="flex items-center gap-2 text-white/90 text-sm">
        <MapPin size={16} />
        <span>{ticket.event?.location || "Location TBA"}</span>
      </div>

      <div className="flex justify-end">
        <div className="text-right text-sm leading-tight">
          <p className="text-white/70">Amount Paid</p>
          <p className="font-semibold">{ticket.amount} MAD</p>
        </div>
      </div>
    </div>
  );
}
