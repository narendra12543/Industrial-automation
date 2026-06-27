import AboutHero from "@/components/public/about/AboutHero";
import CompanyOverview from "@/components/public/about/CompanyOverview";
import WhyChooseUsAbout from "@/components/public/about/WhyChooseUsAbout";
import DirectorMessage from "@/components/public/about/DirectorMessage";
import AboutIndustries from "@/components/public/about/AboutIndustries";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIndustries />
      <CompanyOverview />
      <DirectorMessage />
      <WhyChooseUsAbout />
      

      
    </>
  );
}