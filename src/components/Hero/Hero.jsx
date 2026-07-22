import SearchBar from "../SearchBar/SearchBar";

export default function Hero({ theme }) {
  return (
    <section
      className="
      min-h-screen
      flex
      items-center
      justify-center
      relative
      overflow-hidden
      px-6
      "
    >
      <div
        className="
        absolute
        w-96
        h-96
        bg-cyan-500/20
        blur-3xl
        rounded-full
        "
      />

      <div className="relative max-w-5xl text-center">
        <p className="text-cyan-400 uppercase tracking-[0.4em] mb-6">
          Welcome To The Arena
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Find Elite
          <span className="text-cyan-400"> Legal Warriors</span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          Connect with verified legal professionals and solve your legal challenges.
        </p>

        <SearchBar theme={theme} />
      </div>
    </section>
  );
}