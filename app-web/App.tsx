import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Accueil from './pages/Accueil';
import Menu from './pages/Menu';
import Panier from './pages/Panier';
import Compte from './pages/Compte';
import Connexion from './pages/Connexion';
import MotDePasseOublie from './pages/MotDePasseOublie';
import Reservation from './pages/Reservation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-orange-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/panier" element={<Panier />} />
            <Route path="/compte" element={<Compte />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/mot-de-passe-oublie" element={<MotDePasseOublie />} />
            <Route path="/reservation" element={<Reservation />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;