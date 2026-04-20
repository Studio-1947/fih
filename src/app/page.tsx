import HeroSection from "@/components/HeroSection";
import { homeHeroContent } from "@/lib/content";

export default function Home() {
  return (
    <div className="space-y-8">
      <HeroSection content={homeHeroContent} />
    </div>
  );
}
