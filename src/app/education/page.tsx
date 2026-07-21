import EducationCard from "@/components/EducationCard";
import { education } from "@/data/education";

export default function EducationPage() {
  return (
    <section className="dark:bg-black dark:text-white">

      <div className="mb-10  ">

        <h1 className="text-4xl font-bold dark:text-foreground text-slate-800">
          Education
        </h1>

        <p className="mt-2 dark:text-foreground text-slate-500">
          My academic journey and achievements.
        </p>

      </div>

      <div className="space-y-8">

        {education.map((item) => (
          <EducationCard
            key={item.id}
            degree={item.degree}
            institution={item.institution}
            duration={item.duration}
            description={item.description}
          />
        ))}

      </div>

    </section>
  );
}