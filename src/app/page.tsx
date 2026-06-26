import HeroSection from "@/components/public/home/HeroSection";
import TrustSection from "@/components/public/home/TrustSection";
import FeaturedProductsSection from "@/components/public/home/FeaturedProductsSection";
import StatisticsSection from "@/components/public/home/StatisticsSection";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProductsSection />
      <TrustSection />
      <StatisticsSection />
    </>
  );
}