import { MessageCircle } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/whatsapp";

const WhatsAppButton = () => {
  const handleClick = () =>
    trackWhatsAppClick({ location: "floating_button" });

  return (
    <button
      onClick={handleClick}
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-fade-in"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};

export default WhatsAppButton;
