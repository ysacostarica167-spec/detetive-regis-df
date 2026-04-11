import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Shield, ArrowRight, Clock, MapPin } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre os serviços de investigação.";
    const phoneNumber = "5561982844543";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    try {
      window.open(waUrl, '_blank');
    } catch {
      window.open("tel:+5561982844543", "_blank");
    }
  };

  const handlePhoneClick = () => {
    window.open("tel:+5561982844543", "_blank");
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-detective-navy noise-overlay"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-detective-gold/[0.04] rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-detective-gold/10 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-detective-gold/5 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-detective-gold/30"></div>
            <div className="glow-dot animate-pulse-glow"></div>
            <span className="heading-editorial text-detective-gold">Fale Conosco</span>
            <div className="glow-dot animate-pulse-glow"></div>
            <div className="w-12 h-px bg-detective-gold/30"></div>
          </div>

          {/* Headline */}
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-center">
            Fale agora com um detetive e{" "}
            <span className="text-gold-gradient italic">descubra a verdade</span>{" "}
            hoje mesmo.
          </h2>

          <p className="text-lg text-white/50 mb-12 max-w-xl mx-auto text-center">
            Consulta inicial gratuita e totalmente confidencial. 
            Estamos prontos para resolver sua situação.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Button
              onClick={handleWhatsAppClick}
              className="btn-accent text-base group"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Consulta Gratuita no WhatsApp
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={handlePhoneClick}
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </Button>
          </div>

          {/* Info strip */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/30 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-detective-gold/50" />
              <span>Sigilo profissional</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-detective-gold/50" />
              <span>Atendimento 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-detective-gold/50" />
              <span>Todo o Distrito Federal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
