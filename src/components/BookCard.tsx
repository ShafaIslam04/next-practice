// 'use client'
// import Link from "next/link";

// import { Book } from "@/types/book";
// import BookImage from "./BookImage";
// import { Button } from "./ui/button";


// interface BookCardProps {
//   book: Book;
// }

// export default function BookCard({
//   book,
// }: BookCardProps) {
  
//   return (
//     <div className="rounded-3xl border border-violet-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

//       <BookImage src={book.image}
//         alt={book.title}
//         width={300}
//         height={400}
//         className="h-72 w-full rounded-2xl object-cover" />

//       <div className="mt-5">

//         <h2 className="text-xl font-bold text-slate-800">
//           {book.title}
//         </h2>

//         <p className="mt-1 text-sm text-slate-500">
//           {book.author}
//         </p>
//          <p className="mt-1 text-sm text-slate-500">
//           {book.publishedYear}
//         </p>

//         <div className="mt-4 flex items-center justify-between">

//           <span className="rounded-full bg-violet-100 px-3 py-1 text-sm text-violet-700">
//             {book.genre}
//           </span>

//           <span className="font-semibold text-amber-500">
//             ⭐ {book.rating}
//           </span>

//         </div>

       
      
//          <Link
//           href={`/books/${book.id}`}
//           // className="mt-6 inline-block w-full rounded-xl bg-violet-500 py-3 text-center font-medium text-white transition hover:bg-violet-600"
//         > <Button variant = "purple" size="xl">Button</Button></Link>
        
        
        

//       </div>

//     </div>
//   );
// }
 'use client'
import Link from "next/link";
import { Book } from "@/types/book";
 import BookImage from "./BookImage";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  
  CardDescription,
  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
interface BookCardProps {
  book: Book;
 }

export default function BookCard({
   book,
}: BookCardProps) {
  return (
    <Card className="rounded-3xl border border-violet-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      
       <BookImage src={book.image}
         alt={book.title}
         width={300}
         height={400}
       className="h-72 pt-3 w-full rounded-2xl object-cover" />
      <CardHeader>
        <CardTitle>{book.title}</CardTitle>
           <CardDescription>
          {book.author}
        </CardDescription>
         <CardDescription>
          {book.publishedYear}
        </CardDescription>
        <div className="mt-4 flex items-center justify-between">
          <Badge variant="purple">{book.genre}</Badge>
          <CardDescription>
          {book.publishedYear}
        </CardDescription>
        </div>
        
       
      </CardHeader>
     
          <Button variant = "purple" size="xl"> <Link
          href={`/books/${book.id}`}
          // className="mt-6 inline-block w-full rounded-xl bg-violet-500 py-3 text-center font-medium text-white transition hover:bg-violet-600"
        >View Details</Link></Button>
      
    </Card>
  )
}
