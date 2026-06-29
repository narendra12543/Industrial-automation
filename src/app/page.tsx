import HeroSection from "@/components/public/home/HeroSection";
import AboutSection from "@/components/public/home/AboutSection";
import FeaturedProductsSection from "@/components/public/home/FeaturedProductsSection";
import StatisticsSection from "@/components/public/home/StatisticsSection";
import SolutionsSwiper from "@/components/public/home/SolutionsSwiper";


export default function HomePage() {
  return (
    <>
      <SolutionsSwiper/>
      {/* <HeroSection /> */}
      <FeaturedProductsSection />
      <AboutSection />
      {/* <StatisticsSection /> */}
    </>
  );
}