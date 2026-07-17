import axios from "axios";
import fs from "fs";
import path from "path";

import { books } from "../src/data/books";

const folder = path.join(process.cwd(), "public/books");

if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder, { recursive: true });
}

async function downloadBook(book: any) {
  try {
    console.log(`Searching ${book.title}`);

    const search = await axios.get(
      "https://openlibrary.org/search.json",
      {
        params: {
          title: book.title,
          author: book.author,
          limit: 1,
        },
      }
    );

    const doc = search.data.docs?.[0];

    if (!doc) {
      console.log("Not found");
      return;
    }

    if (!doc.cover_i) {
      console.log("No cover");
      return;
    }

    const imageUrl = `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`;

    const image = await axios.get(imageUrl, {
      responseType: "arraybuffer",
    });

    const filename = book.image.replace("/books/", "");

    fs.writeFileSync(
      path.join(folder, filename),
      image.data
    );

    console.log("Downloaded:", filename);
  } catch (e: any) {
    console.log("Failed:", book.title);
    console.log(e.message);
  }
}

async function main() {
  for (const book of books) {
    await downloadBook(book);
  }

  console.log("Finished!");
}

main();