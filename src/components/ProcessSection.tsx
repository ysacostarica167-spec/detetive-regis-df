import { Phone, Search, FileText, Shield } from "lucide-react";
import { motion } from "framer-motion";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: <Phone className="w-6 h-6" />,
      title: "Contato Sigiloso",
      description: "Fale conosco por WhatsApp ou telefone. A consulta inicial é gratuita e 100% confidencial.",
    },
    {
      number: "02",
      icon: <Search className="w-6 h-6" />,
      title: "Planejamento",
      description: "Traçamos a melhor estratégia para o seu caso, com prazos e metodologia definidos.",
    },
    {
      number: "03",
      icon: <FileText className="w-6 h-6" />,
      title: "Investigação",
      description: "Executamos a operação com equipamentos de ponta e total discrição no campo.",
    },
    {
      number: "04",
      icon: <Shield className="w-6 h-6" />,
      title: "Resultados",
      description: "Você recebe relatório completo com fotos, vídeos e provas aceitas judicialmente.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="section-divider absolute top-0" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-mono text-[hsl(var(--detective-gold))] mb-4 block"
          >
            Como Funciona
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section text-[hsl(var(--detective-navy))]"
          >
            Do contato ao
            <br />
            <span className="gradient-text-gold">resultado em 4 passos.</span>
          </motion.h2>
        </div>

        {/* Steps - horizontal timeline */}
        <div className="grid md:grid-cols-4 gap-8 md:gap-5 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-14 left-[12%] right-[12%] h-px bg-gradient-to-r from-[hsl(var(--detective-gold)/0.1)] via-[hsl(var(--detective-gold)/0.3)] to-[hsl(var(--detective-gold)/0.1)]" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="text-center relative group"
            >
              {/* Number circle */}
              <div className="relative mx-auto mb-8">
                <div className="w-[72px] h-[72px] rounded-full border-2 border-[hsl(var(--detective-gold)/0.2)] bg-background flex items-center justify-center mx-auto relative z-10 group-hover:border-[hsl(var(--detective-gold)/0.5)] group-hover:shadow-[var(--shadow-accent)] transition-all duration-500">
                  <span className="text-[hsl(var(--detective-gold))]">{step.icon}</span>
                </div>
                <span className="absolute -top-2 -right-2 text-mono text-[10px] text-[hsl(var(--detective-gold)/0.4)] bg-background px-1.5 py-0.5 rounded z-20">{step.number}</span>
              </div>
              
              <h3 className="text-lg font-display font-bold text-[hsl(var(--detective-navy))] mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[240px] mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;