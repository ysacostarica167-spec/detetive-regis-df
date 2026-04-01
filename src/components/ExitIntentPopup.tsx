import { useState, useEffect } from "react";
import { X, MessageCircle, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsAppClick, trackCTAClick } from "@/utils/analytics";
import { motion, AnimatePresence } from "framer-motion";

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let triggered = false;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !triggered) {
        const dismissed = sessionStorage.getItem('exitPopupDismissed');
        if (!dismissed) {
          triggered = true;
          setIsVisible(true);
        }
      }
    };

    // Also trigger after 45 seconds on page
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('exitPopupDismissed');
      if (!dismissed && !triggered) {
        triggered = true;
        setIsVisible(true);
      }
    }, 45000);

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('exitPopupDismissed', 'true');
  };

  const handleWhatsApp = () => {
    const message = "Olá! Vi a oferta de consulta gratuita e gostaria de saber mais.";
    const waUrl = `https://wa.me/5561982844543?text=${encodeURIComponent(message)}`;
    trackWhatsAppClick('Exit Intent Popup');
    trackCTAClick('WhatsApp Exit Popup', 'exit_popup');
    window.open(waUrl, '_blank');
    handleClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-detective-navy p-8 text-center relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-16 h-16 rounded-2xl bg-detective-gold/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-detective-gold" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Espere! Não vá embora
              </h3>
              <p className="text-white/60 text-sm">
                Consulta 100% gratuita e confidencial
              </p>
            </div>

            {/* Body */}
            <div className="p-8">
              <div className="space-y-4 mb-8">
                {[
                  { icon: <CheckCircle className="w-5 h-5 text-green-500" />, text: "Análise gratuita do seu caso" },
                  { icon: <Clock className="w-5 h-5 text-detective-gold" />, text: "Resposta em menos de 5 minutos" },
                  { icon: <Shield className="w-5 h-5 text-detective-navy" />, text: "Sigilo absoluto garantido" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-sm font-medium text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 rounded-xl text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com Detetive Agora
              </Button>

              <p className="text-center text-xs text-muted-foreground mt-4">
                Mais de 2.500 clientes atendidos com sucesso
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
