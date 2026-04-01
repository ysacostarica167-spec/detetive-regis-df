import { useState, useEffect } from "react";
import { X, MessageCircle, Users, TrendingUp } from "lucide-react";
import { trackWhatsAppClick, trackCTAClick } from "@/utils/analytics";
import { motion, AnimatePresence } from "framer-motion";

const UrgencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    { icon: <Users className="w-4 h-4" />, text: "3 pessoas consultando agora em Brasília" },
    { icon: <TrendingUp className="w-4 h-4" />, text: "87% dos casos resolvidos na primeira semana" },
    { icon: <MessageCircle className="w-4 h-4" />, text: "Consulta gratuita — Fale agora no WhatsApp" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    const message = "Olá! Tenho interesse nos serviços de investigação particular.";
    const waUrl = `https://wa.me/5561982844543?text=${encodeURIComponent(message)}`;
    trackWhatsAppClick('Urgency Banner');
    trackCTAClick('WhatsApp Urgency', 'urgency_banner');
    window.open(waUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-detective-gold text-detective-navy">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-10 relative">
          <button
            onClick={handleClick}
            className="flex items-center gap-2 text-sm font-bold hover:underline transition-all"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentMessage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2"
              >
                {messages[currentMessage].icon}
                {messages[currentMessage].text}
              </motion.span>
            </AnimatePresence>
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-0 p-1 hover:bg-detective-navy/10 rounded transition-colors"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;
