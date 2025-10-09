import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import ContentSection from "@/components/ContentSection";
import BlogSection from "@/components/BlogSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import InternalLinks from "@/components/InternalLinks";
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
        title="Detetive Particular DF | Regis | (61) 98284-4543"
        description="Detetive DF graduado com 15+ anos. Investigação conjugal, corporativa e localização. Consulta gratuita (61) 98284-4543"
        keywords="detetive particular df, detetive particular brasília, agência de detetives df, investigador particular df, melhor detetive brasília, investigação conjugal df, como descobrir traição em brasília, detetive para infidelidade df, investigação empresarial df, detetive para funcionários brasília, localização de pessoas desaparecidas df, encontrar devedor de pensão df, investigação familiar em brasília, detetive para filhos em brasília, detetive particular para celular, detetive particular águas claras, detetive particular taguatinga, detetive particular ceilândia, detetive particular guará, detetive particular lago sul, detetive particular asa norte, detetive particular entorno de brasília"
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
