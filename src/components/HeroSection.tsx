import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Shield, Award, ChevronDown, Eye } from "lucide-react";
import heroImage from "@/assets/detective-hero-noir.jpg";

const useCountUp = (end: number, duration = 2000) => {
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

  return { count, ref };
};

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

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
        <img
          src={heroImage}
          alt="Detetive Particular Profissional - Investigação DF"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          width={1920}
          height={1080}
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,45%,5%,0.95)] via-[hsl(210,45%,8%,0.85)] to-[hsl(210,45%,10%,0.6)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,45%,5%,0.8)] via-transparent to-[hsl(210,45%,5%,0.3)]"></div>
        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-detective-gold/10 rounded-full hidden lg:block"></div>
      <div className="absolute bottom-40 right-40 w-32 h-32 border border-detective-gold/5 rounded-full hidden lg:block"></div>
      <div className="absolute left-0 top-1/3 w-px h-48 bg-gradient-to-b from-transparent via-detective-gold/30 to-transparent hidden lg:block"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-28 pb-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[75vh]">
          {/* Left column */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Editorial label */}
            <div className="flex items-center gap-3 mb-8 animate-fade-in">
              <div className="glow-dot animate-pulse-glow"></div>
              <span className="heading-editorial text-detective-gold">Investigação Profissional • Brasília DF</span>
            </div>

            {/* Main Heading */}
            <h1 className="heading-hero mb-8 animate-fade-in-left" style={{ animationDelay: '0.15s' }}>
              <span className="block text-white/95">Descubra a</span>
              <span className="block text-gold-gradient">Verdade</span>
              <span className="block text-white/70 text-3xl md:text-4xl lg:text-5xl font-playfair font-normal italic mt-3">
                com provas reais
              </span>
            </h1>

            {/* Subtitle with vertical accent */}
            <div className="flex items-start gap-4 mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-px h-16 bg-gradient-to-b from-detective-gold to-transparent flex-shrink-0 mt-1"></div>
              <p className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed">
                Investigação 100% sigilosa com relatórios detalhados incluindo fotos e vídeos. 
                Atendimento imediato em todo o Distrito Federal.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
                className="border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 mr-2" />
                Consulta Gratuita
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2.5 text-white/50 text-sm">
                <div className="w-8 h-8 rounded-full border border-detective-gold/30 flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5 text-detective-gold/70" />
                </div>
                <span>100% Confidencial</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/50 text-sm">
                <div className="w-8 h-8 rounded-full border border-detective-gold/30 flex items-center justify-center">
                  <Award className="w-3.5 h-3.5 text-detective-gold/70" />
                </div>
                <span>Profissional Certificado</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/50 text-sm">
                <div className="w-8 h-8 rounded-full border border-detective-gold/30 flex items-center justify-center">
                  <Eye className="w-3.5 h-3.5 text-detective-gold/70" />
                </div>
                <span>Atendimento 24h</span>
              </div>
            </div>
          </div>

          {/* Right column — stats card */}
          <div className="lg:col-span-5 xl:col-span-4 xl:col-start-9">
            <div className="relative animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-detective-gold/[0.05] blur-3xl rounded-full"></div>
              
              <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 space-y-1">
                {/* Card header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="glow-dot"></div>
                  <span className="heading-editorial text-detective-gold/80 text-xs">Resultados Comprovados</span>
                </div>

                <div className="text-center border-b border-white/[0.06] pb-7" ref={stat1.ref}>
                  <div className="stat-number">{stat1.count.toLocaleString('pt-BR')}+</div>
                  <span className="heading-editorial text-white/40 mt-2 block text-xs">Casos Resolvidos</span>
                </div>
                <div className="text-center border-b border-white/[0.06] py-7" ref={stat2.ref}>
                  <div className="stat-number">{stat2.count}+</div>
                  <span className="heading-editorial text-white/40 mt-2 block text-xs">Anos de Experiência</span>
                </div>
                <div className="text-center pt-7" ref={stat3.ref}>
                  <div className="stat-number">{stat3.count}%</div>
                  <span className="heading-editorial text-white/40 mt-2 block text-xs">Taxa de Sucesso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/20 text-[10px] font-mono uppercase tracking-widest">Explorar</span>
        <ChevronDown className="w-5 h-5 text-white/20 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
