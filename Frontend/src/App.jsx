import Footer from "./components/Footer"
import Nav from "./components/Nav"

import { Routes, Route } from "react-router-dom";
import Events from "./components/pages/Events";

import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Tickete from "./components/pages/Tickes/Tickete";

function App() {

  return (
    <>
    <Nav/>

     <Routes>
        <Route path="/events" element={<Events/>}/>
        
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
         <Route path="/ticket" element={<Tickete/>}/>
    
 
      </Routes>
      <Footer/>
    </>
  )
}

export default App
