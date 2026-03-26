import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Shield, Clock, Camera } from "lucide-react";
import heroImage from "@/assets/detective-hero-hq.jpg";
import LazyImage from "@/components/LazyImage";
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <LazyImage
          src={heroImage} 
          alt="Detetive Particular Profissional - Investigação DF" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,45%,8%)/0.95] via-[hsl(220,45%,10%)/0.85] to-[hsl(220,45%,12%)/0.65]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,45%,8%)/0.6] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-white/80 text-sm font-medium">Disponível agora • Resposta imediata</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-hero text-white mb-6"
          >
            Descubra a Verdade
            <br />
            <span className="gradient-text-gold">Com Provas Reais</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed max-w-2xl"
          >
            Detetive Particular em Brasília DF com mais de 20 anos de experiência e 2.500+ casos resolvidos. 
            Investigação profissional, sigilosa e com 98% de taxa de sucesso.
          </motion.p>

          {/* Key Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 mb-10 text-white/80"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-detective-gold/10 border border-detective-gold/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-detective-gold" />
              </div>
              <span className="text-sm font-medium">100% sigiloso</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-detective-gold/10 border border-detective-gold/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-detective-gold" />
              </div>
              <span className="text-sm font-medium">Atendimento 24h</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-detective-gold/10 border border-detective-gold/20 flex items-center justify-center">
                <Camera className="w-5 h-5 text-detective-gold" />
              </div>
              <span className="text-sm font-medium">Fotos e vídeos</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-detective-gold hover:bg-detective-gold-dark text-detective-navy font-bold px-8 py-6 rounded-xl shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-xl)] hover:-translate-y-1 transition-all duration-300 text-base group"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              WhatsApp (61) 98284-4543
            </Button>
            <Button 
              onClick={handlePhoneClick}
              className="bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 font-semibold px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300 text-base"
              size="lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Consulta Gratuita
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/10"
          >
            {[
              { value: "2.500+", label: "Casos Resolvidos" },
              { value: "4.9★", label: "Avaliação Google" },
              { value: "20+", label: "Anos de Experiência" },
              { value: "98%", label: "Taxa de Sucesso" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl font-bold text-detective-gold font-display">{stat.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;