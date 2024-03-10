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
    <html lang="es" className="!scroll-smooth">
      <body className="bg-[url('/bg-blur.png')] bg-fixed w-full bg-no-repeat bg-cover bg-left text-white">
        {/* Navbar superior con logo y login */}
        <Top_navbar/>
        
        {children}
      </body>
    </html>
  );
}