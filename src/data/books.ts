import { Book } from "@/types/book";

export const books: Book[] = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    image: "/atomic-habit.jfif",
    genre: "Self Improvement",
    rating: 4.9,
    pages: 320,
    publishedYear: 2018,
    description:
      "A practical guide to building good habits and breaking bad ones.",
    lessons: [
      "Small habits create big results",
      "Focus on systems instead of goals",
      "Identity shapes behavior",
    ],
  },

  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    image: "/deep-work.jfif",
    genre: "Productivity",
    rating: 4.8,
    pages: 296,
    publishedYear: 2016,
    description:
      "Learn how focused work helps you master difficult skills quickly.",
    lessons: [
      "Avoid distractions",
      "Work with full concentration",
      "Quality beats quantity",
    ],
  },

  {
    id: 3,
    title: "Clean Code",
    author: "Robert C. Martin",
    image: "/clean-code.jfif",
    genre: "Programming",
    rating: 4.9,
    pages: 464,
    publishedYear: 2008,
    description:
      "A must-read guide to writing clean, maintainable software.",
    lessons: [
      "Meaningful naming",
      "Small functions",
      "Readable code",
    ],
  },
];