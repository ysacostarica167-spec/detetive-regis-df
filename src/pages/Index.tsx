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
import GeographicCoverage from "@/components/GeographicCoverage";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import TrustBadges from "@/components/TrustBadges";
import AuthoritySection from "@/components/AuthoritySection";
import Testimonials from "@/components/Testimonials";
import FloatingCTA from "@/components/FloatingCTA";
import UrgencyBanner from "@/components/UrgencyBanner";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import SocialProofNotification from "@/components/SocialProofNotification";
import QuickContactForm from "@/components/QuickContactForm";
import { localBusinessSchema, websiteSchema, breadcrumbSchema } from "@/data/structuredData";
import { usePageTracking } from "@/hooks/usePageTracking";

const Index = () => {
  // Track page engagement for Quality Score
  usePageTracking('Home Page', 'Investigação Geral');
  
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
        title="Detetive Particular Brasília DF | Investigador Particular | (61) 98284-4543"
        description="Detetive particular Brasília DF profissional. Investigador particular Brasília especializado em investigação conjugal, localização de pessoas, investigação empresarial e veicular. Detetive em Brasília sigiloso e urgente."
        keywords="detetive particular brasília, detetive particular df, detetive em brasília, investigador particular brasília, detetive profissional brasília, detetive sigiloso brasília, detetive particular urgente brasília, detetive especializado brasília, investigação particular df, investigação conjugal brasília, localizar pessoas brasília, investigação empresarial brasília, descobrir proprietário de veículo"
        canonical="/"
        structuredData={structuredData}
      />
      
      {/* Urgency Banner - Top of page for conversions */}
      <UrgencyBanner />
      
      <Header />
      <main className="pt-0">
        <section id="inicio">
          <HeroSection />
        </section>
        
        {/* Trust Badges - Social proof immediately after hero */}
        <TrustBadges />
        
        <section id="servicos">
          <ServicesSection />
        </section>
        
        {/* Testimonials - Social proof for Quality Score */}
        <Testimonials />
        
        <section id="conteudo">
          <ContentSection />
          <BlogSection />
        </section>
        <section id="sobre">
          <AboutSection />
        </section>
        
        {/* Authority Section - Credenciais e reconhecimento */}
        <AuthoritySection />
        <section id="faq">
          <FAQSection />
        </section>
        <LongTailKeywords />
        <GeographicCoverage />
        <section id="contato">
          <ContactSection />
        </section>
        <InternalLinks />
      </main>
      <Footer />
      
      {/* Floating CTA - Always visible for conversions */}
      <FloatingCTA />
    </div>
  );
};

export default Index;
