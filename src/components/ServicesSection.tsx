import { Search, Camera, UserCheck, Building2, Heart, Scale, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    { icon: <Search className="w-6 h-6" />, title: "Investigação Conjugal", description: "Infidelidade comprovada com fotos, vídeos e relatórios aceitos judicialmente.", link: "/investigacao-conjugal", tag: "Mais procurado" },
    { icon: <Building2 className="w-6 h-6" />, title: "Investigação Empresarial", description: "Fraudes, concorrência desleal e due diligence corporativa.", link: "/investigacao-empresarial" },
    { icon: <Heart className="w-6 h-6" />, title: "Localização de Pessoas", description: "Encontramos pessoas desaparecidas e devedores em todo o Brasil.", link: "/localizacao-pessoas" },
    { icon: <Camera className="w-6 h-6" />, title: "Serviços Cibernéticos", description: "Varredura digital, rastreamento e análise de dispositivos.", link: "/servicos-ciberneticos" },
    { icon: <Scale className="w-6 h-6" />, title: "Investigação Jurídica", description: "Produção de provas, laudos técnicos e perícias particulares.", link: "/investigacao-juridica" },
    { icon: <UserCheck className="w-6 h-6" />, title: "Investigação Familiar", description: "Proteção familiar, antecedentes e monitoramento preventivo.", link: "/investigacao-familiar" },
  ];

  return (
    <section className="py-24 md:py-32 bg-[hsl(var(--detective-navy))] relative overflow-hidden noise-overlay">
      {/* Dramatic background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[hsl(var(--detective-gold)/0.03)] to-transparent" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[hsl(var(--detective-gold)/0.02)] blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-mono text-[hsl(var(--detective-gold))] mb-6 block"
          >
            Nossos Serviços
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-section text-white mb-6"
          >
            Cada caso tem uma
            <br />
            <span className="gradient-text-gold">solução sob medida.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg max-w-lg mx-auto"
          >
            Metodologias comprovadas e tecnologia avançada para resultados concretos.
          </motion.p>
        </div>

        {/* Services Grid - 3x2 bold cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link 
                to={service.link} 
                className="group relative block p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.07] hover:border-[hsl(var(--detective-gold)/0.25)] transition-all duration-500 h-full overflow-hidden"
              >
                {/* Tag */}
                {service.tag && (
                  <span className="absolute top-5 right-5 text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--detective-gold))] bg-[hsl(var(--detective-gold)/0.1)] px-3 py-1 rounded-full border border-[hsl(var(--detective-gold)/0.15)]">
                    {service.tag}
                  </span>
                )}

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--detective-gold)/0.08)] border border-[hsl(var(--detective-gold)/0.12)] flex items-center justify-center text-[hsl(var(--detective-gold))] mb-6 group-hover:bg-[hsl(var(--detective-gold)/0.15)] group-hover:scale-110 transition-all duration-500">
                  {service.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-[hsl(var(--detective-gold-light))] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Arrow */}
                <div className="flex items-center gap-2 text-[hsl(var(--detective-gold)/0.5)] group-hover:text-[hsl(var(--detective-gold))] transition-colors">
                  <span className="text-mono text-[10px]">Saiba mais</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>

                {/* Hover glow */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[hsl(var(--detective-gold)/0.05)] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;