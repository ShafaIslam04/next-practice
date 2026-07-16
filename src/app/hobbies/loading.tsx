export default function Loading() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-3xl border border-violet-100 bg-white"
        >
          <div className="h-60 animate-pulse bg-violet-100"></div>

          <div className="p-6">
            <div className="h-6 w-1/2 animate-pulse rounded bg-violet-100"></div>

            <div className="mt-4 h-20 animate-pulse rounded bg-violet-100"></div>
          </div>
        </div>
      ))}
    </div>
  );
}