import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";


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
    <html lang="en">
      <body className="bg-gray-100">
        <div className="flex min-h-screen">
          <Sidebar/>

          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}