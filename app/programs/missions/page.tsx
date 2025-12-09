"use client";

import { useState } from "react";
import { MOCK_STORIES } from "@/lib/data";
import StoryCard from "@/components/missions/StoryCard";
import CategoryFilter from "@/components/missions/CategoryFilter";

export default function MissionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStories =
    selectedCategory === "All"
      ? MOCK_STORIES
      : MOCK_STORIES.filter(
          (story) => story.category === selectedCategory
        );

  return (
    <main className="bg-cream px-4 py-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Page Header */}
        <header className="space-y-4">
          <h1 className="text-4xl font-bold text-navy">
            Community Missions
          </h1>
          <p className="text-slate-600 max-w-2xl">
            Explore our outreach programs, empowerment initiatives, and
            discipleship projects that are transforming lives.
          </p>
        </header>

        {/* Category Filter */}
        <CategoryFilter
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />

        {/* Stories Grid */}
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </section>

        {/* Donation Section */}
        <section className="mt-20 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-navy mb-4">
            Support Our Mission
          </h2>

          <p className="text-slate-700 mb-6 max-w-2xl">
            Your generous donations help us feed the hungry, empower
            families, and spread hope. You can support our work using
            the bank details below.
          </p>

          <div className="space-y-2 text-slate-800 font-medium">
            <p>Bank Name: GTBank</p>
            <p>Account Name: Emmanuel Foundation</p>
            <p>Account Number: 0123456789</p>
          </div>
        </section>
      </div>
    </main>
  );
}
