'use client';
import { Toaster } from "react-hot-toast";
import "./globals.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  // if (typeof window !== 'undefined'){
  //   return false
  // }
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col font-sans">
       
          <main className="flex-grow">
            {children}
             <Toaster position="top-center" />
          </main>
         
        </div>
      </body>
    </html>
  );
}

