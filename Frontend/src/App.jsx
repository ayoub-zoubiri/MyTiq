import Footer from "./components/Footer"
import Nav from "./components/Nav"
import AuthPage from "./pages/AuthPage"; 
import { Routes, Route } from "react-router-dom";
import Events from "./pages/Events";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Tickete from "./pages/Tickete";
import Layout from "./components/Layout";

function App() {

  return (
    <>
    
    

 <Routes>
      
      {/* Page auth sans Nav et sans Footer */}
      <Route path="/auth" element={<AuthPage />} />

      {/* Le layout global pour le reste */}
      <Route path="/*" element={<Layout>
            <Routes>
              <Route path="/events" element={<Events />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/ticket" element={<Tickete />} />
            </Routes>
          </Layout>
        }
      />

    </Routes>


    </>
  )
}

export default App
