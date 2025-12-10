import Link from "next/link";

export default function Donate() {
  return (
    <section className="bg-gray-500 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-3">
          <h2 className="text-3xl font-bold leading-tight">
            Be Part of the Change
          </h2>

          <p className="text-slate-300 text-lg">
            Your support helps us feed families, empower youths, and transform
            communities through sustainable development and faith-driven action.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/donate"
              className="bg-brand-red hover:bg-brand-red/90 text-white font-semibold px-5 py-3 rounded-lg text-center transition"
            >
              Support a Cause
            </Link>

            <Link
              href="/resources/#contact"
              className="border border-slate-400 text-white font-semibold px-5 py-3 rounded-lg text-center hover:bg-white/10 transition"
            >
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="bg-white/10 rounded-xl p-10 backdrop-blur-sm border border-white/10">
          <h3 className="text-2xl font-semibold mb-4">
            Why Your Support Matters
          </h3>

          <ul className="space-y-4 text-slate-300">
            <li>• Provides food to vulnerable families</li>
            <li>• Funds vocational training for youths</li>
            <li>• Expands outreach to rural communities</li>
            <li>• Supports mission trips & discipleship programs</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
