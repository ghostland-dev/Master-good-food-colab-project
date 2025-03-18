import React from 'react';

function Panier() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-orange-900">Votre Panier</h1>
      <div className="bg-white rounded-lg shadow-md p-6 border-t-2 border-orange-500">
        <p className="text-gray-600">Votre panier est vide</p>
      </div>
    </div>
  );
}

export default Panier;