// 


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";


import { AuthProvider } from "./context/AuthContext";
import { EventProvider } from "./context/EventContext";
import { NewsletterProvider } from "./context/NewsletterContext";
import { TicketProvider } from "./context/TicketContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <EventProvider>
          <NewsletterProvider>
            <TicketProvider>
              <App />
            </TicketProvider>
          </NewsletterProvider>
        </EventProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
