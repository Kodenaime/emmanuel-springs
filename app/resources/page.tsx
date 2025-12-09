export default function ResourcesPage() {
  return (
    <main className="bg-cream py-16 px-4">
      <div className="max-w-5xl mx-auto grid gap-16 md:grid-cols-2 items-center">
        {/* Book Cover Placeholder */}
        <div className="bg-slate-200 rounded-lg h-[420px] flex items-center justify-center">
          <span className="text-slate-500 text-sm">
            Book Cover Placeholder
          </span>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-navy leading-tight">
            Faith-based Community Empowerment Strategies
          </h1>

          <p className="text-slate-600 leading-relaxed">
            A practical guide to building strong, self-sustaining
            communities through faith-driven leadership, vocational
            empowerment, and service-based transformation.
          </p>

          <a
            href="https://selar.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-brand-red px-8 py-3 text-white font-semibold hover:opacity-90 transition"
          >
            Purchase on Selar
          </a>
        </div>
      </div>
    </main>
  );
}
