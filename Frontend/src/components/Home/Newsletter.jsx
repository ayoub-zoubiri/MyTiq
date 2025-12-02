import React from 'react'

function Newsletter() {
  return (
    <>
    <section className="w-full bg-black py-16 flex justify-center px-4">
      <div className="text-center max-w-xl">

        
        <div className="flex justify-center mb-4">
          <span className="material-icons text-white text-4xl">
           📧
          </span>
        </div>

    
        <h2 className="text-white text-3xl font-semibold">
          Stay Updated
        </h2>

       
        <p className="text-gray-400 mt-3">
          Subscribe to our newsletter and never miss out on exclusive events, early bird
          tickets, and special offers.
        </p>

     
        <div className="mt-6 flex items-center justify-center gap-2 flex-col sm:flex-row">
          
        
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-[#1a1a1a] text-white px-4 py-2 rounded-md w-full sm:w-64 outline-none border border-transparent focus:border-gray-500 transition"
          />

      
          <button className="bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Newsletter
