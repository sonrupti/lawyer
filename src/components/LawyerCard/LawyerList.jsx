import { useEffect, useMemo, useState } from "react";
import LawyerCard from "./LawyerCard";
import { getLawyers } from "../../services/api";

export default function LawyerList({ filters = {}, theme = "dark" }) {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLawyers() {
      try {
        const data = await getLawyers();
        setLawyers(data || []);
      } catch (error) {
        console.error("Failed to fetch lawyers:", error);
      } finally {
        setLoading(false);
      }
    }

    loadLawyers();
  }, []);

  const visibleLawyers = useMemo(() => {
    const keyword = (filters.keyword || "").toLowerCase();
    const state = (filters.state || "").toLowerCase();
    const district = (filters.district || "").toLowerCase();
    const area = (filters.area || "").toLowerCase();

    return lawyers.filter((lawyer) => {
      const matchesState = !state || (lawyer.state || "").toLowerCase().includes(state);
      const matchesDistrict = !district || (lawyer.city || "").toLowerCase().includes(district);
      const matchesArea = !area || (lawyer.practice_areas || []).some((item) => (item || "").toLowerCase().includes(area));
      const matchesKeyword = !keyword || [lawyer.name, lawyer.city, lawyer.state, ...(lawyer.practice_areas || [])]
        .join(" ")
        .toLowerCase()
        .includes(keyword);

      return matchesState && matchesDistrict && matchesArea && matchesKeyword;
    });
  }, [filters, lawyers]);

  if (loading) {
    return (
      <section className={`px-6 py-12 ${theme === "light" ? "text-slate-700" : "text-gray-400"}`}>
        <h2 className={`text-3xl font-bold mb-8 ${theme === "light" ? "text-slate-800" : "text-cyan-400"}`}>
          Elite Legal Warriors
        </h2>

        <p>Loading lawyers...</p>
      </section>
    );
  }

  return (
    <section className="px-6 py-12">
      <h2 className={`text-3xl font-bold mb-8 ${theme === "light" ? "text-slate-800" : "text-cyan-400"}`}>
        Elite Legal Warriors
      </h2>

      {visibleLawyers.length === 0 ? (
        <p className={theme === "light" ? "text-slate-600" : "text-red-400"}>No lawyers found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleLawyers.map((lawyer) => (
            <LawyerCard
              key={lawyer.slug}
              lawyer={lawyer}
            />
          ))}
        </div>
      )}
    </section>
  );
}