import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Clock, Users, MapPin, CheckCircle } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import detetiveFoto from "@/assets/detetive-regis-foto.jpg";

const AboutSection = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-detective-gold" />,
      title: "Graduado em Investigação",
      description: "Formação completa em técnicas de investigação profissional"
    },
    {
      icon: <Shield className="w-6 h-6 text-detective-gold" />,
      title: "15+ Anos de Experiência",
      description: "Mais de década e meia atuando em investigações particulares"
    },
    {
      icon: <Users className="w-6 h-6 text-detective-gold" />,
      title: "2.500+ Casos Resolvidos",
      description: "Histórico comprovado em investigações no DF"
    },
    {
      icon: <MapPin className="w-6 h-6 text-detective-gold" />,
      title: "Cobertura Total DF",
      description: "Atendimento em todas as regiões do Distrito Federal"
    }
  ];

  const differentials = [
    "Sigilo absoluto e confidencialidade garantida",
    "Relatórios detalhados com evidências legais",
    "Equipamentos modernos de investigação",
    "Atendimento personalizado 24 horas",
    "Preços justos e transparentes",
    "Metodologia profissional comprovada"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-detective-navy mb-6">
            Sobre o Detetive Regis
          </h2>
          <p className="text-professional max-w-3xl mx-auto">
            Profissional graduado em investigação com vasta experiência em casos particulares e corporativos, 
            atuando com ética, discrição e eficiência em todo o Distrito Federal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo + Bio */}
          <div className="flex flex-col items-center lg:items-start gap-8">
            {/* Professional Photo */}
            <div className="relative group">
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-500 border-4 border-detective-gold/20">
                <LazyImage
                  src={detetiveFoto}
                  alt="Detetive Particular Regis - Investigador Profissional em Brasília DF"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-detective-gold/10 rounded-2xl -z-10"></div>
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-detective-navy/10 rounded-2xl -z-10"></div>
            </div>

            {/* Name & Title */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-detective-navy">Regis</h3>
              <p className="text-detective-gold font-medium">Detetive Particular • Investigador Profissional</p>
              <p className="text-sm text-professional-grey mt-1">Brasília - Distrito Federal</p>
            </div>
          </div>

          {/* Professional Story */}
          <div>
            <h3 className="heading-card text-detective-navy mb-6">
              Experiência e Profissionalismo
            </h3>
            <div className="space-y-4 text-professional-grey">
              <p>
                Com formação acadêmica completa em investigação profissional e mais de 15 anos de experiência 
                no mercado, o Detetive Regis especializou-se em oferecer soluções investigativas precisas e 
                discretas para pessoas físicas e jurídicas.
              </p>
              <p>
                Durante sua carreira, desenvolveu expertise em investigações conjugais, corporativas, 
                localização de pessoas e verificação de antecedentes, sempre mantendo os mais altos 
                padrões de ética e confidencialidade.
              </p>
              <p>
                Utiliza métodos modernos de investigação combinados com técnicas tradicionais comprovadas, 
                garantindo resultados eficazes e relatórios detalhados que podem ser utilizados 
                legalmente quando necessário.
              </p>
            </div>

            {/* Mini achievements inline */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-detective-gold/15 flex items-center justify-center flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-detective-navy text-sm">{achievement.title}</p>
                    <p className="text-xs text-professional-grey">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Differentials */}
        <div className="bg-gradient-to-br from-muted/50 to-muted rounded-2xl p-8">
          <h3 className="heading-card text-detective-navy text-center mb-8">
            Diferenciais do Nosso Trabalho
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentials.map((differential, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-detective-gold mt-0.5 flex-shrink-0" />
                <span className="text-professional-grey">{differential}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
