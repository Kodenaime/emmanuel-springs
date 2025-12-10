"use client";

import { useState } from "react";
import { MOCK_STORIES } from "@/lib/data";
import StoryCard from "@/components/missions/StoryCard";
import CategoryFilter from "@/components/missions/CategoryFilter";
import Donate from "@/components/home/Donate";


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

        {/* Stories Grid */}Don
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </section>

        {/* Donation Section */}
        <Donate />
      </div>
    </main>
  );
}
