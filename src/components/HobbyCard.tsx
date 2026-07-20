// import Image from "next/image";

// interface HobbyCardProps {
//   title: string;
//   image: string;
//   description: string;
// }

// export default function HobbyCard({
//   title,
//   image,
//   description,
// }: HobbyCardProps) {
//   return (
//     <div className="overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

//       <Image
//         src={image}
//         alt={title}
//         width={400}
//         height={250}
//         className="h-56 w-full object-cover"
//       />

//       <div className="p-6">

//         <h2 className="text-xl font-bold text-slate-800">
//           {title}
//         </h2>

//         <p className="mt-4 leading-7 text-slate-600">
//           {description}
//         </p>

//       </div>

//     </div>
//   );
// }

import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface HobbyCardProps {
  title: string;
  image: string;
  description: string;
}

export default function HobbyCard({
  title,
  image,
  description,
}: HobbyCardProps) {
  return (
      
      <Card className="relative mx-auto w-full max-w-sm pt-0">
      
        <Image
       src={image}
        alt={title}
       width={400}
        height={250}
        className="h-56 w-full object-cover"
    />
      <CardHeader>
        
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      
    </Card>
    

    
  );
}