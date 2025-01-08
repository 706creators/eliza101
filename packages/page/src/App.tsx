import { type ReactElement } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ModulePage } from "./pages/ModulePage";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Header } from "./components/Header";

function App(): ReactElement {
  return (
    <HashRouter>
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/module/:id" element={<ModulePage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
