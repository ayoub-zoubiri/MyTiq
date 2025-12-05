import { createContext, useContext, useState } from "react";
import axios from "axios";

const NewsletterContext = createContext();

export function NewsletterProvider({ children }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function subscribe() {
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await axios.post("/newsletter", { email });

      setSuccess(response.data.message);
      setEmail("");
    } catch (err) {
      setError("Erreur lors de l'inscription");
    } finally {
      setLoading(false);
    }
  }

  return (
    <NewsletterContext.Provider
      value={{
        email,
        setEmail,
        subscribe,
        loading,
        success,
        error,
      }}
    >
      {children}
    </NewsletterContext.Provider>
  );
}

export function useNewsletter() {
  return useContext(NewsletterContext);
}
