import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, X } from "lucide-react";
import { trackWhatsAppClick, trackPhoneCall, trackCTAClick } from "@/utils/analytics";
import { motion, AnimatePresence } from "framer-motion";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Olá! Tenho interesse nos serviços de investigação particular.";
    const waUrl = `https://wa.me/5561982844543?text=${encodeURIComponent(message)}`;
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
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="flex flex-col gap-2"
          >
            <Button
              onClick={handlePhoneClick}
              className="bg-detective-navy hover:bg-detective-navy-light text-white rounded-xl px-5 py-3 shadow-[var(--shadow-xl)] transition-all font-semibold text-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              Ligar Agora
            </Button>
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-5 py-3 shadow-[var(--shadow-xl)] transition-all font-semibold text-sm"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-2xl shadow-[var(--shadow-xl)] transition-all duration-300 flex items-center justify-center ${
          isExpanded 
            ? "bg-white/90 text-detective-navy rotate-45" 
            : "bg-detective-gold text-detective-navy hover:bg-detective-gold-dark hover:-translate-y-0.5"
        }`}
      >
        {isExpanded ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>
    </div>
  );
};

export default FloatingCTA;