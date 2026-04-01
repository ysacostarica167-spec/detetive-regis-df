import { useState, useEffect } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { trackWhatsAppClick, trackPhoneCall, trackCTAClick } from "@/utils/analytics";
import { motion, AnimatePresence } from "framer-motion";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center relative"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-20" />
      </button>
    </motion.div>
  );
};

export default FloatingCTA;
