"use client";

import { useState } from "react";
import { MOCK_FARM_ITEMS } from "@/lib/data";

export default function FarmPage() {
  const [activeTab, setActiveTab] = useState<"products" | "trainings">(
    "products"
  );

  const products = MOCK_FARM_ITEMS.filter(
    (item) => item.type === "Product"
  );

  const trainings = MOCK_FARM_ITEMS.filter(
    (item) => item.type === "Training"
  );

  const displayedItems =
    activeTab === "products" ? products : trainings;

  return (
    <main className="bg-cream py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Header */}
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-navy">
            Sustainable Agriculture & Vocational Training
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600">
            Explore our fresh farm produce and skill development
            programs designed to empower individuals and families.
          </p>
        </header>

        {/* Tabs */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-6 py-3 rounded-full font-medium transition
              ${
                activeTab === "products"
                  ? "bg-brand-green text-white"
                  : "bg-white border border-slate-200 text-navy hover:bg-slate-50"
              }
            `}
          >
            Farm Products
          </button>

          <button
            onClick={() => setActiveTab("trainings")}
            className={`px-6 py-3 rounded-full font-medium transition
              ${
                activeTab === "trainings"
                  ? "bg-brand-green text-white"
                  : "bg-white border border-slate-200 text-navy hover:bg-slate-50"
              }
            `}
          >
            Training Programs
          </button>
        </div>

        {/* Grid */}
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="h-52 bg-slate-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <span className="text-xs px-3 py-1 rounded-full bg-brand-green/10 text-brand-green font-medium">
                  {item.type}
                </span>

                <h3 className="text-lg font-bold text-navy">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-semibold text-slate-800">
                    {item.priceLabel}
                  </span>

                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full
                      ${
                        item.inStock
                          ? "bg-brand-green/10 text-brand-green"
                          : "bg-brand-red/10 text-brand-red"
                      }
                    `}
                  >
                    {item.inStock ? "Available" : "Sold Out"}
                  </span>
                </div>

                {/* Action Button */}
                <a
                  href="https://wa.me/12345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-center rounded-full bg-brand-green text-white py-2.5 font-medium hover:opacity-90 transition"
                >
                  {activeTab === "products" ? "Buy Now" : "Register"}
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
