import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, Star } from 'lucide-react';

function Accueil() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070"
            alt="Délicieux plats"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-white px-6 max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            La bonne bouffe,<br />
            livrée chez toi 🚀
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Des plats frais et délicieux, préparés avec passion et livrés en quelques minutes.
          </p>
          <Link
            to="/menu"
            className="group bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all flex items-center gap-2 w-fit"
          >
            Commander maintenant
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 px-6">
        <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-orange-500 hover:transform hover:-translate-y-1 transition-all">
          <Clock className="w-12 h-12 text-orange-500 mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Livraison rapide</h2>
          <p className="text-gray-600">
            Tes plats préférés livrés en moins de 30 minutes. Chaud devant ! 🔥
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-orange-500 hover:transform hover:-translate-y-1 transition-all">
          <MapPin className="w-12 h-12 text-orange-500 mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Suivi en temps réel</h2>
          <p className="text-gray-600">
            Suis ton livreur en direct sur la carte. Plus besoin d'attendre ! 📍
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-orange-500 hover:transform hover:-translate-y-1 transition-all">
          <Star className="w-12 h-12 text-orange-500 mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Restos au top</h2>
          <p className="text-gray-600">
            Les meilleurs restaurants de ta ville, sélectionnés avec soin ⭐
          </p>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Découvre nos catégories 🍽️</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2070"
              alt="Burgers"
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <span className="text-white text-xl font-semibold">Burgers</span>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=2070"
              alt="Pizzas"
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <span className="text-white text-xl font-semibold">Pizzas</span>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2070"
              alt="Salades"
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <span className="text-white text-xl font-semibold">Salades</span>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=2070"
              alt="Sushis"
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <span className="text-white text-xl font-semibold">Sushis</span>
            </div>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="bg-orange-50 rounded-3xl my-16 mx-6">
        <div className="flex flex-col md:flex-row items-center p-12 gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Télécharge l'app Good Food ! 📱</h2>
            <p className="text-gray-600 mb-6">
              Commande encore plus facilement, accède à des promos exclusives et suis tes livraisons en temps réel.
            </p>
            <div className="flex gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="App Store" 
                className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Play Store" 
                className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </div>
          <div className="flex-1 relative">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070"
              alt="Application mobile"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Accueil;