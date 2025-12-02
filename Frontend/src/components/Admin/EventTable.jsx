import React, { useState } from 'react';
import { useEvents } from '../../context/EventContext';

const EventTable = ({ onEdit }) => {
  const { events, loading, error, deleteEvent } = useEvents();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All Events');

  if (loading) return <div className="text-white">Loading events...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  // Mock data if events are empty (for visualization purposes if backend is empty)
  // In real app, remove this or keep it empty.
  const displayEvents = events.length > 0 ? events : [
      { id: 1, title: 'Tech Conference 2026', description: 'Annual technology summit', date: 'March 15, 2026', capacity: 500, sold: 342, status: 'Active' },
      { id: 2, title: 'Music Festival', description: 'Summer music celebration', date: 'June 22, 2026', capacity: 1000, sold: 1000, status: 'Sold Out' },
      { id: 3, title: 'Business Workshop', description: 'Entrepreneurship masterclass', date: 'April 8, 2026', capacity: 150, sold: 89, status: 'Draft' },
      { id: 4, title: 'Art Exhibition', description: 'Contemporary art showcase', date: 'May 12, 2026', capacity: 200, sold: 156, status: 'Active' },
       { id: 5, title: 'Food & Wine Festival', description: 'Culinary experience weekend', date: 'July 18, 2026', capacity: 750, sold: 423, status: 'Active' },
  ];

  const filteredEvents = displayEvents.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus === 'All Events' || event.status === filterStatus; // Assuming status is a string for now
      return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
      switch (status) {
          case 'Active': return 'bg-green-900 text-green-300 border border-green-700';
          case 'Sold Out': return 'bg-red-900 text-red-300 border border-red-700';
          case 'Draft': return 'bg-yellow-900 text-yellow-300 border border-yellow-700';
          default: return 'bg-gray-700 text-gray-300';
      }
  };

  return (
    <div className="bg-[#1E293B] rounded-lg border border-gray-700 overflow-hidden">
      <div className="p-4 flex justify-between items-center border-b border-gray-700">
        <h2 className="text-xl font-semibold text-white">All Events</h2>
        <div className="flex space-x-3">
          <div className="relative">
             <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
             </span>
            <input
              type="text"
              placeholder="Search events..."
              className="bg-[#2D3748] text-white pl-10 pr-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="bg-[#2D3748] text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option>All Events</option>
            <option>Active</option>
            <option>Draft</option>
            <option>Sold Out</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-gray-400">
          <thead className="bg-[#2D3748] text-gray-300 uppercase text-xs font-semibold">
            <tr>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Capacity</th>
              <th className="px-6 py-3">Sold</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredEvents.map((event) => (
              <tr key={event.id} className="hover:bg-[#2D3748] transition-colors">
                <td className="px-6 py-4">
                  <div className="text-white font-medium">{event.title}</div>
                  <div className="text-sm text-gray-500">{event.description}</div>
                </td>
                <td className="px-6 py-4">{new Date(event.starts_at).toLocaleDateString()}</td>
                <td className="px-6 py-4">{event.capacity}</td>
                <td className="px-6 py-4">{event.tickets_count || 0}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end space-x-3 items-center">
                    <button className="text-blue-400 hover:text-blue-300" onClick={() => onEdit(event)}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </button>
                    <button className="text-red-400 hover:text-red-300" onClick={() => deleteEvent(event.id)}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       <div className="p-4 border-t border-gray-700 flex justify-between items-center text-gray-400 text-sm">
           <span>Showing {filteredEvents.length} of {displayEvents.length} tickets</span>
           <div className="flex space-x-2">
               <button className="px-3 py-1 rounded border border-gray-600 hover:bg-gray-700">Previous</button>
               <button className="px-3 py-1 rounded bg-blue-600 text-white">1</button>
               <button className="px-3 py-1 rounded border border-gray-600 hover:bg-gray-700">Next</button>
           </div>
       </div>
    </div>
  );
};

export default EventTable;
