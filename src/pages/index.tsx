
import Image from "next/image";
import { Poppins } from "next/font/google";
import Hero from "@/component/hero";
import ContactForm from "@/component/contactForm";

const PoppinsFont = Poppins({
  variable: "--font-Poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



export default function Home() {
  return (
    <div
      className={`${PoppinsFont.variable} flex min-h-screen items-center justify-center bg-zinc-50 font-sans`}
    >
      <main className="flex2 w-full flex-col items-center justify-between sm:items-start">
        <Hero />
        <ContactForm />
      </main>
    </div>
  );
}
