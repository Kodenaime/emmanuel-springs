"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";


export default function ProgramsPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-cream min-h-screen py-20 px-4"
    >

      <div className="max-w-6xl mx-auto space-y-12">

        <Breadcrumbs />

        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-navy">
            Our Programs
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our work is structured around focused programs designed to feed,
            empower, disciple and uplift vulnerable communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Community Missions",
              desc: "Feeding, empowerment and discipleship initiatives.",
              href: "/programs/missions"
            },
            {
              title: "Farm Gate",
              desc: "Sustainable agriculture and vocational training.",
              href: "/programs/farm"
            },
            {
              title: "Travels",
              desc: "Commercial travel services and mission trips.",
              href: "/programs/travels"
            }
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition block"
            >
              <h3 className="text-2xl font-semibold text-navy mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </motion.main>
  );
}
