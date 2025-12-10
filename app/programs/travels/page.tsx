import Donate from "@/components/home/Donate";
import { MOCK_TRIPS } from "@/lib/data";

export default function TravelsPage() {
  const missionTrips = MOCK_TRIPS.filter(
    (trip) => trip.type === "Mission"
  );

  const commercialServices = [
    {
      title: "Visa Assistance",
      description:
        "Guidance and processing support for travel visa applications.",
    },
    {
      title: "Flight Ticketing",
      description:
        "Affordable international and local flight booking services.",
    },
    {
      title: "Hotel Reservations",
      description:
        "Trusted accommodation booking for comfortable stays.",
    },
  ];

  return (
    <main className="bg-cream py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Page Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-navy">
            Travels & Tours
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600">
            We provide reliable commercial travel services and organize
            impactful mission trips across regions.
          </p>
        </header>

        {/* Top Section – Commercial Services */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-navy">
            Commercial Services
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {commercialServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-bold text-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Section – Mission Trips */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-navy">
            Upcoming Mission Trips
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {missionTrips.map((trip) => (
              <div
                key={trip.id}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <span className="inline-block mb-3 text-xs font-medium px-3 py-1 rounded-full bg-brand-red/10 text-brand-red">
                  {trip.type}
                </span>

                <h3 className="text-lg font-bold text-navy mb-2">
                  {trip.title}
                </h3>

                <p className="text-xs text-slate-500 mb-3">
                  {new Date(trip.date).toDateString()}
                </p>

                <p className="text-sm text-slate-600">
                  {trip.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Donate />

    </main>
  );
}
