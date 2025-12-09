import { Story } from "@/lib/data";

interface StoryCardProps {
  story: Story;
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      {/* Image */}
      <div className="h-52 w-full overflow-hidden bg-slate-100">
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-brand-red/10 text-brand-red">
          {story.category}
        </span>

        <h3 className="text-lg font-bold text-navy leading-snug">
          {story.title}
        </h3>

        <p className="text-sm text-slate-600 line-clamp-3">
          {story.excerpt}
        </p>
      </div>
    </div>
  );
}
