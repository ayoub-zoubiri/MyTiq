
// import Footer from "./components/Footer"
// import Nav from "./components/Nav"
// import AuthPage from "./pages/AuthPage"; 
// import { Routes, Route, Navigate } from "react-router-dom";
// import Events from "./pages/Events";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Tickete from "./pages/Tickete";
// import Layout from "./components/Layout";
// import AdminEvents from "./pages/AdminEvents";
// import { EventProvider } from "./context/EventContext";
// import { AuthProvider } from "./context/AuthContext";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Home from "./pages/Home";
// import { NewsletterProvider } from "./context/NewsletterContext";
// import { TicketProvider } from "./context/TicketContext";

// function App() {
//   return (

//     <AuthProvider>
//      <Routes>
      
 
//      <Route path="/auth" element={<AuthPage />} />

    
//       <Route path="/admin/events" element={
//         <ProtectedRoute roles={['admin']}>
//           <EventProvider>
//             <AdminEvents />
//           </EventProvider>
//         </ProtectedRoute>
//       } />


   
//       <Route path="/*" element={
//         <EventProvider>
//           <NewsletterProvider> 
//           <Layout>
//             <Routes>
             
//               <Route path="/Home" element={<Home />} />
              
              
//               <Route path="/" element={<Home />} />
              
              
//               <Route path="/events/:id" element={<Events />} />
              
            
//               <Route path="/ticket" element={    <Tickete />} />
//             </Routes>
//           </Layout>
//             </NewsletterProvider>
//         </EventProvider>
//         }
//       />

   

//      <Route
//             path="/ticket"
//             element={
//               <TicketProvider>
//                 <Tickete />
//               </TicketProvider>
//             }
//           />
//            </Routes>





//     </AuthProvider>
//   )

// }

// export default App;



import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tickete from "./pages/Tickete";
import Layout from "./components/Layout";
import AdminEvents from "./pages/AdminEvents";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";

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

      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
             
              <Route path="/home" element={<Home />} />
              <Route path="/events/:id" element={<Events />} />
              <Route path="/ticket" element={<Tickete />} />
            </Routes>
          </Layout>
        }
      />

    </Routes>
  );
}

export default App;
