import React from "react";
import { useNewsletter } from "../../context/NewsletterContext";

function Newsletter() {
  const { email, setEmail, subscribe, loading, success, error } = useNewsletter();

  return (
    <section className="w-full bg-black py-16 flex justify-center px-4">
      <div className="text-center max-w-xl">

        <div className="flex justify-center mb-4">
          <span className="material-icons text-white text-4xl">📧</span>
        </div>

        <h2 className="text-white text-3xl font-semibold">Stay Updated</h2>

        <p className="text-gray-400 mt-3">
          Subscribe to our newsletter to never miss events and offers.
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 flex-col sm:flex-row">
          
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#1a1a1a] text-white px-4 py-2 rounded-md w-full sm:w-64 outline-none border border-transparent focus:border-gray-500 transition"
          />

          <button
            onClick={subscribe}
            disabled={loading}
            className="bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Subscribe"}
          </button>
        </div>

        {success && <p className="text-green-400 mt-3">{success}</p>}
        {error && <p className="text-red-400 mt-3">{error}</p>}
      </div>
    </section>
  );
}

export default Newsletter;
