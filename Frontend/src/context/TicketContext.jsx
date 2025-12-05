

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const TicketContext = createContext();


export const useTickets = () => useContext(TicketContext);

export const TicketProvider = ({ children }) => {
         const [tickets, setTickets] = useState([]);
      const [loading, setLoading] = useState(true);


  const fetchTickets = async () => {
          try {
           

      setLoading(true);


      const token = localStorage.getItem("token"); 

                     const response = await axios.get("http://localhost:8000/api/tickets", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTickets(response.data);
    } catch (error) {
          console.error("Erreur récupération tickets :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <TicketContext.Provider value={{ tickets, loading }}>
      {children}
    </TicketContext.Provider>
  );
  
};
