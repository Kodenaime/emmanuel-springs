import Link from "next/link";
import { HeartHandshake, Sprout, Plane } from "lucide-react";

export default function WhatWeDo() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold text-navy">
            What We Do
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Emmanuel Springs is built on three major arms of impact that
            transform lives, restore dignity, and empower communities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Missions */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                <HeartHandshake size={28} />
              </div>

              <h3 className="text-2xl font-semibold text-navy">
                Community Missions
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Feeding programs, empowerment outreaches, and discipleship
                initiatives that restore hope to underserved communities.
              </p>
            </div>

            <Link
              href="/programs/missions"
              className="mt-10 font-semibold text-brand-red hover:underline"
            >
              Explore Missions →
            </Link>
          </div>

          {/* Farm */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-green-100 text-green-700">
                <Sprout size={28} />
              </div>

              <h3 className="text-2xl font-semibold text-navy">
                Farm Gate
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Practical agricultural training and access to fresh,
                sustainable farm produce that promotes food security.
              </p>
            </div>

            <Link
              href="/programs/farm"
              className="mt-10 font-semibold text-green-700 hover:underline"
            >
              Visit Farm Gate →
            </Link>
          </div>

          {/* Travels */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-slate-200 text-slate-700">
                <Plane size={28} />
              </div>

              <h3 className="text-2xl font-semibold text-navy">
                Travels & Missions
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Travel services and mission trips that connect people to
                purpose-driven journeys around the world.
              </p>
            </div>

            <Link
              href="/programs/travels"
              className="mt-10 font-semibold text-slate-700 hover:underline"
            >
              Plan a Trip →
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
