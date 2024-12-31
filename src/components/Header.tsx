import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="py-12 mb-8">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-block">
          <h1 className="text-6xl font-bold text-black dark:text-white">
            🤖 ELIZA 101
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            Learn about one of the first chatbots in computer history
          </p>
        </Link>
        <div className="mt-8 flex gap-4">
          <a
            href="https://github.com/CreatorsDAO/eliza101"
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
