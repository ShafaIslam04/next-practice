export default function Loading() {
  return (
    <div className="space-y-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="rounded-3xl border border-violet-100 bg-white p-8"
        >
          <div className="h-8 w-3/4 animate-pulse rounded bg-violet-100"></div>

          <div className="mt-4 h-5 w-1/2 animate-pulse rounded bg-violet-100"></div>

          <div className="mt-6 h-28 animate-pulse rounded bg-violet-100"></div>
        </div>
      ))}
    </div>
  );
}