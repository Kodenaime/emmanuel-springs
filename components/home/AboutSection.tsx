import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid gap-16 grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* Text Content */}
        <div className="space-y-6">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-green">
            Who We Are
          </span>

          <h2 className="text-4xl font-bold text-navy leading-tight">
            Transforming Communities Through Love, Service & Sustainability
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Emmanuel Springs is a faith-driven organization committed to
            restoring hope and dignity in underserved communities. Through
            feeding programs, skill empowerment, and spiritual development,
            we equip individuals and families to build sustainable futures.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Our work is rooted in compassion, service, and a deep belief that
            every life matters. We collaborate with local leaders and
            volunteers to create lasting impact where it matters most.
          </p>
        </div>

       
        <div className="relative h-[420px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/about.jpeg" 
            alt="Volunteers at Emmanuel Springs"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw" 
            priority 
          />
        </div>

      </div>
    </section>
  );
}