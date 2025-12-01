import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AuthPage from "./pages/AuthPage";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tickete from "./pages/Tickete";
import Layout from "./components/Layout";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>

        
        <Route path="/" element={<AuthPage />} />

        
        <Route element={<Layout />}>
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ticket" element={<Tickete />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
