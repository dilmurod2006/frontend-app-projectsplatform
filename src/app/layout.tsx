import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AOSInitializer from "./components/AOSInitializer";

// Sayt uchun asosiy shrift (Inter)
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Shrift yuklanguncha zaxira shriftni ko'rsatish
  variable: '--font-inter', // Tailwind CSS'da ishlatish uchun
});

// Sayt uchun metadata (SEO uchun muhim)
export const metadata: Metadata = {
  title: "KundalikCom Avto Login Tizimi | ProjectsPlatform.uz",
  description: "Maktab reytingini avtomatik tarzda oshirish uchun KundalikCOM tizimiga avtomatik kirish xizmati. Vaqt va resursni tejaydi. 40+ maktablar bizga ishonadi.",
  keywords: ["kundalik.com", "avto login", "maktab reytingi", "emaktab", "projectsplatform"],
};

// Barcha sahifalar uchun asosiy shablon
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={`${inter.variable}`}>
      {/* Scroll animatsiyalarini ishga tushirish uchun komponent */}
      <AOSInitializer />
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

