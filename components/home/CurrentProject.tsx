"use client";

import Link from "next/link";

export default function CurrentProject() {
  const goal = 2_000_000;
  const raised = 200_000;
  const percent = Math.min((raised / goal) * 100, 100);

  return (
    <section className="bg-[#EAF5EF] py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/project1.jpeg"
            alt="Mission to Empower 1000 Vulnerable"
            className="w-full h-[600px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-sm font-medium text-brand-green shadow">
            Current Project
          </span>

          <h2 className="text-4xl font-bold text-navy leading-tight">
            Mission to Empower <span className="text-brand-green">1000</span>{" "}
            Vulnerable Individuals
          </h2>

          <p className="text-slate-700 max-w-xl">
            Join us in restoring dignity and hope through education,
            vocational empowerment, sustainable farming, and community
            development initiatives.
          </p>

          
          {/* Actions */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/donate"
              className="rounded-full bg-navy px-6 py-3 text-white font-semibold hover:opacity-90 transition"
            >
              Join the Cause
            </Link>

            <Link
              href="/projects"
              className="rounded-full border border-navy px-6 py-3 text-navy font-semibold hover:bg-navy hover:text-white transition"
            >
              Learn More
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
