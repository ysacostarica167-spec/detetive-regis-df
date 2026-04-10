import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Shield, Award, ChevronDown } from "lucide-react";
import heroImage from "@/assets/detective-hero-hq.jpg";
import LazyImage from "@/components/LazyImage";

const useCountUp = (end: number, duration = 2000, suffix = "") => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return { count, ref, suffix };
};

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Tenho interesse nos serviços de investigação particular.";
    const phoneNumber = "5561982844543";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    try {
      window.open(waUrl, '_blank');
    } catch {
      window.open("tel:+5561982844543", "_blank");
    }
  };

  const handlePhoneClick = () => {
    window.open("tel:+5561982844543", "_blank");
  };

  const stat1 = useCountUp(2500, 2000);
  const stat2 = useCountUp(15, 1500);
  const stat3 = useCountUp(98, 1800);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <LazyImage
          src={heroImage}
          alt="Detetive Particular Profissional - Investigação DF"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,45%,8%)] via-[hsl(210,45%,10%,0.92)] to-[hsl(210,45%,15%,0.7)]"></div>
        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Left column — main content */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Editorial label */}
            <div className="flex items-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="glow-dot animate-pulse-glow"></div>
              <span className="heading-editorial text-detective-gold">Investigação Profissional • Brasília DF</span>
            </div>

            {/* Main Heading */}
            <h1 className="heading-hero mb-8 animate-fade-in-left" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <span className="block text-white/95">Descubra a</span>
              <span className="block text-gold-gradient">Verdade</span>
              <span className="block text-white/80 text-3xl md:text-4xl lg:text-5xl font-playfair font-normal italic mt-2">
                com provas reais
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
              Investigação 100% sigilosa com relatórios detalhados incluindo fotos e vídeos. 
              Atendimento imediato em todo o Distrito Federal.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.5s', opacity: 0 }}>
              <Button
                onClick={handleWhatsAppClick}
                className="btn-accent text-base group"
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                WhatsApp (61) 98284-4543
              </Button>
              <Button
                onClick={handlePhoneClick}
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                <Phone className="w-5 h-5 mr-2" />
                Consulta Gratuita
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 animate-fade-in" style={{ animationDelay: '0.6s', opacity: 0 }}>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Shield className="w-4 h-4 text-detective-gold/70" />
                <span>100% Confidencial</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Award className="w-4 h-4 text-detective-gold/70" />
                <span>Profissional Certificado</span>
              </div>
            </div>
          </div>

          {/* Right column — stats */}
          <div className="lg:col-span-5 xl:col-span-4 xl:col-start-9">
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-8 animate-fade-in-right" style={{ animationDelay: '0.5s', opacity: 0 }}>
              <div className="text-center border-b border-white/10 pb-6" ref={stat1.ref}>
                <div className="stat-number">{stat1.count.toLocaleString('pt-BR')}+</div>
                <span className="heading-editorial text-white/50 mt-2 block">Casos Resolvidos</span>
              </div>
              <div className="text-center border-b border-white/10 pb-6" ref={stat2.ref}>
                <div className="stat-number">{stat2.count}+</div>
                <span className="heading-editorial text-white/50 mt-2 block">Anos de Experiência</span>
              </div>
              <div className="text-center" ref={stat3.ref}>
                <div className="stat-number">{stat3.count}%</div>
                <span className="heading-editorial text-white/50 mt-2 block">Taxa de Sucesso</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/30" />
      </div>
    </section>
  );
};

export default HeroSection;