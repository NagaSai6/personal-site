import type { Metadata } from "next";
import { Lato, Montserrat,EB_Garamond } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import NavBar from "./_components/NavBar";

const lato = Lato({
  weight: ["100", "300", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});
const eb_garamond = EB_Garamond({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-garamond",
})
const montserrat = Montserrat({
  weight: ["100", "300", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});
export const metadata: Metadata = {
  title: "Naga Sai - Tech and Politics",
  description: "Constructing something valuable",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.className} ${montserrat.className} ${eb_garamond.className}`}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
