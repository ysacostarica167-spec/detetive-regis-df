import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Shield, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
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
    <section className="py-24 md:py-32 bg-[hsl(var(--detective-navy))] relative overflow-hidden noise-overlay">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(var(--detective-gold)/0.02)] blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-mono text-[hsl(var(--detective-gold))] mb-6 block">Contato</span>
            <h2 className="heading-section text-white mb-6">
              Fale agora com um detetive
              <br />
              <span className="gradient-text-gold">e descubra a verdade.</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Consulta inicial gratuita e 100% confidencial. Atendimento imediato em todo o DF.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {[
              { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", value: "(61) 98284-4543", action: handleWhatsAppClick },
              { icon: <Phone className="w-5 h-5" />, label: "Telefone", value: "(61) 98284-4543", action: handlePhoneClick },
              { icon: <Clock className="w-5 h-5" />, label: "Horário", value: "24h por dia" },
              { icon: <MapPin className="w-5 h-5" />, label: "Escritório", value: "Asa Sul, Brasília" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                onClick={item.action}
                className={`flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-[hsl(var(--detective-gold)/0.15)] transition-all duration-500 ${item.action ? 'cursor-pointer' : ''}`}
              >
                <div className="w-11 h-11 rounded-xl bg-[hsl(var(--detective-gold)/0.08)] flex items-center justify-center text-[hsl(var(--detective-gold))] mb-3">
                  {item.icon}
                </div>
                <div className="text-white/30 text-[10px] uppercase tracking-[0.2em] mb-1">{item.label}</div>
                <div className="text-white font-semibold text-sm">{item.value}</div>
              </motion.div>
            ))}
          </div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-500 text-white font-bold px-10 py-7 rounded-2xl shadow-lg shadow-green-900/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-base group"
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Consulta Gratuita no WhatsApp
              </Button>
              <Button 
                onClick={handlePhoneClick}
                className="bg-transparent hover:bg-white/5 text-white/60 hover:text-white border border-white/10 hover:border-white/20 font-medium px-10 py-7 rounded-2xl transition-all duration-300 text-base"
                size="lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
