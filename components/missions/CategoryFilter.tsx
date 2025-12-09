interface CategoryFilterProps {
  selected: string;
  onChange: (value: string) => void;
}

const categories = [
  "All",
  "Feeding",
  "Empowerment",
  "Discipleship",
];

export default function CategoryFilter({
  selected,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const active = selected === category;

        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
                active
                  ? "bg-brand-red text-white"
                  : "bg-white text-navy border border-slate-200 hover:bg-slate-50"
              }
            `}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
