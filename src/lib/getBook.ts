import { books } from "@/data/books";

export function getBook(id: number) {
  return books.find((book) => book.id === id);
}