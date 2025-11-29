import Footer from "./components/Footer"
import Nav from "./components/Nav"

import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
    <Nav/>
<h1>hhhh</h1>
     <Routes>

        <Route path="/" element={<h1>Accueil</h1>} />
        <Route path="/livres" element={<h1>Liste des livres</h1>} />
        <Route path="/auteurs" element={<h1>Auteurs</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
