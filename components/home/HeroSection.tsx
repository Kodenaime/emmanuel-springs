import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 min-h-[calc(100vh-72px)]">
      
      {/* Missions */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/hero/missions.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
          <span className="uppercase tracking-widest text-xs opacity-90">
            Transforming Lives & Communities
          </span>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">
            Community <br /> Missions
          </h1>

          <Link
            href="/missions"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/70 px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition w-fit"
          >
            Explore More →
          </Link>
        </div>
      </div>

      {/* Farm Gate */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/hero/farming.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
          <span className="uppercase tracking-widest text-xs opacity-90">
            Sustainable Agriculture
          </span>
          
          <h1 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">
            Missions <br /> Farmgate
          </h1>

          <Link
            href="/farm"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/70 px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition w-fit"
          >
            Explore More →
          </Link>
        </div>
      </div>

      {/* Travels */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/hero/travel.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
          <span className="uppercase tracking-widest text-xs opacity-90">
            Explore With Purpose
          </span>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">
            Travels <br /> Across Borders
          </h1>

          <Link
            href="/travels"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/70 px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition w-fit"
          >
            Explore More →
          </Link>
        </div>
      </div>

    </section>
  );
}
