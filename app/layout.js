import Nav from "@/components/Nav";
import { Providers } from "@/components/Providers";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Online Course",
  description: "Online Course Tutorial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Nav></Nav>
          {children}
        </Providers>
      </body>
    </html>
  );
}
