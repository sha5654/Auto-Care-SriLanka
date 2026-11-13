import React, { useState, useEffect } from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-slate-700">
        <h1 className="text-2xl font-bold text-red-500 mb-2">Auto Care Sri Lanka</h1>
        <p className="text-slate-300 text-sm mb-6">පරිපූර්ණ වාහන සේවා සහ හදිසි සහන යෙදුම සාර්ථකව සූදානම්!</p>
        <div className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-xl transition cursor-pointer">
          ඇප් එක ක්‍රියාත්මකයි
        </div>
      </div>
    </div>
  );
}
