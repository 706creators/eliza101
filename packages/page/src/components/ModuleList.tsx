import React from 'react';
import { Link } from 'react-router-dom';
import { Module } from '../types/module';

interface ModuleListProps {
  modules: Module[];
}

export function ModuleList({ modules }: ModuleListProps) {
  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {modules.map((module) => (
        <Link
          key={module.id}
          to={`/module/${module.id}`}
          className="block bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
        >
          <h2 className="text-xl font-bold mb-2">{module.title}</h2>
          <p className="text-gray-600">{module.description}</p>
        </Link>
      ))}
    </div>
  );
}