import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import LawyerList from "../components/LawyerCard/LawyerList";
import Stats from "../components/Stats/Stats";

export default function Lawyers({ theme, toggleTheme }) {
  const location = useLocation();
  const filters = location.state?.filters || {};

  return (
    <main
      className={`min-h-screen ${
        theme === "dark" ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <div className="flex pt-20">
        <Sidebar theme={theme} />

        <div className="flex-1">
          <Stats theme={theme} />
          <LawyerList filters={filters} theme={theme} />
        </div>
      </div>
    </main>
  );
}
