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
            className="group block p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-[#FF7A00] dark:hover:border-[#FF7A00] transition-colors"
          >
            <h2 className="text-xl font-semibold text-black dark:text-white group-hover:text-[#FF7A00] transition-colors mb-2">
              {module.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {module.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
