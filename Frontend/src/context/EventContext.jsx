import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const EventContext = createContext();

export const useEvents = () => useContext(EventContext);

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8000/api/events');
      setEvents(response.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching events:", err);
      setError("Failed to fetch events.");
    } finally {
      setLoading(false);
    }
  };

  const createEvent = async (eventData) => {
    try {
      const formData = new FormData();
      Object.keys(eventData).forEach(key => {
        if (eventData[key] !== '' && eventData[key] !== null) {
          formData.append(key, eventData[key]);
        }
      });

      const response = await axios.post('http://localhost:8000/api/events', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setEvents([response.data, ...events]);
      return { success: true };
    } catch (err) {
      console.error("Error creating event:", err);
      return { success: false, message: err.response?.data?.message || "Failed to create event." };
    }
  };

  const updateEvent = async (id, eventData) => {
    try {
      const formData = new FormData();
      Object.keys(eventData).forEach(key => {
        // Skip if image is a string (existing URL) - only append if it's a File
        if (key === 'image' && typeof eventData[key] === 'string') {
          return;
        }
        if (eventData[key] !== '' && eventData[key] !== null) {
          formData.append(key, eventData[key]);
        }
      });
      // For PUT requests with FormData, use POST with _method override
      formData.append('_method', 'PUT');

      const response = await axios.post(`http://localhost:8000/api/events/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setEvents(events.map(event => event.id === id ? response.data : event));
      return { success: true };
    } catch (err) {
      console.error("Error updating event:", err);
      return { success: false, message: err.response?.data?.message || "Failed to update event." };
    }
  };

  const deleteEvent = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    
    try {
      // Authorization header is handled by AuthContext via axios defaults
      await axios.delete(`http://localhost:8000/api/events/${id}`);
      setEvents(events.filter(event => event.id !== id));
    } catch (err) {
      console.error("Error deleting event:", err);
      alert("Failed to delete event.");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <EventContext.Provider value={{ events, loading, error, fetchEvents, deleteEvent, createEvent, updateEvent }}>
      {children}
    </EventContext.Provider>
  );
};
