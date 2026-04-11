import { useState } from "react";
import { Search, Camera, UserCheck, Building2, Heart, Scale, ArrowRight, MessageCircle } from "lucide-react";

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleWhatsAppClick = (service: string) => {
    const message = `Olá! Tenho interesse no serviço de ${service}.`;
    const phoneNumber = "5561982844543";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    try {
      window.open(waUrl, '_blank');
    } catch {
      window.open("tel:+5561982844543", "_blank");
    }
  };

  const services = [
    {
      icon: <Search className="w-6 h-6" />,
      number: "01",
      title: "Investigação Conjugal",
      description: "Investigação discreta de infidelidade conjugal com relatórios detalhados contendo fotos, vídeos e evidências concretas para uso legal.",
      highlight: "Mais solicitado",
      detail: "Provas válidas juridicamente"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      number: "02",
      title: "Vigilância e Monitoramento",
      description: "Serviços de vigilância profissional com equipamentos de última geração para pessoas físicas e jurídicas.",
      detail: "Equipamentos modernos"
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      number: "03",
      title: "Investigação de Antecedentes",
      description: "Verificação completa de histórico pessoal, profissional e financeiro com relatório detalhado.",
      detail: "Relatório completo"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      number: "04",
      title: "Investigação Corporativa",
      description: "Investigações empresariais, fraudes internas, concorrência desleal e processos de due diligence.",
      detail: "Proteção empresarial"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      number: "05",
      title: "Localização de Pessoas",
      description: "Busca e localização de pessoas desaparecidas, parentes distantes e devedores em todo o Brasil.",
      detail: "Cobertura nacional"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      number: "06",
      title: "Perícia e Consultoria",
      description: "Laudos técnicos, perícias particulares e consultoria especializada em investigação profissional.",
      detail: "Laudos técnicos"
    },
  ];

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-detective-gold/[0.02] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-detective-navy/[0.03] rounded-full blur-3xl"></div>
      <div className="absolute top-40 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-detective-gold/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header — centered */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="heading-editorial text-detective-gold mb-4 block">Nossos Serviços</span>
          <div className="section-divider mx-auto mb-8"></div>
          <h2 className="heading-section text-detective-navy mb-6">
            Investigação com{" "}
            <span className="text-gold-gradient">Precisão e Sigilo</span>
          </h2>
          <p className="text-professional max-w-xl mx-auto">
            Cada caso é único. Utilizamos metodologias comprovadas e tecnologia avançada 
            para entregar resultados concretos com total discrição.
          </p>
        </div>

        {/* Services — Interactive cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-7 rounded-2xl border cursor-pointer transition-all duration-500 ${
                hoveredIndex === index 
                  ? 'bg-detective-navy border-detective-gold/30 shadow-[0_8px_40px_-8px_hsl(var(--detective-gold)/0.15)]' 
                  : 'bg-card border-border hover:border-detective-gold/20'
              }`}
              onClick={() => handleWhatsAppClick(service.title)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Number watermark */}
              <span className={`absolute top-4 right-5 font-mono text-5xl font-bold transition-colors duration-500 ${
                hoveredIndex === index ? 'text-detective-gold/10' : 'text-border'
              }`}>
                {service.number}
              </span>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${
                hoveredIndex === index 
                  ? 'bg-detective-gold/20 text-detective-gold' 
                  : 'bg-detective-navy/[0.06] text-detective-navy'
              }`}>
                {service.icon}
              </div>

              {/* Title + badge */}
              <div className="flex items-center gap-2 mb-3">
                <h3 className={`font-playfair text-lg font-semibold transition-colors duration-300 ${
                  hoveredIndex === index ? 'text-white' : 'text-detective-navy'
                }`}>
                  {service.title}
                </h3>
                {service.highlight && (
                  <span className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider bg-detective-crimson/15 text-detective-crimson rounded-full">
                    {service.highlight}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-5 transition-colors duration-300 ${
                hoveredIndex === index ? 'text-white/60' : 'text-muted-foreground'
              }`}>
                {service.description}
              </p>

              {/* Footer */}
              <div className={`flex items-center justify-between pt-4 border-t transition-colors duration-300 ${
                hoveredIndex === index ? 'border-white/10' : 'border-border'
              }`}>
                <span className={`text-xs font-mono uppercase tracking-wider transition-colors duration-300 ${
                  hoveredIndex === index ? 'text-detective-gold/70' : 'text-muted-foreground'
                }`}>
                  {service.detail}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredIndex === index 
                    ? 'bg-detective-gold text-detective-navy' 
                    : 'border border-border text-muted-foreground'
                }`}>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button 
            onClick={() => handleWhatsAppClick("Investigação Particular")}
            className="btn-accent group"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Solicitar Orçamento Gratuito
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
