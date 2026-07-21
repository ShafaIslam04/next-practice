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
import { ThemeProvider } from "@/components/theme-provider"
import {ModeToggle} from "@/components/ModeToggle"


 



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
    <html
  lang="en"
  suppressHydrationWarning
  className={cn("font-sans", geist.variable)} 
>
 

  <body >
     <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
   
      <TooltipProvider>
        <SidebarProvider>
          <div className="flex min-h-screen ">
            <AppSidebar />

            <main className="flex-1 px-8 py-2 dark:bg-black text-black dark:text-white ">
             <div className="flex justify-between"> <SidebarTrigger />
              <ModeToggle /></div>
              {children}
            </main>
          </div>
        </SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  </body>
   
</html>
  );
}