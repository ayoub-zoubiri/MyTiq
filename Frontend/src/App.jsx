
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import AuthPage from "./pages/AuthPage"; 
import { Routes, Route, Navigate } from "react-router-dom";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tickete from "./pages/Tickete";
import Layout from "./components/Layout";
import AdminEvents from "./pages/AdminEvents";
import { EventProvider } from "./context/EventContext";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";

function App() {
  return (

    <AuthProvider>
     <Routes>
      
      {/* Page auth sans Nav et sans Footer */}
     <Route path="/auth" element={<AuthPage />} />

      {/* Admin Routes */}
      <Route path="/admin/events" element={
        <ProtectedRoute roles={['admin']}>
          <EventProvider>
            <AdminEvents />
          </EventProvider>
        </ProtectedRoute>
      } />


      {/* Le layout global pour le reste */}
      <Route path="/*" element={<Layout>
            <Routes>
             
              <Route path="/Home" element={<Home />} />
              <Route path="/" element={<Navigate to="/events" replace />} />
              <Route path="/events" element={<Events />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/ticket" element={<Tickete />} />
            </Routes>
          </Layout>
        }
      />

    </Routes>
    </AuthProvider>
  )

}

export default App;
