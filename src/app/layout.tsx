import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { Navbar } from "./ui/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Project",
  description: "Project template",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} dark:bg-slate-800 dark:text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
