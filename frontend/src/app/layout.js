import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import 'boxicons/css/boxicons.min.css'
import Top_navbar from "./components/top-navbar";
import Navbar from "./components/navbar";

export const metadata = {
  title: "Roleplay Companion",
  description: "Tu acompañante de rol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-[url('/background-min-blur.png')] bg-fixed h-screen w-full bg-no-repeat bg-cover bg-left">
        {/* Navbar superior con logo y login */}
        <Top_navbar/>

        {/* Navbar */}
        <Navbar/>
        
        {children}
      </body>
    </html>
  );
}