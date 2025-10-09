import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import ContentSection from "@/components/ContentSection";
import BlogSection from "@/components/BlogSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import InternalLinks from "@/components/InternalLinks";
import LongTailKeywords from "@/components/LongTailKeywords";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { localBusinessSchema, websiteSchema, breadcrumbSchema } from "@/data/structuredData";

const Index = () => {
  const structuredData = [
    localBusinessSchema, 
    websiteSchema,
    breadcrumbSchema([
      { name: "Início", url: "/" },
      { name: "Serviços", url: "/#servicos" },
      { name: "Sobre", url: "/#sobre" },
      { name: "Contato", url: "/#contato" }
    ])
  ];
  
  return (
    <div className="min-h-screen">
      <SEO 
        title="Detetive Particular Brasília DF | Investigação Conjugal | (61) 98284-4543"
        description="Investigação conjugal Brasília e investigação de traição DF. Detetive particular Brasília DF graduado. Detetive para casal, preço justo. Consulta grátis"
        keywords="detetive particular brasília df, investigação conjugal brasília, investigação de traição df, detetive para casal brasília, detetive particular preço df, investigação de suspeita de infidelidade brasília, detetive conjugal df, investigação de infidelidade brasília, detetive particular brasília 24 horas, investigação discreta brasília"
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
          <BlogSection />
        </section>
        <section id="sobre">
          <AboutSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <LongTailKeywords />
        <section id="contato">
          <ContactSection />
        </section>
        <InternalLinks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
