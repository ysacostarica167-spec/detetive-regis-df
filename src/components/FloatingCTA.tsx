import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, X } from "lucide-react";
import { trackWhatsAppClick, trackPhoneCall, trackCTAClick } from "@/utils/analytics";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Olá! Tenho interesse nos serviços de investigação particular.";
    const phoneNumber = "5561982844543";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    trackWhatsAppClick('Floating CTA');
    trackCTAClick('WhatsApp Floating', 'floating_cta');
    
    window.open(waUrl, '_blank');
  };

  const handlePhoneClick = () => {
    trackPhoneCall('Floating CTA');
    trackCTAClick('Phone Floating', 'floating_cta');
    
    window.open("tel:+5561982844543", "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded Options */}
      {isExpanded && (
        <div className="flex flex-col gap-2 animate-fade-in">
          <Button
            onClick={handlePhoneClick}
            className="bg-detective-navy hover:bg-detective-navy/90 text-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all"
            size="lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Ligar Agora
          </Button>
          
          <Button
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all"
            size="lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </Button>
        </div>
      )}

      {/* Main Toggle Button */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all transform hover:scale-110 ${
          isExpanded 
            ? "bg-red-500 hover:bg-red-600" 
            : "bg-green-600 hover:bg-green-700 animate-pulse"
        }`}
        size="lg"
      >
        {isExpanded ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </Button>

      {/* Notification Dot */}
      {!isExpanded && (
        <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full animate-ping" />
      )}
    </div>
  );
};

export default FloatingCTA;
