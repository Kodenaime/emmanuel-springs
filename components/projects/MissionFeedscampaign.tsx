"use client";

import Link from "next/link";

export default function MissionFeedsCampaign() {
  const goal = 2000000;
  const raised = 200000;

  const percentage = Math.min((raised / goal) * 100, 100);

  return (
    <section className="bg-[#EAF6EF] py-16 px-4 mb-16">
      <div className="max-w-5xl mx-auto text-center space-y-6">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium shadow">
          <span className="text-red-500">❤️</span>
          <span className="text-slate-700">Our Current Campaign</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
          Mission Feeds:
          <ul className="text-sm space-y-1 text-green-600">
            <li>• Feeding   </li>
            <li>• engagement </li>
            <li>• empowerment </li>
            <li>• discipleship </li>
            <li>• sustainable</li>
          </ul>
        </h1>


        {/* Description */}
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Help us provide nutritious meals to vulnerable children, families, and
          communities through our Mission Feeds initiative.
        </p>

        {/* Progress Section */}
        <div className="space-y-4">
          <div className="flex justify-between text-sm font-medium text-slate-700">
            <span>Progress</span>
            <span>{percentage.toFixed(0)}% Funded</span>
          </div>

          <div className="w-full bg-white rounded-full h-4 overflow-hidden">
            <div
              className="bg-green-600 h-full transition-all duration-1000"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-sm text-slate-700">
            <span>₦{raised.toLocaleString()} raised</span>
            <span>Goal: ₦{goal.toLocaleString()}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 pt-6">
          <Link
              href="/donate"
              className="bg-navy text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Join the Cause
            </Link>

            <Link
              href="/resources/#contact"
              className="border border-slate-300 px-6 py-2 rounded-lg font-semibold hover:bg-white transition"
            >
              Learn More
            </Link>
        </div>

      </div>
    </section>
  );
}
