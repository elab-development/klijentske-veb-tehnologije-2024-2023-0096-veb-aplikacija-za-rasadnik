// app/layout.tsx
import "../styles/globals.css"
import { Inter } from "next/font/google";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import CTA from "@/components/shared/CTA";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", 
});

export const metadata = {
  title: "Rasadnik",
  description: "Kupovina i planiranje sadnje biljaka",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
