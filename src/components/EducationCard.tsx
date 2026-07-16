interface EducationCardProps {
  degree: string;
  institution: string;
  duration: string;
  cgpa: string;
  description: string;
}

export default function EducationCard({
  degree,
  institution,
  duration,
  cgpa,
  description,
}: EducationCardProps) {
  return (
    <div className="rounded-3xl border border-violet-100 bg-white p-8 shadow-sm transition hover:shadow-lg">

      <h2 className="text-2xl font-bold text-slate-800">
        {degree}
      </h2>

      <p className="mt-2 text-lg text-violet-600">
        {institution}
      </p>

      <div className="mt-6 flex flex-wrap gap-4">

        <span className="rounded-full bg-violet-100 px-4 py-2 text-sm text-violet-700">
          {duration}
        </span>

      

      </div>

      <p className="mt-6 leading-8 text-slate-600">
        {description}
      </p>

    </div>
  );
}