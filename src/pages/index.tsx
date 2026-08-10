import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/component/hero";
import ContactForm from "@/component/contactForm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen items-center justify-center bg-zinc-50 font-sans`}
    >
      <main className="flex2 w-full flex-col items-center justify-between sm:items-start">
        <Hero />
        <ContactForm />
      </main>
    </div>
  );
}
