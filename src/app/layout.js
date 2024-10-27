import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NextTopLoader from 'nextjs-toploader';
import Loading from "./components/Loading"

import { StateContext } from "./Context/StateContext";




const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Conpro Ltd",
  description: "Conpro, the best construction company ever",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <Loading>
      <StateContext> 
      <NextTopLoader 
      />
            <Nav/> 
            {children}
            <Footer/>
        </StateContext>
        </Loading>
      </body>
    </html>
  );
}
