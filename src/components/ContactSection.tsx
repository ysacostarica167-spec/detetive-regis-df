import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Clock, MapPin, Shield, Mail } from "lucide-react";
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

  const contactItems = [
    { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", value: "(61) 98284-4543", action: handleWhatsAppClick },
    { icon: <Phone className="w-5 h-5" />, label: "Telefone", value: "(61) 98284-4543", action: handlePhoneClick },
    { icon: <Mail className="w-5 h-5" />, label: "E-mail", value: "contato@regis.com.br", action: () => window.open("mailto:contato@regis.com.br") },
    { icon: <Clock className="w-5 h-5" />, label: "Horário", value: "24 horas por dia" },
    { icon: <MapPin className="w-5 h-5" />, label: "Escritório", value: "Asa Sul, Brasília - DF" },
  ];

  return (
    <section className="py-24 bg-detective-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="gold-line mx-auto mb-6" />
            <h2 className="heading-section text-white mb-4">
              Fale agora com um detetive
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Descubra a verdade hoje mesmo. Consulta inicial gratuita e 100% confidencial.
            </p>
          </motion.div>

          {/* Contact Items */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                onClick={item.action}
                className={`flex items-center gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-detective-gold/20 transition-all duration-500 ${item.action ? 'cursor-pointer' : ''}`}
              >
                <div className="w-11 h-11 rounded-xl bg-detective-gold/10 flex items-center justify-center text-detective-gold flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">{item.label}</div>
                  <div className="text-white font-semibold text-sm">{item.value}</div>
                </div>
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
            <div className="bg-gradient-to-br from-detective-gold/10 to-detective-gold/5 border border-detective-gold/20 rounded-3xl p-10">
              <Shield className="w-12 h-12 mx-auto mb-5 text-detective-gold" />
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                Fale agora com um detetive e descubra a verdade hoje mesmo.
              </h3>
              <p className="text-white/50 mb-8 max-w-lg mx-auto">
                Atendimento imediato no DF. Todas as conversas são protegidas por sigilo profissional.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-detective-gold hover:bg-detective-gold-dark text-detective-navy font-bold px-8 py-6 rounded-xl shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-xl)] hover:-translate-y-1 transition-all duration-300 text-base"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consulta Gratuita no WhatsApp
                </Button>
                <Button 
                  onClick={handlePhoneClick}
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 font-semibold px-8 py-6 rounded-xl transition-all duration-300 text-base"
                  size="lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Ligar Agora
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;