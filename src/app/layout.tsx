import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "typing game with next",
  description: "typing game with next",
};

const Header = () => {
  return (
    <header className="flex justify-center py-4 bg-indigo-300 text-white h-16">
      <h1 className="text-3xl font-bold">Typing Game</h1>
    </header>
  );
};
const Footer = () => {
  return (
    <footer className="flex justify-center py-4 bg-indigo-300 text-white h-16">
      <p>© 2024 Typing Game</p>
    </footer>
  )
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow w-screen bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}