import Donate from "@/components/home/Donate";
import MissionFeedsCampaign from "@/components/projects/MissionFeedscampaign";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Mission Feeds Initiative",
      description: "A food security project focused on providing regular, nutritious meals to vulnerable families, widows and children across rural communities."
    },
    {
      title: "Empower 1,000 Vulnerable Children",
      description: "A large-scale empowerment project aimed at equipping children with education support, mentoring, skills development and psychosocial care."
    }
  ];

  return (
    <main className="bg-cream min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">

        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-navy">
            Our Projects
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Strategic initiatives designed to create long-term impact in
            vulnerable communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow space-y-6">
              <h2 className="text-2xl font-semibold text-navy">
                {project.title}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <MissionFeedsCampaign />

      </div>  

      <Donate />

    </main>
  );
}
