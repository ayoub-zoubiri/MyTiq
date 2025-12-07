import React from "react";

function About() {
  return (
    <section className="bg-black text-white min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">

       
        <h1 className="text-4xl font-bold mb-6">About MyTiq</h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-12">
          MyTiq est une plateforme moderne de billetterie en ligne. 
          Elle permet aux utilisateurs de consulter les événements,
          acheter des billets en toute sécurité, et recevoir leurs tickets par email.
        </p>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">

        
          <div className="bg-[#111] p-6 rounded-lg border border-gray-800 hover:border-gray-600 transition">
            <h2 className="text-xl font-semibold mb-2">🎯 Notre Mission</h2>
            <p className="text-gray-400">
              Faciliter l’accès aux événements grâce à une plateforme simple,
              rapide et sécurisée.
            </p>
          </div>

       
          <div className="bg-[#111] p-6 rounded-lg border border-gray-800 hover:border-gray-600 transition">
            <h2 className="text-xl font-semibold mb-2">👥 Pour les Utilisateurs</h2>
            <p className="text-gray-400">
              Créez un compte, explorez les événements, achetez vos billets et recevez-les instantanément.
            </p>
          </div>

         
          <div className="bg-[#111] p-6 rounded-lg border border-gray-800 hover:border-gray-600 transition">
            <h2 className="text-xl font-semibold mb-2">🛠️ Pour les Admins</h2>
            <p className="text-gray-400">
              Gérez les événements, les billets vendus, et les abonnés à la newsletter depuis un tableau de bord complet.
            </p>
          </div>

        
          <div className="bg-[#111] p-6 rounded-lg border border-gray-800 hover:border-gray-600 transition">
            <h2 className="text-xl font-semibold mb-2">💌 Newsletter</h2>
            <p className="text-gray-400">
              Les utilisateurs peuvent s’abonner pour recevoir des annonces, promotions et nouveautés.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
