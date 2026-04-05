import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import heroImage from "@/assets/detective-hero-hq.jpg";
import { trackWhatsAppClick, trackPhoneCall, trackCTAClick } from "@/utils/analytics";
import { motion } from "framer-motion";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Tenho interesse nos serviços de investigação particular.";
    const phoneNumber = "5561982844543";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    trackWhatsAppClick('Hero Section - Home');
    trackCTAClick('WhatsApp (61) 98284-4543', 'hero_section');
    try { window.open(waUrl, '_blank'); } catch { window.open("tel:+5561982844543", "_blank"); }
  };

  const handlePhoneClick = () => {
    trackPhoneCall('Hero Section - Home');
    trackCTAClick('Consulta Gratuita', 'hero_section');
    window.open("tel:+5561982844543", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(var(--detective-navy))]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage} 
          alt="Detetive Particular Profissional - Investigação DF" 
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,50%,5%)]/95 via-[hsl(220,50%,5%)]/80 to-[hsl(220,50%,5%)]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,50%,5%)] via-transparent to-[hsl(220,50%,5%)]/30" />
      </div>

      {/* Vertical accent */}
      <div className="absolute left-8 md:left-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[hsl(var(--detective-gold)/0.3)] to-transparent hidden md:block" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="glow-dot" />
            <span className="text-mono text-[hsl(var(--detective-gold))]">Detetive Particular • Brasília DF</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-hero text-white mb-6"
          >
            Descubra a verdade
            <br />
            <span className="gradient-text-gold">com provas reais.</span>
          </motion.h1>

          {/* Subtitle with USPs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 space-y-3"
          >
            <p className="text-xl md:text-2xl text-white/50 leading-relaxed max-w-xl font-light">
              Investigação <span className="text-white font-medium">100% sigilosa</span> com relatórios completos de fotos e vídeos.
            </p>
            <p className="text-lg text-white/35 max-w-lg">
              Mais de <span className="text-[hsl(var(--detective-gold))] font-semibold">2.500 casos resolvidos</span> em Brasília e todo o DF. Atendimento imediato.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-500 text-white font-bold px-10 py-7 rounded-2xl shadow-lg shadow-green-900/30 hover:shadow-xl hover:shadow-green-900/40 hover:-translate-y-1 transition-all duration-300 text-lg group"
              size="lg"
            >
              <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              WhatsApp (61) 98284-4543
            </Button>
            <Button 
              onClick={handlePhoneClick}
              className="bg-transparent hover:bg-white/5 text-white/70 hover:text-white border border-white/10 hover:border-white/20 font-medium px-8 py-7 rounded-2xl transition-all duration-300 text-base"
              size="lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Consulta Gratuita
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-0"
          >
            {[
              { value: "20+", label: "Anos" },
              { value: "2.500+", label: "Casos" },
              { value: "98%", label: "Sucesso" },
              { value: "24h", label: "Atendimento" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                <div className="text-center px-5 md:px-8 py-3">
                  <div className="text-2xl md:text-3xl font-display font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] mt-1">{stat.label}</div>
                </div>
                {i < 3 && <div className="w-px h-10 bg-white/10" />}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-5 h-5 text-white/20" />
      </motion.div>
    </section>
  );
};

export default HeroSection;