import { Project } from "@/lib/data";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <section className="bg-cream py-16 px-4">
        <div className="max-w-5xl mx-auto grid gap-16 md:grid-cols-2 items-center">
            {/* Project Cover */}
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
                src={project.image} 
                alt="Project Cover"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw" 
                priority 
            />
            </div>
            {/* Content */}
            <div className="space-y-6">
            <h1 className="text-4xl font-bold text-navy leading-tight">
                {project.title}
            </h1>
            <p className="text-slate-600 leading-relaxed">
                {project.description}
            </p>
            </div>
        </div>
    </section>
  );
}
