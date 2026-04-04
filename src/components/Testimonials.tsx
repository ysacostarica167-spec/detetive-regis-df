import { Star, Quote, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    { name: "Maria S.", location: "Águas Claras", rating: 5, text: "Profissionalismo exemplar. Descobri a verdade que precisava com total sigilo. Recomendo muito o trabalho do Detetive Regis.", service: "Conjugal" },
    { name: "Carlos R.", location: "Taguatinga", rating: 5, text: "Empresa séria e competente. Resolveram meu caso de fraude corporativa em poucas semanas. Evidências claras e relatório detalhado.", service: "Empresarial" },
    { name: "Ana Paula M.", location: "Asa Sul", rating: 5, text: "Encontraram meu pai após 10 anos sem contato. Trabalho incrível de localização. Eternamente grata pela dedicação.", service: "Localização" },
    { name: "Roberto F.", location: "Guará", rating: 5, text: "Atendimento 24h real. Me ligaram numa madrugada de sábado e resolveram minha urgência. Preço justo e honesto.", service: "Conjugal" },
    { name: "Juliana L.", location: "Lago Sul", rating: 5, text: "Discreto e eficiente. Ninguém soube da investigação. As provas foram aceitas no processo de divórcio sem problemas.", service: "Jurídica" },
    { name: "Fernando A.", location: "Ceilândia", rating: 5, text: "Consulta gratuita muito esclarecedora. Detetive honesto que explicou tudo antes de começar. Resultado excelente.", service: "Conjugal" },
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="section-divider absolute top-0" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-mono text-[hsl(var(--detective-gold))] mb-4 block">Depoimentos</span>
            <h2 className="heading-section text-[hsl(var(--detective-navy))]">
              O que dizem nossos
              <br />
              <span className="gradient-text-gold">clientes.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-[hsl(var(--detective-gold))] text-[hsl(var(--detective-gold))]" />
              ))}
            </div>
            <div>
              <span className="text-[hsl(var(--detective-navy))] font-bold text-lg">4.9</span>
              <span className="text-muted-foreground text-sm ml-2">• 2.500+ clientes</span>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Grid - Masonry-like */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={`group p-6 md:p-8 rounded-2xl border border-border/60 hover:border-[hsl(var(--detective-gold)/0.2)] hover:shadow-[var(--shadow-lg)] transition-all duration-500 bg-card ${index === 0 ? 'md:row-span-1' : ''}`}
            >
              {/* Service tag */}
              <span className="text-mono text-[hsl(var(--detective-gold)/0.6)] mb-4 block text-[10px]">
                {testimonial.service}
              </span>
              
              <p className="text-[hsl(var(--detective-navy))] leading-relaxed mb-6 text-[15px]">
                "{testimonial.text}"
              </p>
              
              <div className="flex justify-between items-center pt-4 border-t border-border/40">
                <div>
                  <p className="font-semibold text-[hsl(var(--detective-navy))] text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.location}, DF</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[hsl(var(--detective-gold))] text-[hsl(var(--detective-gold))]" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
