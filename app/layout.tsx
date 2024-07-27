import type { Metadata } from "next";
import { Cormorant_Garamond, Proza_Libre } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import React from "react";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
});

const prozaLibre = Proza_Libre({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-proza",
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
      className={`${cormorantGaramond.variable} ${prozaLibre.variable}`}
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
        {draftMode().isEnabled && (
          <a
            className="fixed right-0 bottom-0 bg-blue-500 text-white p-4 m-4"
            href="/api/draft-mode/disable"
          >
            Disable preview mode
          </a>
        )}
        {children}
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
