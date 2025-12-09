import AboutSection from "@/components/home/AboutSection";
import Donate from "@/components/home/Donate";
import FeaturedStories from "@/components/home/FeaturedStories";
import HeroSection from "@/components/home/HeroSection";
import ImpactStats from "@/components/home/ImpactStats";
import WhatWeDo from "@/components/home/WhatWeDo";
import { GalleryCarousel } from "@/components/layout/GalleryCarousel";
import ObjectivesSection from "@/components/home/ObjectivesSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WhatWeDo />
      <ObjectivesSection />
      <ImpactStats />
      <FeaturedStories />
      <Donate />
      <GalleryCarousel />
    </main>
  );
}
