import React from "react";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[800px] h-[800px] -top-96 -right-96 bg-[#FF7A00] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute w-[600px] h-[600px] top-1/2 left-1/2 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute w-[600px] h-[600px] -bottom-96 -left-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
}
