import { Search, Camera, UserCheck, Building2, Heart, Scale, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    { icon: <Search className="w-5 h-5" />, number: "01", title: "Investigação Conjugal", description: "Investigação discreta de infidelidade com relatórios detalhados, fotos e vídeos como evidências judiciais.", link: "/investigacao-conjugal", highlight: true },
    { icon: <Building2 className="w-5 h-5" />, number: "02", title: "Investigação Empresarial", description: "Fraudes internas, concorrência desleal, due diligence e proteção patrimonial corporativa.", link: "/investigacao-empresarial" },
    { icon: <Heart className="w-5 h-5" />, number: "03", title: "Localização de Pessoas", description: "Busca e localização de pessoas desaparecidas, parentes perdidos e devedores em todo Brasil.", link: "/localizacao-pessoas" },
    { icon: <Camera className="w-5 h-5" />, number: "04", title: "Serviços Cibernéticos", description: "Varredura digital, rastreamento online e análise de dispositivos com tecnologia de ponta.", link: "/servicos-ciberneticos" },
    { icon: <Scale className="w-5 h-5" />, number: "05", title: "Investigação Jurídica", description: "Laudos técnicos, perícias particulares e produção de provas para processos judiciais.", link: "/investigacao-juridica" },
    { icon: <UserCheck className="w-5 h-5" />, number: "06", title: "Investigação Familiar", description: "Verificação de antecedentes, proteção familiar e monitoramento de comportamento de risco.", link: "/investigacao-familiar" },
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative">
      {/* Section divider top */}
      <div className="section-divider absolute top-0" />
      
      <div className="container mx-auto px-4">
        {/* Section Header - editorial style */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="text-mono text-[hsl(var(--detective-gold))] mb-4 block">Serviços</span>
            <h2 className="heading-section text-[hsl(var(--detective-navy))]">
              Soluções em
              <br />
              <span className="gradient-text-gold">investigação.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-professional max-w-md"
          >
            Cada caso exige uma abordagem única. Utilizamos metodologias comprovadas e tecnologia avançada para resultados concretos.
          </motion.p>
        </div>

        {/* Services List - editorial layout */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link 
                to={service.link} 
                className="group block border-t border-border/60 last:border-b"
              >
                <div className="flex items-center gap-6 md:gap-10 py-8 md:py-10 px-2 md:px-4 hover:bg-muted/30 transition-all duration-500">
                  {/* Number */}
                  <span className="text-mono text-[hsl(var(--detective-gold)/0.4)] group-hover:text-[hsl(var(--detective-gold))] transition-colors w-8 flex-shrink-0">
                    {service.number}
                  </span>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--detective-gold)/0.06)] border border-[hsl(var(--detective-gold)/0.1)] flex items-center justify-center text-[hsl(var(--detective-gold))] flex-shrink-0 group-hover:bg-[hsl(var(--detective-gold)/0.12)] group-hover:border-[hsl(var(--detective-gold)/0.2)] transition-all duration-500">
                    {service.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-display font-bold text-[hsl(var(--detective-navy))] group-hover:text-[hsl(var(--detective-gold-dark))] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 max-w-lg hidden sm:block">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Arrow */}
                  <ArrowRight className="w-5 h-5 text-border group-hover:text-[hsl(var(--detective-gold))] group-hover:translate-x-2 transition-all duration-300 flex-shrink-0" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
