import { Link, NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { path: "/", label: "Home" },
  { path: "https://elizaos.github.io/eliza/", label: "Docs", external: true },
  {
    path: "https://github.com/CreatorsDAO/eliza101",
    label: "GitHub",
    external: true,
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-2xl">🤖</span>
            <div>
              <h1 className="text-xl font-bold text-black dark:text-white">
                eliza 101
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                学习 AI Agent 开发的第一站
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.path}
                  href={item.path}
                  className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors ${
                      isActive ? "text-primary dark:text-primary" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
