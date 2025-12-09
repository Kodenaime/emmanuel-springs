import { IMPACT_STATS } from "@/lib/data";

export default function ImpactStats() {
  return (
    <section className="bg-cream py-20 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        
        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-navy">
            Our Impact in Numbers
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            Every number represents a life touched, a family supported, and a
            community strengthened through our work.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_STATS.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl font-bold text-brand-green">
                {stat.value}
              </div>
              <p className="mt-2 text-sm font-medium text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
