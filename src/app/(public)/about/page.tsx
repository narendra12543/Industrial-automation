import AboutHero from "@/components/public/about/AboutHero";
import CompanyOverview from "@/components/public/about/CompanyOverview";
import WhyChooseUsAbout from "@/components/public/about/WhyChooseUsAbout";
import AboutStatistics from "@/components/public/about/AboutStatistics";
import AboutIndustries from "@/components/public/about/AboutIndustries";
import AboutProcess from "@/components/public/about/AboutProcess";
import CompanyValues from "@/components/public/about/CompanyValues";


export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <CompanyOverview />

      <WhyChooseUsAbout />

      <AboutStatistics />

      <AboutIndustries />

      <AboutProcess />

      <CompanyValues />

      {/* <ContactStrip /> */}
    </>
  );
}