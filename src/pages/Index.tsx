import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="inicio">
          <HeroSection />
        </section>
        <section id="servicos">
          <ServicesSection />
        </section>
        <section id="sobre">
          <AboutSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <section id="contato">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
