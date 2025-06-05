import type { Metadata } from "next";
import Hero from "@/components/about/Hero";
import AboutAndEducation from "@/components/about/AboutAndEducation";

export const metadata: Metadata = {
  title: "Tentang Saya",
  description: "Halaman tentang saya",
  openGraph: {
    title: "Tentang Saya",
    description: "Halaman tentang saya",
  }
}

export default function Home() {
    return (
        <>
            <Hero />
            <AboutAndEducation />
        </>
    )
}
