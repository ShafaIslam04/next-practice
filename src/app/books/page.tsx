import BookCard from "@/components/BookCard";
import { books } from "@/data/books";

export default function BooksPage() {
  return (
    <section >

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-slate-800 dark:text-foreground">
          Books I've Read
        </h1>

        <p className="mt-2 text-slate-500 dark:text-foreground">
          A collection of books that shaped my thinking.
        </p>

      </div>

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}

      </div>

    </section>
  );
}