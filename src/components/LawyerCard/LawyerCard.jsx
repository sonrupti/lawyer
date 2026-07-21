import {
  Star,
  MapPin,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function LawyerCard({ lawyer }) {
  const navigate = useNavigate();

  if (!lawyer) return null;

  return (
    <div
      className="
        bg-slate-900/80
        backdrop-blur-xl
        border
        border-cyan-500/20
        rounded-2xl
        p-6
        hover:border-cyan-400
        hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
        transition
      "
    >
      {/* Profile */}

      <div className="flex items-center gap-4">
        <img
          src={lawyer.profile_image || "https://via.placeholder.com/150"}
          alt={lawyer.name}
          className="
            w-20
            h-20
            rounded-full
            object-cover
            border-2
            border-cyan-400
          "
        />

        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold">
              {lawyer.name}
            </h2>

            <ShieldCheck
              size={20}
              className="text-cyan-400"
            />
          </div>

          <p className="text-gray-400">
            {lawyer.practice_areas?.[0] || "Advocate"}
          </p>
        </div>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-slate-950 rounded-xl p-3">
          <p className="text-gray-400 text-sm">
            Experience
          </p>

          <p className="text-cyan-400 font-bold">
            {lawyer.experience ?? 0} Years
          </p>
        </div>

        <div className="bg-slate-950 rounded-xl p-3">
          <p className="text-gray-400 text-sm">
            Reviews
          </p>

          <p className="text-green-400 font-bold">
            {lawyer.review_count ?? 0}
          </p>
        </div>
      </div>

      {/* Practice Areas */}

      <div className="mt-5">
        <div className="flex justify-between text-sm mb-2">
          <span>Practice Area</span>

          <span className="text-cyan-400">
            {lawyer.practice_areas?.length || 0} Areas
          </span>
        </div>

        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="
              h-full
              bg-gradient-to-r
              from-cyan-400
              to-purple-500
            "
            style={{
              width: `${Math.min(
                (lawyer.practice_areas?.length || 1) * 20,
                100
              )}%`,
            }}
          />
        </div>
      </div>

      {/* Details */}

      <div className="mt-5 space-y-3 text-gray-300">
        <p className="flex gap-2 items-center">
          <MapPin size={18} />
          {lawyer.city}, {lawyer.state}
        </p>

        <p className="flex gap-2 items-center">
          <Star
            size={18}
            className="text-yellow-400"
          />
          {lawyer.rating ?? "N/A"} Rating
        </p>

        <p className="flex gap-2 items-center">
          <Briefcase size={18} />
          {lawyer.courts?.length || 0} Courts
        </p>
      </div>

      <button
        onClick={() => navigate(`/lawyer/${lawyer.slug}`)}
        className="
          mt-6
          w-full
          py-3
          rounded-xl
          bg-gradient-to-r
          from-cyan-400
          to-purple-500
          text-black
          font-bold
          hover:scale-105
          transition
        "
      >
        View Profile
      </button>
    </div>
  );
}