import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Lawyers from "./pages/Lawyers";
import LawyerProfile from "./pages/LawyerProfile";

import LawsHome from "./pages/Laws/LawsHome";
import LawPage from "./pages/Laws/LawPage";
import SectionPage from "./pages/Laws/SectionPage";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return window.localStorage.getItem("lexarena-theme") || "dark";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lexarena-theme", theme);
    }
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <BrowserRouter>
      <Routes>
         <Route
  path="/laws"
  element={<LawsHome theme={theme} toggleTheme={toggleTheme} />}
/>

<Route
  path="/laws/:act"
  element={<LawPage theme={theme} toggleTheme={toggleTheme} />}
/>

<Route
  path="/laws/:act/:section"
  element={<SectionPage theme={theme} toggleTheme={toggleTheme} />}
/>
        <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/lawyers" element={<Lawyers theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/lawyer/:id" element={<LawyerProfile theme={theme} toggleTheme={toggleTheme} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;