
import { Link } from "react-router-dom";
export default function HeroSection() {
   const goToEvents = () => {
    const section = document.getElementById("events-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-black relative w-full flex justify-center px-4">
      
    
      <div className="relative w-full max-w-7xl bg-black rounded-3xl overflow-hidden h-[350px] md:h-[420px]">

       
        <img
          src="public/image.png"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-90"
        />

      
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

          <h1 className="text-white text-3xl md:text-5xl font-extrabold tracking-wide">
            Discover Unique Events
          </h1>

          <p className="text-gray-200 mt-3 max-w-xl">
            Experience unforgettable moments. Browse and book tickets to the
            most exciting events happening near you.
          </p>

          <div className="mt-6 flex gap-4">
            <button    onClick={goToEvents} className="px-5 py-2 rounded-md bg-white text-black font-medium shadow-md hover:bg-gray-200 transition">
              Explore Events
            </button>

          <Link to="/about">
  <button className="px-5 py-2 rounded-md bg-white/20 text-white font-medium backdrop-blur-md border border-white/40 hover:bg-white/30 transition">
    Learn More
  </button>
</Link>
          </div>

        </div>
      </div>
    </div>
  );
}
