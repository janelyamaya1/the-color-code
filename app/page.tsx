import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Quiz } from "@/components/Quiz";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Quiz />
      <Footer />
    </main>
  );
}
