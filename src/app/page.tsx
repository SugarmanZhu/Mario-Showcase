import { NavHeader } from "@/components/shared/nav-header";
import { Footer } from "@/components/shared/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ArchitectureSection } from "@/components/sections/architecture-section";
import { TrainingSection } from "@/components/sections/training-section";
import { PlaygroundSection } from "@/components/sections/playground-section";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <NavHeader />
      <main className="min-h-screen">
        <HeroSection />
        <Separator className="mx-auto max-w-6xl" />
        <ArchitectureSection />
        <Separator className="mx-auto max-w-6xl" />
        <TrainingSection />
        <Separator className="mx-auto max-w-6xl" />
        <PlaygroundSection />
      </main>
      <Footer />
    </>
  );
}
