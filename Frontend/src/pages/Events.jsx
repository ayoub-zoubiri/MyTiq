import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EventDetails from "../components/Events/EventDetails";
import PriceTicket from "../components/Events/PriceTicket";
import { useEvents } from '../context/EventContext';

export default function EventPage() {
  const { id } = useParams();
  const { events, fetchEvents, loading } = useEvents();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (events.length === 0) {
      fetchEvents();
    }
  }, [events.length, fetchEvents]);

  useEffect(() => {
    if (events.length > 0 && id) {
      const foundEvent = events.find(e => e.id.toString() === id);
      if (foundEvent) {
        setEvent(foundEvent);
      } else {
        // Handle not found
        // navigate('/404'); 
      }
    }
  }, [events, id]);

  if (loading || !event) {
    return (
        <div className="min-h-screen bg-[#050B16] text-white flex items-center justify-center">
            Loading...
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050B16] text-white">

   

        <img
  src={event.image}
  alt={event.title}
  className="w-full h-full object-cover"
  //  onError={(e) => { e.target.src = "/evnt.jpg"; }}
/>

    
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-[50px] lg:gap-[100px] -mt-20 relative z-10">

       
        <div className="lg:col-span-2">
          <EventDetails event={event} />
        </div>

      
        <div>
          <PriceTicket event={event} />
        </div>

      </div>
    </div>
  );
}
