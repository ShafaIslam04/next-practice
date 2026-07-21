import HobbyCard from "@/components/HobbyCard";
import { hobbies } from "@/data/hobbies";

export default function HobbiesPage() {
  return (
    <section className="dark:bg-black text-black dark:text-white">

      <div className="mb-10 d">

        <h1 className="text-4xl font-bold text-slate-800 dark:text-foreground">
          Hobbies
        </h1>

        <p className="mt-2 text-slate-500 dark:text-foreground">
          Things I enjoy outside of academics and work.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2">

        {hobbies.map((hobby) => (
          <HobbyCard
            key={hobby.id}
            title={hobby.title}
            image={hobby.image}
            description={hobby.description}
          />
        ))}

      </div>

    </section>
  );
}