import React from 'react';
import { Link } from 'react-router-dom';

function Connexion() {
  return (
    <div className="max-w-md mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold mb-8">Connexion</h1>
        <p className="text-gray-600 mb-8">
          Connectez avec les identifiants que vous avez utilisé dans l'inscription
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Adresse Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="nom-utilisateur@domain.fr"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
              Garder la session
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Se connecter
          </button>
        </form>

        <div className="mt-6">
          <Link 
            to="/mot-de-passe-oublie" 
            className="text-orange-500 hover:text-orange-600 text-sm"
          >
            Mot de passe oublié
          </Link>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Vous n'avez pas de compte ?{' '}
            <Link to="/compte" className="text-orange-500 hover:text-orange-600">
              S'inscrire
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Connexion;