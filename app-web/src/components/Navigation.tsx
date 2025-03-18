import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu as MenuIcon, X } from 'lucide-react';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-orange-500 flex items-center gap-2">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=100" 
              alt="Good Food" 
              className="w-8 h-8 rounded-full object-cover"
            />
            Good Food
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/menu" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Menu
            </Link>
            <Link to="/reservation" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Réservation
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link 
              to="/panier" 
              className="relative text-gray-700 hover:text-orange-500 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Link>
            <Link 
              to="/compte" 
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              <User className="h-6 w-6" />
            </Link>
            <button 
              className="md:hidden text-gray-700 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <Link 
              to="/menu" 
              className="block py-2 text-gray-700 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/reservation" 
              className="block py-2 text-gray-700 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Réservation
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;