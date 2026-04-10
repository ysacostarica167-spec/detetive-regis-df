import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Shield, ArrowRight } from "lucide-react";

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
      {/* Dark background with noise */}
      <div className="absolute inset-0 bg-detective-navy noise-overlay"></div>
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-detective-gold/[0.05] rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="glow-dot animate-pulse-glow"></div>
            <span className="heading-editorial text-detective-gold">Fale Conosco</span>
            <div className="glow-dot animate-pulse-glow"></div>
          </div>

          {/* Headline */}
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Fale agora com um detetive e{" "}
            <span className="text-gold-gradient italic">descubra a verdade</span>{" "}
            hoje mesmo.
          </h2>

          <p className="text-lg text-white/60 mb-12 max-w-xl mx-auto">
            Consulta inicial gratuita e totalmente confidencial. 
            Estamos prontos para resolver sua situação.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
              className="border-white/20 text-white hover:bg-white/10 hover:text-white"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </Button>
          </div>

          {/* Trust line */}
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
            <Shield className="w-4 h-4" />
            <span>Conversas protegidas por sigilo profissional</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;