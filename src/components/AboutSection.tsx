import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Clock, Users, MapPin, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-detective-gold" />,
      title: "Graduado em Investigação",
      description: "Formação completa em técnicas de investigação profissional"
    },
    {
      icon: <Shield className="w-6 h-6 text-detective-gold" />,
      title: "10+ Anos de Experiência",
      description: "Mais de uma década atuando em investigações particulares"
    },
    {
      icon: <Users className="w-6 h-6 text-detective-gold" />,
      title: "500+ Casos Resolvidos",
      description: "Centenas de investigações concluídas com sucesso"
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
          {/* Professional Story */}
          <div>
            <h3 className="heading-card text-detective-navy mb-6">
              Experiência e Profissionalismo
            </h3>
            <div className="space-y-4 text-professional-grey">
              <p>
                Com formação acadêmica completa em investigação profissional e mais de 10 anos de experiência 
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
          </div>

          {/* Achievements Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-professional text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                    {achievement.icon}
                  </div>
                  <h4 className="font-semibold text-detective-navy mb-2">{achievement.title}</h4>
                  <p className="text-sm text-professional-grey">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
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