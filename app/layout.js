import Header from "@/components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import "./custom.css";
import Footer from "@/components/Footer";

import {Josefin_Sans } from 'next/font/google';

const Josefin = Josefin_Sans({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Josefin.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
