import React from "react";
import { Link } from "react-router-dom";

const modules = [
  {
    id: "first-telegram-bot",
    title: "Creating Your First Telegram Bot",
    description:
      "Learn how to create a simple Telegram bot using ELIZA principles",
  },
  // Add more modules here
];

export function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <Link
            key={module.id}
            to={`/module/${module.id}`}
            className="block p-6 rounded-lg backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-colors"
          >
            <h2 className="text-xl font-semibold text-white mb-2">
              {module.title}
            </h2>
            <p className="text-white/80">{module.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
