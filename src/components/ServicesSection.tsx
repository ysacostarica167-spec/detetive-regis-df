import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Camera, UserCheck, Building2, Heart, Scale, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import investigationIcon from "@/assets/investigation-icon-hq.jpg";
import surveillanceIcon from "@/assets/surveillance-icon-hq.jpg";
import LazyImage from "@/components/LazyImage";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    { icon: <Search className="w-6 h-6" />, title: "Investigação Conjugal", description: "Investigação discreta de infidelidade com relatórios detalhados, fotos e vídeos como evidências.", image: investigationIcon, link: "/investigacao-conjugal" },
    { icon: <Camera className="w-6 h-6" />, title: "Vigilância e Monitoramento", description: "Serviços de vigilância profissional com equipamentos de última geração e cobertura total.", image: surveillanceIcon, link: "/servicos-ciberneticos" },
    { icon: <UserCheck className="w-6 h-6" />, title: "Investigação de Antecedentes", description: "Verificação completa de histórico pessoal, profissional e financeiro.", link: "/investigacao-juridica" },
    { icon: <Building2 className="w-6 h-6" />, title: "Investigação Corporativa", description: "Fraudes internas, concorrência desleal, due diligence e proteção empresarial.", link: "/investigacao-empresarial" },
    { icon: <Heart className="w-6 h-6" />, title: "Localização de Pessoas", description: "Busca e localização de pessoas desaparecidas, parentes e devedores.", link: "/localizacao-pessoas" },
    { icon: <Scale className="w-6 h-6" />, title: "Perícia e Consultoria", description: "Laudos técnicos, perícias particulares e consultoria especializada.", link: "/investigacao-juridica" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="gold-line mx-auto mb-6" />
            <h2 className="heading-section text-detective-navy mb-6">
              Nossos Serviços
            </h2>
            <p className="text-professional max-w-2xl mx-auto">
              Serviços completos de investigação particular em Brasília DF com total discrição e tecnologia de ponta.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link to={service.link} className="group block h-full">
                <Card className="h-full border border-border/60 rounded-2xl overflow-hidden hover:border-detective-gold/30 hover:shadow-[var(--shadow-xl)] transition-all duration-500 group-hover:-translate-y-1">
                  {service.image && (
                    <div className="h-48 overflow-hidden bg-muted">
                      <LazyImage
                        src={service.image}
                        alt={`${service.title} - Detetive Particular DF`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  )}
                  {!service.image && (
                    <div className="h-48 bg-gradient-to-br from-detective-navy/5 to-detective-gold/5 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-detective-gold/10 flex items-center justify-center text-detective-gold group-hover:scale-110 transition-transform duration-500">
                        {service.icon}
                      </div>
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-bold text-detective-navy group-hover:text-detective-gold transition-colors duration-300 flex items-center justify-between">
                      {service.title}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-detective-gold" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-professional-grey leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;