import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ThemeGrid } from "@/components/ThemeGrid";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ThemeGrid />
      </main>
      <Footer />
    </>
  );
}
