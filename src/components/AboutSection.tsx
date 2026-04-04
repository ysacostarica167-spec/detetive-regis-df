import { Award, Shield, Users, MapPin, CheckCircle, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const achievements = [
    { value: "20+", label: "Anos de\nExperiência", icon: <Award className="w-5 h-5" /> },
    { value: "2.500+", label: "Casos\nResolvidos", icon: <Users className="w-5 h-5" /> },
    { value: "98%", label: "Taxa de\nSucesso", icon: <Shield className="w-5 h-5" /> },
    { value: "33", label: "Regiões\nAtendidas", icon: <MapPin className="w-5 h-5" /> },
  ];

  return (
    <section className="py-24 md:py-32 bg-[hsl(var(--detective-navy))] relative overflow-hidden noise-overlay">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[hsl(var(--detective-gold)/0.03)] to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[hsl(var(--detective-gold)/0.02)] blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-start">
          {/* Left - Story (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <span className="text-mono text-[hsl(var(--detective-gold))] mb-6 block">Sobre o Detetive Regis</span>
            <h2 className="heading-section text-white mb-8">
              Duas décadas
              <br />
              desvendando a verdade.
            </h2>
            
            <div className="space-y-5 text-white/50 leading-relaxed text-lg">
              <p>
                Com formação acadêmica em investigação profissional e mais de <span className="text-white/80 font-medium">20 anos no mercado</span>, 
                o Detetive Regis construiu uma reputação sólida baseada em resultados concretos e sigilo absoluto.
              </p>
              <p>
                Nossa metodologia combina <span className="text-white/80 font-medium">técnicas avançadas de investigação digital</span> com 
                métodos tradicionais comprovados — vigilância, análise comportamental e inteligência de campo — 
                para entregar evidências claras e juridicamente válidas.
              </p>
            </div>

            {/* Differentials as a clean list */}
            <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "Sigilo absoluto garantido",
                "Relatórios com evidências legais",
                "Equipamentos de última geração",
                "Atendimento personalizado 24h",
                "Preços justos e transparentes",
                "Metodologia profissional comprovada",
              ].map((diff, index) => (
                <div key={index} className="flex items-center gap-3 py-2">
                  <CheckCircle className="w-4 h-4 text-[hsl(var(--detective-gold))] flex-shrink-0" />
                  <span className="text-sm text-white/60">{diff}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-8 text-center hover:bg-white/[0.06] hover:border-[hsl(var(--detective-gold)/0.15)] transition-all duration-500 group"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2 group-hover:text-[hsl(var(--detective-gold))] transition-colors">
                    {achievement.value}
                  </div>
                  <p className="text-xs text-white/30 uppercase tracking-wider whitespace-pre-line leading-relaxed">
                    {achievement.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="mt-4 bg-gradient-to-br from-[hsl(var(--detective-gold)/0.1)] to-[hsl(var(--detective-gold)/0.03)] border border-[hsl(var(--detective-gold)/0.15)] rounded-2xl p-8 text-center group hover:border-[hsl(var(--detective-gold)/0.3)] transition-all duration-500">
              <h3 className="text-white font-display text-xl font-bold mb-3">Precisa investigar?</h3>
              <p className="text-white/40 text-sm mb-6">Consulta inicial gratuita e 100% confidencial</p>
              <a 
                href="https://wa.me/5561982844543?text=Olá! Gostaria de saber mais sobre os serviços de investigação."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[hsl(var(--detective-gold))] text-[hsl(var(--detective-navy))] px-6 py-3 rounded-xl font-bold text-sm hover:bg-[hsl(var(--detective-gold-light))] transition-all duration-300 group-hover:shadow-[var(--shadow-gold)]"
              >
                Falar com Especialista
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
