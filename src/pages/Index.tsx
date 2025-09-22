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
