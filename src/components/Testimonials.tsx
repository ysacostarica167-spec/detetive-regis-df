import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    { name: "Maria S.", location: "Águas Claras, DF", rating: 5, text: "Profissionalismo exemplar. Descobri a verdade que precisava com total sigilo. Recomendo muito o trabalho do Detetive Regis.", service: "Investigação Conjugal" },
    { name: "Carlos R.", location: "Taguatinga, DF", rating: 5, text: "Empresa séria e competente. Resolveram meu caso de fraude corporativa em poucas semanas. Evidências claras e relatório detalhado.", service: "Investigação Empresarial" },
    { name: "Ana Paula M.", location: "Asa Sul, DF", rating: 5, text: "Encontraram meu pai após 10 anos sem contato. Trabalho incrível de localização. Eternamente grata pela dedicação.", service: "Localização de Pessoas" },
    { name: "Roberto F.", location: "Guará, DF", rating: 5, text: "Atendimento 24h real. Me ligaram numa madrugada de sábado e resolveram minha urgência. Preço justo e honesto.", service: "Investigação Conjugal" },
    { name: "Juliana L.", location: "Lago Sul, DF", rating: 5, text: "Discreto e eficiente. Ninguém soube da investigação. As provas foram aceitas no processo de divórcio sem problemas.", service: "Documentação Legal" },
    { name: "Fernando A.", location: "Ceilândia, DF", rating: 5, text: "Consulta gratuita muito esclarecedora. Detetive honesto que explicou tudo antes de começar. Resultado excelente.", service: "Investigação Conjugal" },
  ];

  return (
    <section className="py-24 bg-detective-navy relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="heading-section text-white mb-4">
            Depoimentos de Clientes
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-detective-gold text-detective-gold" />
              ))}
            </div>
            <span className="text-white font-bold">4.9/5</span>
            <span className="text-white/40 text-sm">• 2.500+ clientes atendidos</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full bg-white/[0.04] backdrop-blur-sm border-white/[0.06] hover:bg-white/[0.07] hover:border-detective-gold/20 transition-all duration-500 rounded-2xl">
                <CardContent className="pt-6 pb-6">
                  <Quote className="w-8 h-8 text-detective-gold/20 mb-4" />
                  
                  <div className="flex mb-4 gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-detective-gold text-detective-gold" />
                    ))}
                  </div>
                  
                  <p className="text-white/70 mb-6 leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-white/[0.06] pt-4 flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                      <p className="text-white/40 text-xs">{testimonial.location}</p>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider bg-detective-gold/10 text-detective-gold px-3 py-1 rounded-full font-medium">
                      {testimonial.service}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;