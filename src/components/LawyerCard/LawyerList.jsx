import { useEffect, useState } from "react";
import LawyerCard from "./LawyerCard";
import { getLawyers } from "../../services/api";

export default function LawyerList() {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLawyers() {
      try {
        const data = await getLawyers();

        console.log("Lawyers from Supabase:", data);

        setLawyers(data || []);
      } catch (error) {
        console.error("Failed to fetch lawyers:", error);
      } finally {
        setLoading(false);
      }
    }

    loadLawyers();
  }, []);

  if (loading) {
    return (
      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8">
          Elite Legal Warriors
        </h2>

        <p className="text-gray-400">
          Loading lawyers...
        </p>
      </section>
    );
  }

  return (
    <section className="px-6 py-12">
      <h2 className="text-3xl font-bold text-cyan-400 mb-8">
        Elite Legal Warriors
      </h2>

      {lawyers.length === 0 ? (
        <p className="text-red-400">
          No lawyers found.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lawyers.map((lawyer) => (
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