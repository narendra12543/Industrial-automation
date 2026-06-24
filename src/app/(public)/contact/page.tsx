import ContactHero from "@/components/public/contact/ContactHero";
import ContactForm from "@/components/public/contact/ContactForm";
import GoogleMapSection from "@/components/public/contact/GoogleMapSection";

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="pb-16 pt-6">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2">

          <ContactForm />

          <GoogleMapSection />

        </div>
      </section>

      
    </>
  );
}