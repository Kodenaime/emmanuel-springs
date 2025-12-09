"use client";

import { motion } from "framer-motion";

const objectives = [
  "To help vulnerable individuals, families, communities and missionaries through holistic initiatives, providing a haven for growth, renewal, and self-sufficiency.",

  "To feed the needy through food assistance and sustainable agriculture.",

  "To encourage psychosocial and spiritual support through counseling.",

  "To empower through vocational training and entrepreneurship, travels and exhibitions.",

  "To disciple through Bible-based training, mentoring, and leadership development.",

  "To sustain through eco-friendly projects and infrastructure, farm resorts, retreat and training centers.",

  "To offer relevant sustainable income-generation skills for individuals and families."
];

export default function ObjectivesSection() {
  return (
    <section className="bg-cream py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl font-bold text-navy">
            Our Objectives
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            These guiding principles shape every initiative of Emmanuel Springs.
          </p>
        </motion.div>

        {/* Animated Objectives */}
        <div className="space-y-2">
          {objectives.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-2 items-start bg-white rounded-xl p-6 shadow-sm"
            >
              {/* Number Badge */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>

              {/* Text */}
              <p className="text-slate-700 leading-relaxed">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
