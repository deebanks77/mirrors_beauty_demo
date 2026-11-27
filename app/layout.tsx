
import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mirrors Beauty",
  description:
    "Discover makeup, fragrance, skincare, candles and luxury beauty essentials.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        {children}

        <Script
          id="simplexi-messenger"
          strategy="afterInteractive"
        >
          {`
            (function (w, d, s) {
              w.SimplexiMessenger = w.SimplexiMessenger || function () {
                (w.SimplexiMessenger.q = w.SimplexiMessenger.q || []).push(arguments);
              };

              w.SimplexiMessenger('boot', {
                host: 'https://api.simplexi.io',
                messenger: '7355fbad-942a-4344-a247-b93e8deb9b80'
              });

              var js = d.createElement(s);
              js.async = 1;
              js.src = 'https://cdn.simplexi.io/simplexi-messenger.js';
              d.head.appendChild(js);
            })(window, document, 'script');
          `}
        </Script>
      </body>
    </html>
  );
}
