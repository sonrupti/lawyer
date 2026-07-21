import {
  ShieldCheck,
  Trophy,
  Star,
  MapPin,
  Award,
} from "lucide-react";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLawyer } from "../services/api";

export default function LawyerProfile() {
  const { id } = useParams();

  const [lawyer, setLawyer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLawyer() {
      const data = await getLawyer(id);
      setLawyer(data);
      setLoading(false);
    }

    loadLawyer();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!lawyer) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Lawyer not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div
        className="
        max-w-5xl
        mx-auto
        bg-slate-900/80
        border
        border-cyan-500/30
        rounded-3xl
        p-8
        backdrop-blur-xl
      "
      >
        {/* Header */}

        <div className="flex items-center gap-6">
          <img
            src={lawyer.profile_image || "https://via.placeholder.com/200"}
            alt={lawyer.name}
            className="w-32 h-32 rounded-full border-4 border-cyan-400 object-cover"
          />

          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold">
                {lawyer.name}
              </h1>

              <ShieldCheck
                className="text-cyan-400"
                size={32}
              />
            </div>

            <p className="text-gray-400 text-lg">
              {lawyer.practice_areas?.[0] || "Advocate"}
            </p>

            <div className="flex gap-2 mt-3 text-yellow-400">
              <Star />
              <span className="text-white">
                {lawyer.rating ?? "N/A"}
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-5 mt-10">
          <div className="bg-slate-950 p-5 rounded-xl text-center">
            <Trophy className="mx-auto text-yellow-400" />

            <h2 className="text-2xl font-bold">
              {lawyer.review_count ?? 0}
            </h2>

            <p>Reviews</p>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl text-center">
            <Award className="mx-auto text-purple-400" />

            <h2 className="text-2xl font-bold">
              {lawyer.experience ?? 0}
            </h2>

            <p>Years Experience</p>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl text-center">
            <Star className="mx-auto text-yellow-400" />

            <h2 className="text-2xl font-bold">
              {lawyer.rating ?? "N/A"}
            </h2>

            <p>Rating</p>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl text-center">
            <MapPin className="mx-auto text-cyan-400" />

            <h2 className="text-xl font-bold">
              {lawyer.city}
            </h2>

            <p>{lawyer.state}</p>
          </div>
        </div>

        {/* Practice Areas */}

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-cyan-400">
            Legal Arsenal
          </h2>

          <div className="flex flex-wrap gap-3 mt-4">
            {(lawyer.practice_areas || []).map((area) => (
              <span
                key={area}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-400/10
                  border
                  border-cyan-400/30
                "
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <button
          className="
            mt-10
            w-full
            py-4
            rounded-xl
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
            text-black
            font-bold
            text-lg
          "
        >
          ⚔ Book Consultation
        </button>
      </div>
    </div>
  );
}