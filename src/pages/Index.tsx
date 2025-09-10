import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { localBusinessSchema, websiteSchema } from "@/data/structuredData";

const Index = () => {
  const structuredData = [localBusinessSchema, websiteSchema];
  
  return (
    <div className="min-h-screen">
      <SEO 
        title="Detetive Particular Regis - Investigação Profissional DF | WhatsApp (61) 98284-4543"
        description="Detetive Particular DF - Regis, graduado em investigação profissional. Detetive em Brasília DF com preços justos. Investigação conjugal, corporativa, localização. WhatsApp (61) 98284-4543"
        keywords="detetive particular df, detetive particular brasília, detetive df, detetive particular em brasília, detetive particular df barato, detetive em brasília df, detetive brasília df, detetive particular brasilia preço, investigação profissional, investigação conjugal, investigação corporativa, localização de pessoas"
        canonical="/"
        structuredData={structuredData}
      />
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
