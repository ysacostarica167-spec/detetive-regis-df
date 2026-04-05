import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Clock, MapPin, ArrowUpRight, Shield } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre os serviços de investigação.";
    const phoneNumber = "5561982844543";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion(waUrl);
    } else {
      try { window.open(waUrl, '_blank'); } catch { window.open("tel:+5561982844543", "_blank"); }
    }
  };

  const handlePhoneClick = () => window.open("tel:+5561982844543", "_blank");

  return (
    <section className="py-28 md:py-36 bg-[hsl(var(--detective-navy))] relative overflow-hidden noise-overlay">
      {/* Dramatic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[hsl(var(--detective-gold)/0.03)] blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[hsl(var(--detective-gold)/0.08)] border border-[hsl(var(--detective-gold)/0.15)] rounded-full px-5 py-2 mb-10"
          >
            <Shield className="w-4 h-4 text-[hsl(var(--detective-gold))]" />
            <span className="text-mono text-[10px] text-[hsl(var(--detective-gold))]">Consulta 100% Gratuita e Sigilosa</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight"
          >
            Fale agora com um detetive
            <br />
            <span className="gradient-text-gold">e descubra a verdade hoje.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/40 text-lg mb-14 max-w-lg mx-auto"
          >
            Atendimento imediato em todo o Distrito Federal. Sem compromisso.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-500 text-white font-bold px-12 py-8 rounded-2xl shadow-lg shadow-green-900/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg group"
              size="lg"
            >
              <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              WhatsApp (61) 98284-4543
            </Button>
            <Button 
              onClick={handlePhoneClick}
              className="bg-transparent hover:bg-white/5 text-white/60 hover:text-white border border-white/10 hover:border-white/20 font-medium px-10 py-8 rounded-2xl transition-all duration-300 text-lg"
              size="lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </Button>
          </motion.div>

          {/* Info pills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              { icon: <Clock className="w-4 h-4" />, text: "Atendimento 24h" },
              { icon: <MapPin className="w-4 h-4" />, text: "Asa Sul, Brasília" },
              { icon: <Shield className="w-4 h-4" />, text: "Sigilo Garantido" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/30 text-sm bg-white/[0.03] border border-white/[0.05] rounded-full px-4 py-2">
                <span className="text-[hsl(var(--detective-gold)/0.5)]">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;