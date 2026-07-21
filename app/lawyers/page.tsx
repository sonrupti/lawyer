import { getLawyers } from "@/lib/lawyers";

export default async function LawyersPage() {
  const lawyers = await getLawyers();

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">
        Find Lawyers
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        {lawyers.map((lawyer) => (
          <div
            key={lawyer.id}
            className="rounded-xl border p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold">
              {lawyer.name}
            </h2>

            <p className="text-gray-600 mt-2">
              {lawyer.city}, {lawyer.state}
            </p>

            <p className="mt-2">
              Experience: {lawyer.experience ?? "N/A"} years
            </p>

            <div className="mt-3">
              <p className="font-medium">
                Practice Areas
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {lawyer.practice_areas?.map(
                  (area: string) => (
                    <span
                      key={area}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm"
                    >
                      {area}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="mt-3">
              <p className="font-medium">
                Courts
              </p>

              <p className="text-sm text-gray-600">
                {lawyer.courts?.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}