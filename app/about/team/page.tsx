import TeamCard from "./team_card";
import { teamMembers } from "./team_data";

export const metadata = {
  title: "Our Leadership Team | Vestigo Insurance",
  description:
    "Meet the experienced leadership team driving innovation and trust at Vestigo Insurance."
};

export default function TeamPage() {
  return (
    <section className="bg-gray-50 py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900">
            Our Leadership Team
          </h1>
          <p className="mt-4 text-gray-600">
            Experienced professionals dedicated to protecting what matters most.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}


