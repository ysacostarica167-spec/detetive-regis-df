import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const featured = {
    name: "Maria S.",
    location: "Águas Claras",
    text: "Profissionalismo exemplar. Descobri a verdade que precisava com total sigilo. O Detetive Regis mudou a minha vida — finalmente tive paz.",
    service: "Investigação Conjugal",
  };

  const testimonials = [
    { name: "Carlos R.", location: "Taguatinga", text: "Resolveram meu caso de fraude corporativa em poucas semanas. Evidências claras e relatório detalhado.", service: "Empresarial" },
    { name: "Ana Paula M.", location: "Asa Sul", text: "Encontraram meu pai após 10 anos sem contato. Trabalho incrível de localização.", service: "Localização" },
    { name: "Roberto F.", location: "Guará", text: "Atendimento 24h real. Me ligaram numa madrugada de sábado e resolveram minha urgência.", service: "Conjugal" },
    { name: "Juliana L.", location: "Lago Sul", text: "Discreto e eficiente. As provas foram aceitas no processo de divórcio sem problemas.", service: "Jurídica" },
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="section-divider absolute top-0" />
      
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[hsl(var(--detective-gold)/0.02)] to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-mono text-[hsl(var(--detective-gold))] mb-4 block">Depoimentos Reais</span>
            <h2 className="heading-section text-[hsl(var(--detective-navy))]">
              Clientes que
              <br />
              <span className="gradient-text-gold">encontraram a verdade.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 bg-[hsl(var(--detective-navy))] px-5 py-3 rounded-2xl"
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-[hsl(var(--detective-gold))] text-[hsl(var(--detective-gold))]" />
              ))}
            </div>
            <span className="text-white font-bold">4.9</span>
            <span className="text-white/40 text-sm">• 2.500+ clientes</span>
          </motion.div>
        </div>

        {/* Layout: Featured + Grid */}
        <div className="grid lg:grid-cols-5 gap-5">
          {/* Featured testimonial - large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 relative p-10 md:p-14 rounded-3xl bg-[hsl(var(--detective-navy))] overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[hsl(var(--detective-gold)/0.04)] to-transparent" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[hsl(var(--detective-gold)/0.03)] blur-3xl" />
            
            <Quote className="w-12 h-12 text-[hsl(var(--detective-gold)/0.15)] mb-6" />
            
            <p className="text-white text-xl md:text-2xl font-display leading-relaxed mb-10 relative z-10">
              "{featured.text}"
            </p>
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--detective-gold)/0.15)] flex items-center justify-center">
                <span className="text-[hsl(var(--detective-gold))] font-display font-bold text-lg">{featured.name[0]}</span>
              </div>
              <div>
                <p className="text-white font-semibold">{featured.name}</p>
                <p className="text-white/40 text-sm">{featured.location}, DF • {featured.service}</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-[hsl(var(--detective-gold))] text-[hsl(var(--detective-gold))]" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Small testimonials grid */}
          <div className="lg:col-span-2 grid gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-border/60 hover:border-[hsl(var(--detective-gold)/0.2)] hover:shadow-[var(--shadow-md)] transition-all duration-500 bg-card"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-[hsl(var(--detective-gold))] text-[hsl(var(--detective-gold))]" />
                  ))}
                  <span className="text-mono text-[9px] text-[hsl(var(--detective-gold)/0.5)] ml-2">{t.service}</span>
                </div>
                <p className="text-[hsl(var(--detective-navy))] text-sm leading-relaxed mb-3">"{t.text}"</p>
                <p className="text-muted-foreground text-xs font-medium">{t.name} • {t.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;