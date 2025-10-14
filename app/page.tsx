import AboutSection from "@/components/AboutSection";
import GoogleReviews from "@/components/GoogleReviews";
import HeroSection from "@/components/HeroSection";
import OurClients from "@/components/OurClients";
import WhatWeDo from "@/components/WhatWeDo";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      {/* Add more sections below */}
      <AboutSection />
      <WhatWeDo />
      <OurClients />
      <GoogleReviews />
    </main>
  );
}
