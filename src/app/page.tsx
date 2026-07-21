import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex min-h-[85vh] items-center">
      <div className="max-w-4xl">
        <p className="text-lg font-medium  text-violet-600">
          Hello, I'm
        </p>

        <h1 className="mt-2 text-5xl font-bold tracking-tight dark:text-foreground text-slate-800">
          Shafa Islam
        </h1>

        <h2 className="mt-4 text-2xl font-semibold dark:text-foreground text-slate-600">
          Welcome to My Personal Knowledge Hub
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-foreground">
          This website is a collection of my educational journey, favorite
          books, and hobbies. It reflects the knowledge I've gained, the
          ideas that inspire me, and the creative activities I enjoy in my
          free time. I built this project using the Next.js App Router to
          practice reusable components, dynamic routing, and clean project
          architecture while improving my frontend development skills.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/education"
            className="rounded-xl bg-violet-500 px-6 py-3 font-medium text-white transition duration-300 hover:bg-violet-600"
          >
            🎓 Education
          </Link>

          <Link
            href="/books"
            className="rounded-xl border border-violet-200 bg-white px-6 py-3 font-medium text-slate-700 transition duration-300 hover:bg-violet-50"
          >
            📚 Books
          </Link>

          <Link
            href="/hobbies"
            className="rounded-xl border border-violet-200 bg-white px-6 py-3 font-medium text-slate-700 transition duration-300 hover:bg-violet-50"
          >
            🎨 Hobbies
          </Link>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-3xl font-bold text-violet-600">20+</h3>
            <p className="mt-2 text-sm text-slate-500">
              Books Read
            </p>
          </div>

          <div className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-3xl font-bold text-violet-600">3</h3>
            <p className="mt-2 text-sm text-slate-500">
              Educational Stages
            </p>
          </div>

          <div className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-3xl font-bold text-violet-600">4</h3>
            <p className="mt-2 text-sm text-slate-500">
              Favorite Hobbies
            </p>
          </div>

          <div className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-3xl font-bold text-violet-600">∞</h3>
            <p className="mt-2 text-sm text-slate-500">
              Passion for Learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}