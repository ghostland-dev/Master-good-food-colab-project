import React from 'react';

function Menu() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-orange-900">Notre Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-t-2 border-orange-500">
          <p className="text-gray-600">Le menu sera bientôt disponible...</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;