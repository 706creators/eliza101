import React from 'react';

export function Header() {
  return (
    <header className="py-6 mb-8 backdrop-blur-sm bg-white/10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-shadow">🤖 ELIZA 101</h1>
        <p className="mt-2 text-white/90 text-shadow-sm">💬 Learn about one of the first chatbots in computer history</p>
      </div>
    </header>
  );
}