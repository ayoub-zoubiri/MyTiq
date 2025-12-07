



import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Events from "./pages/Events";
import Tickete from "./pages/Tickete";
import Layout from "./components/Layout";
import AdminEvents from "./pages/AdminEvents";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Routes>

      <Route path="/auth" element={<AuthPage />} />

     
      <Route
        path="/admin/events"
        element={
          <ProtectedRoute roles={["admin"]}>
            <AdminEvents />
          </ProtectedRoute>
        }
      />

     
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/events/:id" element={<Events />} />
        <Route path="/ticket" element={<ProtectedRoute><Tickete /></ProtectedRoute>} />
      </Route>

    </Routes>
  );
}

export default App;

