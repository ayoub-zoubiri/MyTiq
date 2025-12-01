import Footer from "./components/Footer"
import Nav from "./components/Nav"
import AuthPage from "./pages/AuthPage"; 
import { Routes, Route } from "react-router-dom";
import Events from "./pages/Events";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Tickete from "./pages/Tickete";

function App() {

  return (
    <>
    <Nav/>

     <Routes>
        <Route path="/events" element={<Events/>}/>
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
         <Route path="/ticket" element={<Tickete/>}/>
    
 
      </Routes>
      <Footer/>
    </>
  )
}

export default App
