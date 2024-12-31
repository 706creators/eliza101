import React from 'react';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-gradient"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute w-[600px] h-[600px] top-1/2 left-1/2 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-[300px] h-[300px] -bottom-48 right-48 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <div className="absolute w-[400px] h-[400px] top-1/4 -right-48 bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-6000"></div>
      </div>
    </div>
  );
}