import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Users, MapPin, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const achievements = [
    { icon: <Award className="w-6 h-6 text-detective-gold" />, value: "15+", label: "Anos de Experiência" },
    { icon: <Users className="w-6 h-6 text-detective-gold" />, value: "500+", label: "Casos Resolvidos" },
    { icon: <Shield className="w-6 h-6 text-detective-gold" />, value: "100%", label: "Sigilo Garantido" },
    { icon: <MapPin className="w-6 h-6 text-detective-gold" />, value: "DF", label: "Cobertura Total" },
  ];

  const differentials = [
    "Sigilo absoluto e confidencialidade garantida",
    "Relatórios detalhados com evidências legais",
    "Equipamentos modernos de investigação",
    "Atendimento personalizado 24 horas",
    "Preços justos e transparentes",
    "Metodologia profissional comprovada",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="gold-line mb-6" />
            <h2 className="heading-section text-detective-navy mb-6">
              Experiência e Credibilidade
            </h2>
            <div className="space-y-4 text-professional-grey leading-relaxed">
              <p>
                Com formação acadêmica completa em investigação profissional e mais de 15 anos de experiência 
                no mercado, o <strong className="text-detective-navy">Detetive Regis</strong> especializou-se em oferecer soluções investigativas 
                precisas e discretas para pessoas físicas e jurídicas em todo o Distrito Federal.
              </p>
              <p>
                Nossa metodologia combina técnicas modernas de investigação digital com métodos tradicionais 
                comprovados de vigilância e análise comportamental. Utilizamos equipamentos de última geração 
                para garantir evidências claras que podem ser utilizadas legalmente.
              </p>
              <p>
                Cada caso é tratado com máxima seriedade e confidencialidade. Oferecemos relatórios detalhados, 
                documentação fotográfica e videográfica profissional, além de orientação jurídica sobre como 
                utilizar as evidências coletadas.
              </p>
            </div>

            {/* Differentials */}
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {differentials.map((diff, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-detective-gold mt-1 flex-shrink-0" />
                  <span className="text-sm text-professional-grey">{diff}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border border-border/60 rounded-2xl hover:border-detective-gold/20 hover:shadow-[var(--shadow-lg)] transition-all duration-500">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-detective-gold/10 flex items-center justify-center">
                      {achievement.icon}
                    </div>
                    <div className="text-3xl font-bold text-detective-navy font-display mb-1">{achievement.value}</div>
                    <p className="text-sm text-professional-grey">{achievement.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Card */}
            <Card className="mt-4 bg-detective-navy border-0 rounded-2xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <h3 className="text-white font-display text-xl font-bold mb-3">Precisa investigar?</h3>
                <p className="text-white/60 text-sm mb-5">Consulta inicial gratuita e 100% confidencial</p>
                <a 
                  href="https://wa.me/5561982844543?text=Olá! Gostaria de saber mais sobre os serviços de investigação."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-accent text-sm"
                >
                  Falar com Especialista
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;