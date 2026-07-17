

import Link from "next/link";
import { notFound } from "next/navigation";


import { getBook } from "@/lib/getBook";
import BookImage from "@/components/BookImage";


interface BookDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BookDetailsPage({
  params,
}: BookDetailsProps) {
  
  const { id } = await params;

  const book = getBook(Number(id));
  

  if (!book) {
    notFound();
  }

  return (
    <section className="max-w-6xl mx-auto">

      <Link
        href="/books"
        className="inline-block mb-8  hover:underline rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700"
      >
        ← Back to Books
      </Link>

      <div className="grid gap-10 rounded-3xl border border-violet-100 bg-white p-8 shadow-sm md:grid-cols-2">

       <BookImage src={book.image}
        alt={book.title}
        width={300}
        height={400}
        className="h-72 w-full rounded-2xl object-cover"/>

        <div>

          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
            {book.genre}
          </span>

          <h1 className="mt-5 text-4xl font-bold text-slate-800">
            {book.title}
          </h1>

          <p className="mt-2 text-lg text-slate-500">
            {book.author}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5">

            <div className="rounded-2xl bg-violet-50 p-4">
              <p className="text-sm text-slate-500">
                Rating
              </p>

              <h2 className="text-xl font-semibold">
                ⭐ {book.rating}
              </h2>
            </div>

            <div className="rounded-2xl bg-violet-50 p-4">
              <p className="text-sm text-slate-500">
                Pages
              </p>

              <h2 className="text-xl font-semibold">
                {book.pages}
              </h2>
            </div>

            <div className="rounded-2xl bg-violet-50 p-4">
              <p className="text-sm text-slate-500">
                Published
              </p>

              <h2 className="text-xl font-semibold">
                {book.publishedYear}
              </h2>
            </div>

          </div>

          <div className="mt-8">

            <h2 className="text-2xl font-semibold">
              Description
            </h2>

            <p className="mt-3 leading-8 text-slate-600">
              {book.description}
            </p>

          </div>

          <div className="mt-8">

            <h2 className="text-2xl font-semibold">
              What I Learned
            </h2>

            <ul className="mt-4 space-y-3">

              {book.lessons.map((lesson) => (
                <li
                  key={lesson}
                  className="rounded-xl bg-violet-100 p-3"
                >
                   {lesson}
                </li>
              ))}

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}