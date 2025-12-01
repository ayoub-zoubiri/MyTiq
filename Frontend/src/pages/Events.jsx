import EventDetails from "../components/Events/EventDetails";


import PriceTicket from "../components/Events/PriceTicket";

export default function EventPage() {
  return (
    <div className="min-h-screen bg-[#050B16] text-white">

     
      <div className="w-full h-[300px] overflow-hidden">
        <img
          src="public/evnt.jpg"
          alt="Event Banner"
          className="w-full h-full object-cover"
        />
      </div>

    
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-[150px]">

       
        <div className="lg:col-span-2">
          <EventDetails />
        </div>

      
        <div>
          <PriceTicket />
        </div>

      </div>
    </div>
  );
}
