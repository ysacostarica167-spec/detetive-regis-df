import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import ContentSection from "@/components/ContentSection";
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
        title="Detetive Particular Regis - Investigação Profissional DF | Conteúdo Especializado | WhatsApp (61) 98284-4543"
        description="Detetive Particular DF - Regis, graduado em investigação profissional. Blog com artigos especializados, guias práticos e conteúdo de autoridade. Detetive em Brasília DF com preços justos. WhatsApp (61) 98284-4543"
        keywords="detetive particular df, detetive particular brasília, detetive df, blog investigação, artigos detetive particular, guias investigação, conteúdo especializado, detetive em brasília df, investigação profissional, investigação conjugal, investigação corporativa"
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
        <section id="conteudo">
          <ContentSection />
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
