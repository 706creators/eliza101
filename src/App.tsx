import { type ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ModulePage } from "./pages/ModulePage";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Header } from "./components/Header";

// 获取基础路径
const basename = import.meta.env.BASE_URL;

function App(): ReactElement {
  return (
    <BrowserRouter basename={basename}>
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/module/:id" element={<ModulePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
