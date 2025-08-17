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
//definisan layout svake strane
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body className={inter.className}>
        <Header />
        <main className="pt-[100px]">{children}</main>
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
