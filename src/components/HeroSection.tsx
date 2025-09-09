import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Shield, Award } from "lucide-react";
import heroImage from "@/assets/detective-hero.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5561982844543", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Detetive Particular Profissional" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-detective-navy/95 to-detective-navy/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Professional Badge */}
          <div className="inline-flex items-center gap-2 bg-detective-gold/20 backdrop-blur-sm border border-detective-gold/30 rounded-full px-6 py-2 mb-6">
            <Award className="w-5 h-5 text-detective-gold" />
            <span className="text-detective-gold font-medium">Graduado em Investigação Profissional</span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-hero mb-6">
            <span className="block text-white">Detetive Particular</span>
            <span className="block text-detective-gold">Regis</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
            Detetive Particular DF • Investigação Profissional com Discrição e Eficiência
          </p>
          
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Detetive em Brasília DF com mais de 10 anos de experiência. Atendimento em todo o Distrito Federal 
            com preços justos e consulta gratuita.
          </p>

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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="btn-accent group"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              WhatsApp (61) 98284-4543
            </Button>
            <Button 
              variant="outline-light" 
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