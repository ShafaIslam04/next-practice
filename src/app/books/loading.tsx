export default function Loading() {
  return (
    <div>
      <div className="mb-10 h-10 w-64 animate-pulse rounded-lg bg-violet-100"></div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-3xl border border-violet-100 bg-white p-5"
          >
            <div className="h-72 animate-pulse rounded-2xl bg-violet-100"></div>

            <div className="mt-5 h-6 w-2/3 animate-pulse rounded bg-violet-100"></div>

            <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-violet-100"></div>

            <div className="mt-6 h-10 animate-pulse rounded-xl bg-violet-100"></div>
          </div>
        ))}
      </div>
    </div>
  );
}