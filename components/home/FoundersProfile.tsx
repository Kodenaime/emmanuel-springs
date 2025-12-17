import Image from "next/image";
import Link from "next/link"; 

export default function FoundersProfile() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-center">
        
        <div className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-2xl border-4 border-white transform md:-rotate-1 transition-transform hover:rotate-0 duration-500">
          <Image
            src="/founder.jpeg" 
            alt="Chaplain Priscilla O. Yusuf"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red font-semibold text-sm rounded-full mb-2">
            Leadership & Vision
          </div>

          <h2 className="text-4xl font-bold text-navy">
            Meet the Founder
          </h2>
          
          <h3 className="text-xl text-brand-green font-medium">
            Chaplain Priscilla O. Yusuf
          </h3>

          <p className="text-slate-600 leading-relaxed text-lg">
            Chaplain Priscilla is a visionary leader and dedicated missionary 
            with years of experience in community outreach. She is driven by a 
            passion to restore dignity to the vulnerable, specifically focusing 
            on street families, the homeless, and persons with special needs.
          </p>

          <p className="text-slate-600 leading-relaxed">
            As the author of <em>"Faith-Based Community Empowerment Strategies,"</em> 
            she combines spiritual insight with practical action. Her work serves 
            as a bridge between faith and sustainable social transformation, 
            equipping churches and individuals to create lasting change in the 
            name of Christ.
          </p>

          <div className="pt-4">
             {/* Optional: A quote or signature style */}
             <blockquote className="border-l-4 border-brand-green pl-4 italic text-slate-500">
               "Our mission is not just to give handouts, but to offer a hand up—empowering lives through God's love."
             </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
}