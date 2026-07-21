// import type { Metadata } from "next";
// import "./globals.css";

// import { Geist } from "next/font/google";
// import { cn } from "@/lib/utils";
// import Sidebar from "@/components/Sidebar";



// const geist = Geist({subsets:['latin'],variable:'--font-sans'});

// export const metadata: Metadata = {
//   title: "Personal Knowledge Hub",
//   description: "Practice Project using Next.js App Router",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={cn("font-sans", geist.variable)}>
//       <body className="bg-gray-100">
//         <div className="flex min-h-screen">
//            <Sidebar/> 
         



    
    
 

//         <main className="flex-1 p-8">
//             {children}
//           </main>
//         </div>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"



const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Personal Knowledge Hub",
  description: "Practice Project using Next.js App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="bg-gray-100">
      
        <div className="flex min-h-screen">
            <TooltipProvider>
           <SidebarProvider>
      <AppSidebar />
      <main className="px-8 py-2">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
    </TooltipProvider>
        {/* <main className="flex-1 p-8">
            
          </main> */}
        </div>
        
      </body>
    </html>
  );
}