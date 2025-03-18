import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

type Step = 'type' | 'identity' | 'info' | 'confirm';

function Compte() {
  const [currentStep] = useState<Step>('identity');
  const steps: { key: Step; label: string }[] = [
    { key: 'type', label: 'Type de compte' },
    { key: 'identity', label: 'Identité d\'utilisateur' },
    { key: 'info', label: 'Autres Informations' },
    { key: 'confirm', label: 'Confirmation' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Progress Steps */}
      <div className="flex justify-between items-center mb-12">
        {steps.map((step, index) => (
          <div key={step.key} className="flex items-center">
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center text-sm
              ${currentStep === step.key 
                ? 'bg-orange-500 text-white' 
                : index < steps.findIndex(s => s.key === currentStep)
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-200 text-gray-500'
              }
            `}>
              {index + 1}
            </div>
            <span className="ml-2 text-sm hidden md:block">{step.label}</span>
            {index < steps.length - 1 && (
              <div className={`
                h-1 w-12 mx-2
                ${index < steps.findIndex(s => s.key === currentStep)
                  ? 'bg-orange-500'
                  : 'bg-gray-200'
                }
              `} />
            )}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold mb-8">Identité de l'utilisateur</h1>
        <p className="text-gray-600 mb-8">
          Veuillez saisir vos données personnelles ici
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

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirmer le mot de passe
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="flex justify-between pt-6">
            <button
              type="button"
              className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Précédent
            </button>
            <button
              type="submit"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Se connecter
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            J'ai déjà un compte ?{' '}
            <Link to="/connexion" className="text-orange-500 hover:text-orange-600">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Compte;