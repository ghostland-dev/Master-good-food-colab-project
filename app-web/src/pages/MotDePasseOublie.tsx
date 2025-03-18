import React from 'react';
import { Link } from 'react-router-dom';

function MotDePasseOublie() {
  return (
    <div className="max-w-md mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold mb-8">Mot de passe oublié</h1>
        <p className="text-gray-600 mb-8">
          Veuillez saisir votre adresse email afin de réinitialiser votre mot de passe, vous allez recevoir un lien.
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

          <button
            type="submit"
            className="w-full bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Envoyer des instructions
          </button>
        </form>

        <div className="mt-8">
          <p className="text-gray-600">
            Vous avez des questions ?{' '}
            <Link to="/faq" className="text-orange-500 hover:text-orange-600">
              FAQ
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MotDePasseOublie;