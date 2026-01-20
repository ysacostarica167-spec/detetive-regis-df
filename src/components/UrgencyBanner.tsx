import { useState } from "react";
import { Clock, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsAppClick, trackCTAClick } from "@/utils/analytics";

const UrgencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleWhatsAppClick = () => {
    const message = "Olá! Vi a oferta de consulta gratuita no site e tenho interesse.";
    const phoneNumber = "5561982844543";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    trackWhatsAppClick('Urgency Banner');
    trackCTAClick('Consulta Grátis Banner', 'urgency_banner');
    
    window.open(waUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-detective-gold via-detective-gold/90 to-detective-gold fixed top-0 left-0 right-0 z-50 py-2 px-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <Clock className="w-5 h-5 text-detective-navy animate-pulse hidden sm:block" />
          <p className="text-detective-navy font-medium text-sm md:text-base">
            <span className="font-bold">⚡ Consulta Gratuita Hoje!</span>
            <span className="hidden md:inline"> • Atendimento 24h • Sigilo Absoluto</span>
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            onClick={handleWhatsAppClick}
            size="sm"
            className="bg-detective-navy hover:bg-detective-navy/90 text-white font-semibold px-4 py-2 rounded-full text-xs md:text-sm whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 mr-1 md:mr-2" />
            <span className="hidden sm:inline">Falar Agora</span>
            <span className="sm:hidden">Falar</span>
          </Button>
          
          <button
            onClick={() => setIsVisible(false)}
            className="text-detective-navy/60 hover:text-detective-navy p-1 transition-colors"
            aria-label="Fechar banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;
