export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-12 md:space-y-0">

         
          <div className="max-w-sm space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-white text-2xl">🎟️</span>
              <span className="text-white text-xl font-semibold">MyTiq</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Discover and book tickets to the most exciting events happening around the world.
            </p>
          </div>

          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About </a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Tickete</a></li>
              <li><a href="#" className="hover:text-white">Event</a></li>
            </ul>
          </div>

       
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4 text-gray-400">
              <a href="#" className="hover:text-white">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-instagram" />
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>

        </div>

       
        <div className="w-full border-t border-gray-700 mt-16 pt-6 text-center text-gray-500 text-sm">
          © 2025 MyTiq. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
