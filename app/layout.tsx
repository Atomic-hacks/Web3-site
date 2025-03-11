import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Space_Grotesk({
  variable: "--font-Grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Shillix",
  description: "Join the waitlist for the future of Web3.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${jetBrainsMono.variable}`}>
     
        <link rel="icon" href="/logo.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
     
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
