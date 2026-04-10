import { Search, Camera, UserCheck, Building2, Heart, Scale, ArrowRight } from "lucide-react";

const ServicesSection = () => {
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
    },
    {
      icon: <Camera className="w-6 h-6" />,
      number: "02",
      title: "Vigilância e Monitoramento",
      description: "Serviços de vigilância profissional com equipamentos de última geração para pessoas físicas e jurídicas.",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      number: "03",
      title: "Investigação de Antecedentes",
      description: "Verificação completa de histórico pessoal, profissional e financeiro com relatório detalhado.",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      number: "04",
      title: "Investigação Corporativa",
      description: "Investigações empresariais, fraudes internas, concorrência desleal e processos de due diligence.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      number: "05",
      title: "Localização de Pessoas",
      description: "Busca e localização de pessoas desaparecidas, parentes distantes e devedores em todo o Brasil.",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      number: "06",
      title: "Perícia e Consultoria",
      description: "Laudos técnicos, perícias particulares e consultoria especializada em investigação profissional.",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-detective-gold/[0.03] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-detective-navy/[0.03] rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <span className="heading-editorial text-detective-gold mb-4 block">Nossos Serviços</span>
          <div className="section-divider mb-6"></div>
          <h2 className="heading-section text-detective-navy mb-6">
            Investigação com<br />
            <span className="text-gold-gradient">Precisão e Sigilo</span>
          </h2>
          <p className="text-professional">
            Cada caso é único. Utilizamos metodologias comprovadas e tecnologia avançada 
            para entregar resultados concretos com total discrição.
          </p>
        </div>

        {/* Services — Editorial numbered list */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border-t border-border last:border-b py-8 md:py-10 cursor-pointer hover:bg-detective-gold/[0.02] transition-all duration-500"
              onClick={() => handleWhatsAppClick(service.title)}
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Number */}
                <div className="col-span-2 md:col-span-1">
                  <span className="font-mono text-sm text-detective-gold/60 group-hover:text-detective-gold transition-colors duration-300">
                    {service.number}
                  </span>
                </div>

                {/* Title + badge */}
                <div className="col-span-10 md:col-span-3 flex items-center gap-3">
                  <h3 className="font-playfair text-lg md:text-xl font-semibold text-detective-navy group-hover:text-detective-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  {service.highlight && (
                    <span className="hidden md:inline-flex px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-detective-crimson/10 text-detective-crimson rounded-full">
                      {service.highlight}
                    </span>
                  )}
                </div>

                {/* Description */}
                <div className="col-span-10 col-start-3 md:col-span-6 md:col-start-5">
                  <p className="text-professional-grey text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex col-span-2 md:col-span-2 justify-end">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-detective-gold group-hover:border-detective-gold group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-professional-grey group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;