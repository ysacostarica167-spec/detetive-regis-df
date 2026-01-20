import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Shield, Award } from "lucide-react";
import heroImage from "@/assets/detective-hero-hq.jpg";
import LazyImage from "@/components/LazyImage";
import { trackWhatsAppClick, trackPhoneCall, trackCTAClick } from "@/utils/analytics";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Tenho interesse nos serviços de investigação particular.";
    const phoneNumber = "5561982844543";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Track WhatsApp conversion (principal conversão para CPC)
    trackWhatsAppClick('Hero Section - Home');
    trackCTAClick('WhatsApp (61) 98284-4543', 'hero_section');
    
    // Open WhatsApp
    try {
      window.open(waUrl, '_blank');
    } catch (error) {
      window.open("tel:+5561982844543", "_blank");
    }
  };

  const handlePhoneClick = () => {
    // Track phone call conversion
    trackPhoneCall('Hero Section - Home');
    trackCTAClick('Consulta Gratuita', 'hero_section');
    
    window.open("tel:+5561982844543", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <LazyImage
          src={heroImage} 
          alt="Detetive Particular Profissional - Investigação DF" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-detective-navy/90 via-detective-navy/80 to-detective-navy/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-1.5 mb-4 animate-pulse">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-green-400 font-medium text-sm">Disponível Agora • Resposta em 5 Minutos</span>
          </div>

          {/* Professional Badge */}
          <div className="inline-flex items-center gap-2 bg-detective-gold/20 backdrop-blur-sm border border-detective-gold/30 rounded-full px-6 py-2 mb-6 hover:bg-detective-gold/30 hover:scale-105 transition-all duration-300">
            <Award className="w-5 h-5 text-detective-gold" />
            <span className="text-detective-gold font-medium">Graduado em Investigação • 15+ Anos de Experiência</span>
          </div>

          {/* Main Heading - Keyword optimized */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Detetive Particular</span>
            <span className="block text-detective-gold">Brasília DF</span>
          </h1>

          {/* Subtitle - CPC optimized with keywords */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
            Investigação Conjugal • Traição • Localização de Pessoas
          </p>
          
          <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
            <strong>Consulta Gratuita</strong> • Sigilo Absoluto • Provas com Validade Legal
          </p>

          {/* Stats for social proof */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-detective-gold font-bold">500+</span>
              <span className="text-white/80 ml-1">Casos Resolvidos</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-detective-gold font-bold">4.9★</span>
              <span className="text-white/80 ml-1">Avaliação Google</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-detective-gold font-bold">24h</span>
              <span className="text-white/80 ml-1">Atendimento</span>
            </div>
          </div>

          {/* Service Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/90">
              <Shield className="w-5 h-5 text-detective-gold" />
              <span>100% Confidencial</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Award className="w-5 h-5 text-detective-gold" />
              <span>Profissional Certificado</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <MessageCircle className="w-5 h-5 text-detective-gold" />
              <span>Atendimento 24h</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group w-full sm:w-auto"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              WhatsApp (61) 98284-4543
            </Button>
            <Button 
              onClick={handlePhoneClick}
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-semibold px-8 py-4 rounded-lg backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
              size="lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/20 to-transparent"></div>
    </section>
  );
};

export default HeroSection;