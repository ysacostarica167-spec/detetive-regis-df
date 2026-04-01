import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";

const notifications = [
  { name: "Maria S.", location: "Águas Claras", action: "iniciou investigação conjugal", time: "há 12 min" },
  { name: "Carlos R.", location: "Asa Norte", action: "contratou serviço de localização", time: "há 23 min" },
  { name: "Ana P.", location: "Taguatinga", action: "solicitou consulta gratuita", time: "há 8 min" },
  { name: "Roberto M.", location: "Lago Sul", action: "iniciou investigação empresarial", time: "há 35 min" },
  { name: "Juliana F.", location: "Sudoeste", action: "contratou investigação conjugal", time: "há 18 min" },
  { name: "Paulo H.", location: "Plano Piloto", action: "solicitou consulta gratuita", time: "há 5 min" },
];

const SocialProofNotification = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start after 15 seconds
    const initialDelay = setTimeout(() => {
      setCurrentIndex(0);
      setIsVisible(true);
    }, 15000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (currentIndex < 0) return;

    // Show for 5 seconds, then hide for 20 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    const nextTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length);
      setIsVisible(true);
    }, 25000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [currentIndex]);

  if (currentIndex < 0) return null;

  const notification = notifications[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -100, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-6 z-40 bg-white rounded-2xl shadow-[var(--shadow-xl)] border border-border/50 p-4 max-w-xs"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {notification.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {notification.action}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3 text-detective-gold" />
                <span className="text-[11px] text-muted-foreground">
                  {notification.location} • {notification.time}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialProofNotification;
