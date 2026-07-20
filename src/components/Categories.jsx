const categories = [
  "Criminal",
  "Divorce",
  "Property",
  "Corporate",
  "Cyber Law",
  "Tax",
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-cyan-400 mb-8">
        Practice Areas
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {categories.map((item) => (
          <div
            key={item}
            className="bg-slate-900 border border-cyan-500/20 rounded-xl p-6 text-center cursor-pointer
                       hover:border-cyan-400 hover:shadow-[0_0_20px_#06b6d4]
                       transition-all duration-300"
          >
            <p className="text-white font-semibold">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}