import Link from "next/link";
import { MOCK_STORIES } from "@/lib/data";

export default function FeaturedStories() {
  const featured = MOCK_STORIES.slice(0, 3);

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold text-navy">
              Stories of Impact
            </h2>
            <p className="text-slate-600 max-w-xl">
              Real lives. Real change. See how your support is transforming
              communities every day.
            </p>
          </div>

          <Link
            href="/missions"
            className="text-brand-red font-semibold hover:underline"
          >
            View All Stories →
          </Link>
        </div>

        {/* Stories Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((story) => (
            <div
              key={story.id}
              className="bg-slate-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="h-52 bg-slate-200 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-brand-red/10 text-brand-red">
                  {story.category}
                </span>

                <h3 className="text-lg font-bold text-navy">
                  {story.title}
                </h3>

                <p className="text-sm text-slate-600 line-clamp-3">
                  {story.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
