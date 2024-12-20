import Header from "@/components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import "./custom.css";
import "./responsive.css";
import Footer from "@/components/Footer";

import {Josefin_Sans } from 'next/font/google';
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ChatCode from "@/components/ChatCode";

const Josefin = Josefin_Sans({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Josefin.className}>
        <GoogleAnalytics/>
        <Header/>
        {children}
        <Footer/>
        {/* <ChatCode/> */}
      </body>
    </html>
  );
}
