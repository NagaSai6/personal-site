import type { Metadata } from "next";
import { Lato, Montserrat, EB_Garamond } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import NavBar from "./_components/NavBar";

const lato = Lato({
  weight: ["100", "300", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  fallback: ["Times New Roman"],
});
const eb_garamond = EB_Garamond({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-garamond",
  fallback: ["Times New Roman"],
});
const montserrat = Montserrat({
  weight: ["100", "300", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  fallback: ["Times New Roman"],
});
export const metadata: Metadata = {
  title: "Naga Sai | Software Engineer | IIT Madras",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${montserrat.variable} ${eb_garamond.variable}`}
    >
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
